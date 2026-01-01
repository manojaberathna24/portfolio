import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        title: "BSc (Hons) in Information Technology",
        institution: "Horizon Campus, Sri Lanka",
        date: "2022 – 2026",
        description: "Specializing in Artificial Intelligence, Machine Learning, and Data Science.",
        image: "/education/horizon.png"
    },
    {
        title: "G.C.E. Advanced Level",
        institution: "Balalla U.B Wanninayake Navodya School",
        date: "2020",
        description: "Completed with 1 Credit Pass and 2 Simple Passes.",
        image: "/education/school.png"
    }
];

// Grouped certifications by provider
const certificationGroups = [
    {
        provider: "Oracle Certified",
        certs: [
            { title: "AI Foundations Associate", image: "/certifications/oracle-ai.png" },
            { title: "Generative AI Professional", image: "/certifications/oracle-genai.png" },
        ]
    },
    {
        provider: "Coursera",
        certs: [
            { title: "Business Analysis & Process Management", image: "/certifications/coursera-business.png" },
            { title: "Build a Free Website with WordPress", image: "/certifications/coursera-wordpress.png" },
        ]
    },
    {
        provider: "Simplilearn",
        certs: [
            { title: "Data Analytics with Generative AI", image: "/certifications/simplilearn-data.png" },
            { title: "Prompt Engineering with GitHub Copilot", image: "/certifications/simplilearn-prompt.png" },
        ]
    },
    {
        provider: "Kaggle",
        certs: [
            { title: "Intro to Machine Learning", image: "/certifications/kaggle-ml.png" },
            { title: "Pandas", image: "/certifications/kaggle-pandas.png" },
        ]
    },
    {
        provider: "TryHackMe",
        certs: [
            { title: "Completed Rooms", image: "/certifications/tryhackme.png" },
        ]
    }
];

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.section
            id="education"
            className="py-24 page-background text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                {/* Education Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">My Education</h2>
                    <p className="text-[#8892b0] mt-2">My academic journey and qualifications.</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24"
                    variants={containerVariants}
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#112240] rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#64ffda]/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-full h-44 mb-4 flex items-center justify-center">
                                <img src={edu.image} alt={edu.institution} className="h-40 w-auto object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                            <p className="text-lg font-semibold text-[#64ffda] mt-1">{edu.institution}</p>
                            <p className="text-sm text-slate-400 mt-2 mb-3">{edu.date}</p>
                            <p className="text-sm text-[#8892b0]">{edu.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Professional Qualifications Section */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Professional Qualifications</h2>
                    <p className="text-[#8892b0] mt-2">Certifications and courses I've completed.</p>
                </motion.div>

                {/* Certification Groups */}
                {certificationGroups.map((group, groupIndex) => (
                    <motion.div key={groupIndex} variants={itemVariants} className="mb-12">
                        <h3 className="text-2xl font-bold text-[#64ffda] mb-6 text-left max-w-6xl mx-auto">{group.provider}</h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                            variants={containerVariants}
                        >
                            {group.certs.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-[#112240] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#64ffda]/10"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {cert.image ? (
                                        <div className="w-full">
                                            <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
                                            <div className="p-3 bg-[#0a192f] text-center">
                                                <p className="text-[#ccd6f6] text-sm font-medium">{cert.title}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-4 flex items-center gap-4">
                                            <div className="text-3xl">{cert.icon}</div>
                                            <div>
                                                <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Education;