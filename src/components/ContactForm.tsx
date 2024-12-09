'use client'

import { useState } from 'react';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        email: ''
    });
    const [status, setStatus] = useState('idle');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
            return false;
        }
        setErrors(prev => ({ ...prev, email: '' }));
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(values.email)) return;

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
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl" itemScope itemType="http://schema.org/ContactPoint">
                <div className="card-body">
                    {status === 'sent' && <div className="alert alert-success">Message sent!</div>}
                    {status === 'error' && <div className="alert alert-error">Failed to send message</div>}

                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={values.name}
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                            className="input input-bordered w-full pt-4 peer"
                            placeholder=" "
                            aria-label="Full Name"
                        />
                        <label htmlFor="name" className={labelClass}>
                            Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={values.email}
                            onChange={(e) => {
                                setValues({ ...values, email: e.target.value });
                                validateEmail(e.target.value);
                            }}
                            className={`input input-bordered w-full pt-4 peer ${errors.email ? 'input-error' : ''}`}
                            placeholder=" "
                            aria-label="Email Address"
                            itemProp="email"
                        />
                        <label htmlFor="email" className={labelClass}>
                            Email
                        </label>
                        {errors.email && <div className="text-error text-sm mt-1">{errors.email}</div>}
                    </div>

                    <div className="relative">
                       <textarea
                           name="address"
                           id="address"
                           required
                           value={values.address}
                           onChange={(e) => setValues({ ...values, address: e.target.value })}
                           className="textarea textarea-bordered w-full pt-4 peer min-h-[100px]"
                           placeholder=" "
                           aria-label="Service Address"
                           itemProp="address"
                       />
                        <label htmlFor="address" className={labelClass}>
                            Address (Street, City, Zip Code)
                        </label>
                    </div>

                    <div className="relative">
                       <textarea
                           name="message"
                           id="message"
                           required
                           value={values.message}
                           onChange={(e) => setValues({ ...values, message: e.target.value })}
                           className="textarea textarea-bordered w-full pt-4 peer min-h-[100px]"
                           placeholder=" "
                           aria-label="Service Request Details"
                           itemProp="description"
                       />
                        <label htmlFor="message" className={labelClass}>
                            How can we help?
                        </label>
                    </div>

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

const labelClass = "absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-base-100 mx-1 peer-focus:text-base left-1 whitespace-nowrap";

export default ContactForm;