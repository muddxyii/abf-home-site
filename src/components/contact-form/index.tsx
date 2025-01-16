'use client'

import {useState} from 'react';
import {useReCaptcha} from "next-recaptcha-v3";

const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB limit
const ContactForm = () => {
    const {executeRecaptcha} = useReCaptcha();
    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        message: '',
        repairPermission: false,
        lockPermission: false,
        terms: false
    });
    const [attachment, setAttachment] = useState<File | null>(null);
    const [errors, setErrors] = useState({
        email: '',
        file: ''
    });
    const [status, setStatus] = useState('idle');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prev => ({...prev, email: 'Please enter a valid email address'}));
            return false;
        }
        setErrors(prev => ({...prev, email: ''}));
        return true;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setErrors(prev => ({...prev, file: 'File size must be less than 3MB'}));
                e.target.value = '';
                setAttachment(null);
                return;
            }
            setErrors(prev => ({...prev, file: ''}));
            setAttachment(file);
        } else {
            setAttachment(null);
            setErrors(prev => ({...prev, file: ''}));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(values.email)) return;
        if (attachment && attachment.size > MAX_FILE_SIZE) {
            setErrors(prev => ({...prev, file: 'File size must be less than 3MB'}));
            return;
        }

        setStatus('sending');
        try {
            const token = await executeRecaptcha("contact_form_submit");

            const formData = {...values};
            if (attachment) {
                const reader = new FileReader();
                const fileContent = await new Promise((resolve) => {
                    reader.onloadend = () => {
                        const base64content = reader.result?.toString().split(',')[1];
                        resolve(base64content);
                    };
                    reader.readAsDataURL(attachment);
                });

                Object.assign(formData, {
                    attachment: {
                        filename: attachment.name,
                        content: fileContent,
                        type: attachment.type
                    }
                });
            }

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token
                })
            });

            if (!res.ok) throw new Error();
            setStatus('sent');
            setValues({
                name: '', email: '', address: '', message: '',
                lockPermission: false,
                repairPermission: false,
                terms: false
            });
            setAttachment(null);
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl" itemScope
                  itemType="http://schema.org/ContactPoint">
                <div className="card-body">
                    {status === 'sent' && <div className="alert alert-success">Message sent!</div>}
                    {status === 'error' && <div className="alert alert-error">Failed to send message</div>}

                    <h2 className="text-lg font-semibold">Contact Information</h2>
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={values.name}
                            onChange={(e) => setValues({...values, name: e.target.value})}
                            className="input input-bordered w-full pt-4 peer"
                            placeholder=" "
                            aria-label="Full Name"
                        />
                        <label htmlFor="name" className={labelClass}>
                            Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={values.email}
                            onChange={(e) => {
                                setValues({...values, email: e.target.value});
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

                    <h2 className="text-lg font-semibold">Service Information</h2>
                    {/* Address */}
                    <div className="relative">
                       <textarea
                           name="address"
                           id="address"
                           required
                           value={values.address}
                           onChange={(e) => setValues({...values, address: e.target.value})}
                           className="textarea textarea-bordered w-full pt-4 peer min-h-[100px]"
                           placeholder=" "
                           aria-label="Service Address"
                           itemProp="address"
                       />
                        <label htmlFor="address" className={labelClass}>
                            Backflow Address (Street, City, Zip Code)
                        </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                       <textarea
                           name="message"
                           id="message"
                           required
                           value={values.message}
                           onChange={(e) => setValues({...values, message: e.target.value})}
                           className="textarea textarea-bordered w-full pt-4 peer min-h-[100px]"
                           placeholder=" "
                           aria-label="Service Request Details"
                           itemProp="description"
                       />
                        <label htmlFor="message" className={labelClass}>
                            Service Details (Job Name, Inspection, Repair)
                        </label>
                    </div>

                    {/*Permissions */}
                    <h2 className="text-lg font-semibold">Permissions</h2>
                    <div className="relative mb-2">
                        <label className="flex items-start">
                            <input
                                type="checkbox"
                                name="repairPermission"
                                className="checkbox checkbox-primary"
                                checked={values.repairPermission}
                                onChange={(e) => setValues({...values, repairPermission: e.target.checked})}
                            />
                            <span
                                className="ml-2">You have permission to make any necessary repairs on-site.</span>
                        </label>
                        <label className="flex items-start mt-2">
                            <input
                                type="checkbox"
                                name="lockPermission"
                                className="checkbox checkbox-primary"
                                checked={values.lockPermission}
                                onChange={(e) => setValues({...values, lockPermission: e.target.checked})}
                            />
                            <span className="ml-2">You have permission to cut the lock and replace it.</span>
                        </label>
                    </div>


                    {/* Attachments */}
                    <h2 className="text-lg font-semibold">Attach Relevant Documents <br/>(e.g., Notifications, Maps,
                        Permits)</h2>
                    <div className="relative">
                        <input
                            type="file"
                            name="attachment"
                            id="attachment"
                            onChange={handleFileChange}
                            className="file-input file-input-bordered file-input-primary w-full" // Added file-input-primary
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            aria-label="Attachment"
                        />
                        <div className="text-sm mt-1">
                            {attachment ? (
                                <span className="text-gray-500">Selected file: {attachment.name}</span>
                            ) : (
                                <span className="text-gray-500">Attach relevant documents (optional, max 3MB)</span>
                            )}
                        </div>
                        {errors.file && <div className="text-error text-sm mt-1">{errors.file}</div>}
                    </div>

                    {/*Service Terms and Conditions */}
                    <div className="mt-6 p-4 bg-base-200 rounded-lg">
                        <label className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                name="terms"
                                required
                                className="checkbox checkbox-primary mt-1"
                                checked={values.terms}
                                onChange={(e) => setValues({...values, terms: e.target.checked})}
                            />
                            <span className="text-sm">
                I agree to the service terms and conditions
              </span>
                        </label>

                        <p className="text-sm mt-2 text-gray-500">
                            AnyBackflow is not responsible for inaccessible backflow assemblies. Service fees apply for
                            inaccessible devices.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? 'Sending...' : 'Request Service'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const labelClass = "absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-base-100 mx-1 peer-focus:text-base left-1 whitespace-nowrap transition-all duration-300";
export default ContactForm;