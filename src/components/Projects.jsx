import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const projectsData = [
    {
        featured: true,
        title: "AutoXpert – Vehicle Damage Identification & Repair Shop Recommendation",
        images: [
            "projects/autoxpert-1.jpg",
            "projects/autoxpert-2.jpg",
            "projects/autoxpert-3.jpg",
            "projects/autoxpert-4.jpg",
        ],
        description: "AI-based mobile app to detect vehicle damage from images, analyze tire condition, predict vehicle market prices, and recommend nearby repair shops. Built with deep learning models for accurate damage classification.",
        tags: ["Python", "TensorFlow", "Keras", "Flask", "React Native", "AI/ML"],
        github: "https://github.com/manojaberathna24/autoxpert-app",
        live: "https://github.com/manojaberathna24/autoxpert-app",
    },
    {
        featured: false,
        title: "Gemini Meeting Bot – AI Meeting Assistant",
        images: [
            "projects/meeting-bot-1.jpg",
            "projects/meeting-bot-2.jpg",
        ],
        description: "AI assistant that automatically joins Zoom, Google Meet, and Microsoft Teams meetings, transcribes conversations, generates summaries and action items, and delivers PDF reports via email. Uses speech-to-text and LLM for intelligent summarization.",
        tags: ["Python", "Gemini AI", "OpenRouter", "Playwright", "SMTP", "PDF Generation"],
        github: "https://github.com/manojaberathna24",
        live: "https://github.com/manojaberathna24",
    },
    {
        featured: false,
        title: "AI Chatbot with OpenRouter",
        images: [
            "projects/chatbot-1.jpg",
            "projects/chatbot-2.jpg",
        ],
        description: "Real-time conversational AI chatbot supporting contextual and personalized interactions using LLM APIs. Features memory management, image capture, and streaming responses.",
        tags: ["Python", "Flask", "OpenRouter API", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/manojaberathna24/OpenRouter-ChatBot",
        live: "https://github.com/manojaberathna24/OpenRouter-ChatBot",
    },
    {
        featured: false,
        title: "DataSense AI – Automated Data Analysis & AutoML",
        images: [
            "projects/datasense-1.jpg",
        ],
        description: "End-to-end platform for automated data preprocessing, visualization, ML model training, and natural language querying for faster insights. Supports multiple ML algorithms.",
        tags: ["Python", "Pandas", "Scikit-learn", "AutoML", "Streamlit"],
        github: "https://github.com/manojaberathna24/DatasetAutomation",
        live: "https://datasence.streamlit.app/",
    },
    {
        featured: false,
        title: "Image Classification & Auto-Labeling System",
        images: [
            "projects/imgclass-1.jpg",
            "projects/imgclass-2.jpg",
        ],
        description: "Deep learning based image classification system with automated labeling capabilities. Uses CNN architecture for accurate multi-class classification.",
        tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN"],
        github: "https://github.com/manojaberathna24/ImageClassifiacation-Automation",
        live: "https://github.com/manojaberathna24/ImageClassifiacation-Automation",
    },
    {
        featured: false,
        title: "AI Job Application Assistant",
        images: [
            "projects/job-assistant-1.jpg",
        ],
        description: "Streamlit application that helps users optimize their job applications using AI. Analyzes resumes and job descriptions to provide tailored recommendations.",
        tags: ["Python", "Streamlit", "OpenAI", "NLP"],
        github: "https://github.com/manojaberathna24/Job-assistent",
        live: "https://jobassistent.streamlit.app/",
    },
    {
        featured: false,
        title: "MPS PetCare – AI-Powered Pet E-Commerce Platform",
        images: [
            "projects/petcare-1.jpg",
            "projects/petcare-2.jpg",
            "projects/petcare-3.jpg",
            "projects/petcare-4.jpg",
        ],
        description: "Complete e-commerce platform for pet products with AI chatbot, user authentication, product catalog, pet adoption system, and admin dashboard. Features responsive design and modern UI.",
        tags: ["React", "Node.js", "MongoDB", "AI Chatbot", "Full-Stack"],
        github: "https://github.com/manojaberathna24/AiPowerd_Petshop",
        live: "https://serene-crumble-7a5b1f.netlify.app",
    },
    {
        featured: false,
        title: "AI Email Agent Automation with n8n",
        images: [
            "projects/n8n.png",
        ],
        description: "Automated email workflow system built with n8n for intelligent email processing, auto-replies, and task automation. Integrates with multiple services.",
        tags: ["n8n", "Automation", "AI Agent", "Workflow"],
        github: "https://github.com/manojaberathna24/AiEmailAgent-N8N",
        live: "https://github.com/manojaberathna24/AiEmailAgent-N8N",
    },
];


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", right: "10px", zIndex: 1 }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", left: "10px", zIndex: 1 }} onClick={onClick} />;
}


const ProjectCard = ({ project, isFeatured, index }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    if (isFeatured) {
        return (
            <motion.div
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className={`md:col-span-7 text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <p className="text-[#64ffda] text-sm mb-2">Featured Project</p>
                    <h3 className="text-3xl font-bold text-white mb-4 hover:text-[#64ffda] transition-colors"><a href={project.live || project.github} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                    <div className="bg-[#112240] p-6 rounded-md shadow-lg mb-4"><p className="text-[#ccd6f6]">{project.description}</p></div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">{project.tags.map(tag => (<span key={tag} className="text-slate-400 text-sm font-mono">{tag}</span>))}</div>
                    <div className="flex justify-start space-x-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaGithub size={24} /></a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiExternalLink size={24} /></a>
                    </div>
                </div>
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="rounded-lg overflow-hidden shadow-2xl slick-container">
                        <Slider {...sliderSettings}>
                            {project.images.map((img, i) => (
                                <div key={i}>
                                    <img src={`/${img}`} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-80 object-contain bg-[#0a192f]" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Regular Project card
    return (
        <motion.div
            className="bg-[#112240] rounded-lg overflow-hidden shadow-lg flex flex-col group"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="overflow-hidden h-48 bg-[#0a192f]">
                {project.images && project.images.length > 0 ? (
                    <Slider {...sliderSettings}>
                        {project.images.map((img, i) => (
                            <div key={i}>
                                <img src={`/${img}`} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-48 object-contain bg-[#0a192f]" />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex items-center justify-center h-full text-4xl">
                        {project.title.includes('Chatbot') ? '🤖' :
                            project.title.includes('Meeting') ? '📹' :
                                project.title.includes('Data') ? '📊' :
                                    project.title.includes('Image') ? '🖼️' :
                                        project.title.includes('Job') ? '💼' :
                                            project.title.includes('Pet') ? '🐾' :
                                                project.title.includes('Email') ? '📧' : '💻'}
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-[#ccd6f6] mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (<span key={tag} className="bg-[#0a192f] text-[#64ffda] text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>))}
                </div>
                <div className="mt-auto flex justify-end space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FaGithub size={24} /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiExternalLink size={24} /></a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const featuredProject = projectsData.find(p => p.featured);
    const otherProjects = projectsData.filter(p => !p.featured);
    return (
        <motion.section id="projects" className="pt-12 pb-24 page-background text-white" initial="hidden" animate="visible" variants={containerVariants}>
            <div className="container mx-auto px-6">
                <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="text-center mb-16">
                    <h2 className="text-4xl font-bold">My Projects</h2>
                    <p className="text-[#8892b0] mt-2">A selection of my AI/ML and full-stack projects. Feel free to explore.</p>
                </motion.div>
                {featuredProject && <ProjectCard project={featuredProject} isFeatured={true} index={0} />}
                {otherProjects.length > 0 && (
                    <motion.div className="text-center my-16">
                        <h3 className="text-3xl font-bold">Other Noteworthy Projects</h3>
                    </motion.div>
                )}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
                    {otherProjects.map((project, index) => (
                        <ProjectCard project={project} key={index} isFeatured={false} index={index + 1} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;