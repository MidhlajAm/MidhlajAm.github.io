import React from 'react';

const HomeSection = ({ onNavigate }) => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 pt-20 md:pt-0">
            <div className="max-w-3xl w-full text-center space-y-6 sm:space-y-8">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-press-start leading-relaxed animate-fadeIn break-words">
                    MIDHLAJ AM
                </h1>

                <div className="text-lg sm:text-xl md:text-2xl font-vt323 space-y-3 sm:space-y-4 animate-slideUp delay-200">
                    <p>I create beautiful mobile experiences.</p>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                        <img
                            src="/icons/flutter.svg"
                            alt="Flutter"
                            className="w-6 h-6 sm:w-8 sm:h-8 inline-block"
                        />
                        <span>Flutter Developer | Firebase Expert</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 animate-slideUp delay-300">
                    <button
                        onClick={() => onNavigate('projects')}
                        className="border-2 border-white px-4 sm:px-6 py-2 sm:py-3 text-white font-press-start text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                    >
                        VIEW PROJECTS
                    </button>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="border-2 border-white px-4 sm:px-6 py-2 sm:py-3 text-white font-press-start text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
                    >
                        CONTACT ME
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
