"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [cart, setCart] = useState<{ name: string; price: number; }[]>([
        { name: 'Regular Fit Long Sleeve Top', price: 38.99 },
        { name: 'Black Crop Tailored Jacket', price: 62.99 },
        // Add other products here...
    ]);
    
    const [selectedItems, setSelectedItems] = useState<{ name: string; price: number; }[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (item: { name: string; price: number; }) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(i => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the order to your backend
        alert(`Order placed by ${name}!`);
    };

    return (
        <div className="bg-white min-h-screen p-10 text-black">
            <h1 className="text-5xl font-extrabold text-emerald-900 text-center mb-10">
                Contact Us
            </h1>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-emerald-800 mb-5">Place Your Order</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Cart Items Selection */}
                    <div className="border p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-emerald-900 mb-4">Select Products</h3>
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.name} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={item.name}
                                        checked={selectedItems.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                        className="mr-3"
                                    />
                                    <label htmlFor={item.name} className="text-lg text-gray-700">
                                        {item.name} - ${item.price.toFixed(2)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* User Details */}
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border border-gray-300 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white font-bold py-4 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-emerald-700"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
