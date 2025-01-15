import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyCaptcha(token: string) {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    });
    return response.json();
}

export async function POST(request: Request) {
    try {
        const {
            name,
            email,
            address,
            message,
            repairPermission,
            lockPermission,
            attachment,
            captchaToken
        } = await request.json();

        const captchaVerification = await verifyCaptcha(captchaToken);
        if (!captchaVerification.success || captchaVerification.score < 0.5) {
            return Response.json({error: 'Invalid captcha'}, {status: 400});
        }

        const emailAttachment = attachment ? [{
            filename: attachment.filename,
            content: Buffer.from(attachment.content, 'base64'),
            contentType: attachment.type
        }] : [];

        await resend.emails.send({
            from: 'Anybackflow.com Inc. <nikolas@anybackflow.com>',
            to: 'nikolas@anybackflow.com',
            replyTo: email,
            subject: `New Service Request from ${name}`,
            html: `
                <h2>New Service Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Message:</strong> ${message}</p>
                <h3>Permissions</h3>
                <p><strong>Repair Permission:</strong> ${repairPermission ? 'Yes' : 'No'}</p>
                <p><strong>Replace Lock Permission:</strong> ${lockPermission ? 'Yes' : 'No'}</p>
                <br/>
                <p><strong>reCAPTCHA Score: ${captchaVerification.score}</strong></p>
            `,
            text: `
                New Service Request
                
                Name: ${name}
                Email: ${email}
                Address: ${address}
                Message: ${message}

                Permissions:
                Repair Permission: ${repairPermission ? 'Yes' : 'No'}
                Replace Lock Permission: ${lockPermission ? 'Yes' : 'No'}
            `,
            attachments: emailAttachment
        });

        return Response.json({success: true});
    } catch (error) {
        console.error('Email sending failed:', error);
        return Response.json({error: 'Failed to send email'}, {status: 500});
    }
}