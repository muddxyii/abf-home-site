import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, address, message } = await request.json();

        await resend.emails.send({
            from: 'AnyBackflow.com Inc <onboarding@resend.dev>',
            to: 'nikspenguins@gmail.com',
            subject: `New Service Request from ${name}`,
            html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Email sending failed:', error);
        return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }
}