import React, { useState } from 'react';
import PixelCard from '../ui/PixelCard';
import RetroButton from '../ui/RetroButton';
import SocialLinks from '../ui/SocialLinks';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show sending animation
        setIsSending(true);

        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:midhlaj.am786@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show sent animation after a delay
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);

            // Reset form
            setFormData({ name: '', email: '', message: '' });

            // Reset sent state after 3 seconds
            setTimeout(() => {
                setIsSent(false);
            }, 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 pb-24 md:pb-8">
            <div className="max-w-2xl w-full">
                <h2 className="text-3xl font-press-start mb-12 text-center text-shadow-retro">CONTACT</h2>

                <PixelCard>
                    <form onSubmit={handleSubmit} className="space-y-6 font-vt323 text-xl">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="uppercase">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-black border-2 border-white p-2 text-white focus:outline-none focus:bg-gray-900"
                                placeholder="ENTER NAME"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="uppercase">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-black border-2 border-white p-2 text-white focus:outline-none focus:bg-gray-900"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="uppercase">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="bg-black border-2 border-white p-2 text-white focus:outline-none focus:bg-gray-900 resize-none"
                                placeholder="TYPE MESSAGE..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSending || isSent}
                            className={`
                w-full border-2 border-white px-6 py-2 
                text-white font-press-start text-sm
                transition-all duration-200
                ${isSending ? 'animate-pulse bg-gray-800' : ''}
                ${isSent ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}
                ${(isSending || isSent) ? 'cursor-not-allowed' : 'active:translate-y-1'}
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
              `}
                        >
                            {isSending ? 'SENDING...' : isSent ? '✓ SENT!' : 'SEND'}
                        </button>
                    </form>
                </PixelCard>

                {/* Social Media Links */}
                <div className="mt-12">
                    <h3 className="text-xl font-press-start text-center mb-6">CONNECT WITH ME</h3>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
