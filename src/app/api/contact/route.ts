import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const {
            name,
            email,
            phone,
            address,
            message,
            repairPermission,
            lockPermission,
            attachment,
            recaptchaToken
        } = await request.json();

        const verificationResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            {method: 'POST'}
        );

        const verificationData = await verificationResponse.json();

        if (!verificationData.success || verificationData.score < 0.5) {
            return Response.json(
                {error: 'reCAPTCHA verification failed'},
                {status: 400}
            );
        }

        const emailAttachment = attachment ? [{
            filename: attachment.filename,
            content: Buffer.from(attachment.content, 'base64'),
            contentType: attachment.type
        }] : [];

        await resend.emails.send({
            from: 'Anybackflow.com Inc. <nikolas@anybackflow.com>',
            to: 'info@anybackflow.com',
            replyTo: email,
            subject: `New Service Request from ${name}`,
            html: `
                <h2>New Service Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Message:</strong> ${message}</p>
                <h3>Permissions</h3>
                <p><strong>Repair Permission:</strong> ${repairPermission ? 'Yes' : 'No'}</p>
                <p><strong>Replace Lock Permission:</strong> ${lockPermission ? 'Yes' : 'No'}</p>
                <br/>
                <p><strong>reCAPTCHA Score:</strong> ${verificationData.score}</p>
            `,
            text: `
                New Service Request
                
                Name: ${name}
                Email: ${email}
                Email: ${phone}
                Address: ${address}
                Message: ${message}

                Permissions:
                Repair Permission: ${repairPermission ? 'Yes' : 'No'}
                Replace Lock Permission: ${lockPermission ? 'Yes' : 'No'}
                
                reCAPTCHA Score: ${verificationData.score}
            `,
            attachments: emailAttachment
        });

        return Response.json({success: true});
    } catch (error) {
        console.error('Request processing failed:', error);
        return Response.json(
            {error: 'Failed to process request'},
            {status: 500}
        );
    }
}