import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center p-3 sm:p-6 md:p-8">
            <div className="max-w-4xl w-full">
                <h2 className="text-2xl sm:text-3xl font-press-start mb-8 sm:mb-12 text-center animate-fadeIn">ABOUT ME</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex items-center justify-center min-h-[250px] sm:min-h-[300px] border-4 border-white p-4 sm:p-6 animate-slideInLeft bg-black">
                        {/* Profile placeholder */}
                        <div className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-white flex items-center justify-center">
                            <span className="font-press-start text-4xl sm:text-5xl">MA</span>
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 font-vt323 text-lg sm:text-xl leading-relaxed animate-slideInRight">
                        <p>
                            I am a passionate Flutter developer who loves building beautiful,
                            performant mobile applications. My journey started with a simple
                            "Hello World" and has evolved into crafting complex cross-platform apps.
                        </p>
                        <p>
                            I specialize in Flutter, Firebase, and modern mobile development.
                            When I'm not coding, you can find me exploring new Flutter packages or
                            contributing to the developer community.
                        </p>
                        <div className="border-l-4 border-white pl-3 sm:pl-4 py-2 mt-4">
                            <p className="text-gray-400 text-base sm:text-lg">CURRENT STATUS:</p>
                            <p>OPEN TO WORK</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
