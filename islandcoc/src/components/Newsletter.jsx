import React, { useState } from 'react';

import logo from '../assets/logo.jpg'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setMessage('You have successfully subscribed to our newsletter!');
            setEmail('');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        } else {
            setMessage('Please enter a valid email address.');
        }
    };

    return (
        <section className="bg-gray-900 text-gray-100 py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Subscribe to our newsletter.
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Every week new inspiring message...
                    </p>
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                    {message && (
                        <p className="text-sm mt-3 text-green-400">{message}</p>
                    )}
                </div>

                {/* Right Section */}
                <div className='items-center justify-center md:flex hidden'>
                    <img className='w-[30%] h-[30vh] rounded-full' src={logo} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
