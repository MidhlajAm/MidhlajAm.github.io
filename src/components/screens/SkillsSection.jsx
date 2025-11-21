import React from 'react';

const SkillsSection = () => {
    const skills = {
        "MOBILE": ["Flutter", "Dart", "Android", "iOS"],
        "BACKEND": ["Firebase", "Cloud Functions", "Firestore", "REST APIs"],
        "TOOLS": ["Git", "VS Code", "Figma", "Postman"]
    };

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center items-center p-8">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-press-start mb-12 text-center text-shadow-retro">SKILLS</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="space-y-4">
                            <h3 className="font-press-start text-xl border-b-4 border-white pb-2 mb-4">{category}</h3>
                            <ul className="space-y-2 font-vt323 text-xl">
                                {items.map(item => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white inline-block"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
