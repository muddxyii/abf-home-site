'use client'

import { useState } from 'react';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            if (!res.ok) throw new Error();
            setStatus('sent');
            setValues({ name: '', email: '', address: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl" itemScope itemType="http://schema.org/ContactPoint">
                <div className="card-body">
                    {status === 'sent' && <div className="alert alert-success">Message sent!</div>}
                    {status === 'error' && <div className="alert alert-error">Failed to send message</div>}

                    {/* Your existing form fields here */}

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Sending...' : 'Request Service Quote'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;