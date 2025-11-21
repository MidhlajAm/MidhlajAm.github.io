import React from 'react';

const SocialLinks = () => {
    const socialLinks = [
        {
            name: 'WhatsApp',
            url: 'https://wa.me/YOUR_PHONE_NUMBER', // Replace with your WhatsApp number
            icon: '/icons/whatsapp.svg',
            label: 'WHATSAPP'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/YOUR_USERNAME', // Replace with your Instagram username
            icon: '/icons/instagram.svg',
            label: 'INSTAGRAM'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/midhlaj-am', // Replace with your LinkedIn username
            icon: '/icons/linkedin.svg',
            label: 'LINKEDIN'
        },
        {
            name: 'X',
            url: 'https://x.com/YOUR_USERNAME', // Replace with your X (Twitter) username
            icon: '/icons/x.svg',
            label: 'X (TWITTER)'
        }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                >
                    <div className="w-16 h-16 border-2 border-white flex items-center justify-center hover:bg-white transition-colors duration-200 p-2">
                        <img
                            src={social.icon}
                            alt={social.name}
                            className="w-full h-full group-hover:invert transition-all duration-200"
                        />
                    </div>
                    <span className="font-vt323 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                        {social.label}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
