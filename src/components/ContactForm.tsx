'use client'

import { useState } from 'react';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        address: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const labelClass = "absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-base-100 mx-1 peer-focus:text-base left-1 whitespace-nowrap";

    return (
        <div className="flex justify-center w-full">
            <form className="card w-96 bg-base-100 shadow-xl" itemScope itemType="http://schema.org/ContactPoint">
                <div className="card-body">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={values.name}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="input input-bordered w-full pt-4 peer"
                            placeholder=" "
                            aria-label="Email Address"
                            itemProp="email"
                        />
                        <label htmlFor="email" className={labelClass}>
                            Email
                        </label>
                    </div>

                    <div className="relative">
                       <textarea
                           name="address"
                           id="address"
                           required
                           value={values.address}
                           onChange={handleChange}
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
                           onChange={handleChange}
                           className="textarea textarea-bordered w-full pt-4 peer min-h-[100px]"
                           placeholder=" "
                           aria-label="Service Request Details"
                           itemProp="description"
                       />
                        <label htmlFor="message" className={labelClass}>
                            How can we help?
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Request Service Quote</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;