import React, { useState, useEffect } from 'react';
import { Github, Twitter, FileText, ExternalLink, Mail, MessageCircle, Menu, X, Linkedin } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navigation */}
            <nav className="flex justify-between items-center px-4 py-4 md:px-6 border-b border-gray-800 relative z-50">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded"></div>
                    <span className="font-mono font-bold text-lg">Abdullah</span>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden font-mono md:flex space-x-6 text-sm">
                    <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
                    <a href="#projects" className="hover:text-purple-400 transition-colors">#projects</a>
                    <a href="#about" className="hover:text-purple-400 transition-colors">#about-me</a>
                    <a href="#contacts" className="hover:text-purple-400 transition-colors">#contacts</a>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 z-40">
                    <a href="#" className="text-white text-2xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#projects" className="text-white text-2xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>#projects</a>
                    <a href="#about" className="text-white text-2xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>#about-me</a>
                    <a href="#contacts" className="text-white text-2xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>#contacts</a>
                    <div className="flex space-x-6 mt-8">
                        <a href="https://github.com/abdulahshahid" target="_blank" rel="noopener noreferrer">
                            <Github className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/abdulahshahid" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            )}

            {/* Fixed Social Icons (Desktop only) */}
            <div className="hidden md:fixed left-0 top-1/2 transform -translate-y-1/2 md:flex flex-col items-center space-y-4 pl-4 z-50">
                <div className="w-px h-32 bg-gray-600"></div>
                <a href="https://github.com/abdulahshahid" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <a href="https://linkedin.com/in/abdulahshahid" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                <div className="w-px h-32 bg-gray-600"></div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 py-10 text-center md:px-16 md:py-20 relative">
                {/* Left Section: Text */}
                <div className="flex-1 mt-8 md:mt-0 md:text-left">
                    <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                        Abdullah is an <span className="text-purple-400">AI Software Engineer</span> and<br className="hidden md:block" />
                        <span className="text-purple-400">Machine Learning Developer</span>
                    </h1>
                    <p className="font-mono text-gray-400 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
                        He develops production-ready AI systems using cutting-edge ML technologies and deep learning architectures
                    </p>
                    <button className="font-mono px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                        Contact me !!
                    </button>
                </div>

                {/* Right Section: AI/Tech themed graphic */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
                        <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-20">
                            {[...Array(144)].map((_, i) => (
                                <div key={i} className={`w-2 h-2 ${Math.random() > 0.6 ? 'bg-purple-400' : Math.random() > 0.3 ? 'bg-blue-400' : 'bg-gray-700'} rounded-sm`}></div>
                            ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl font-bold text-purple-400 opacity-80">AI</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="flex justify-center px-4 py-10 md:px-16 md:py-16">
                <div className="relative max-w-xl w-full">
                    <div className="text-5xl sm:text-6xl text-gray-600 absolute -top-4 -left-4">"</div>
                    <blockquote className="font-mono text-base sm:text-xl text-center border border-gray-600 p-6 sm:p-8">
                        The best way to predict the future is to invent it
                    </blockquote>
                    <div className="text-5xl sm:text-6xl text-gray-600 absolute -bottom-4 -right-4">"</div>
                    <div className="text-right mt-4 mr-4 sm:mr-8">
                        <span className="font-mono text-gray-400">- Alan Kay</span>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="px-4 py-10 md:px-16 md:py-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
                        <span className="font-mono text-purple-400">#</span>projects
                    </h2>
                    <a href="#" className="font-mono text-sm hover:text-purple-400 transition-colors">
                        View all <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project 1 - Talk.ai */}
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center">
                            <div className="font-mono text-white font-bold text-xl">Talk.ai</div>
                        </div>
                        <div className="font-mono p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">Django React OpenAI Celery</div>
                            <h3 className="font-bold mb-2">Talk.ai Platform</h3>
                            <p className="text-sm text-gray-400 mb-4">AI-powered meeting intelligence with 92% accuracy</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Demo →
                                </button>
                                <button className="px-3 py-1 border border-gray-600 text-gray-400 text-sm hover:border-white hover:text-white transition-colors">
                                    Code →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - RAG Customer Support */}
                    <div className="font-mono border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-green-500 to-teal-600 h-40 flex items-center justify-center relative">
                            <div className="text-white font-bold text-lg text-center">RAG Support</div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                                <div className="w-5 h-5 bg-white rounded"></div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">LangChain FAISS Ollama Python</div>
                            <h3 className="font-bold mb-2">Intelligent Customer Support</h3>
                            <p className="text-sm text-gray-400 mb-4">RAG system with 95% relevance accuracy</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Live →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 - Botnet Detection */}
                    <div className="font-mono border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-red-500 to-orange-600 h-40 flex items-center justify-center">
                            <div className="text-white font-bold text-lg text-center px-2">Botnet Detection</div>
                        </div>
                        <div className="p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">TensorFlow ARIMA Scikit-learn</div>
                            <h3 className="font-bold mb-2">ML Botnet Detection</h3>
                            <p className="font-mono text-sm text-gray-400 mb-4">Deep learning with 94% precision</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Paper →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="px-4 py-10 md:px-16 md:py-16">
                <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
                    <span className="text-purple-400">#</span>skills
                </h2>

                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
                    {/* AI/ML themed graphic */}
                    <div className="flex-1 mb-8 md:mb-0 flex justify-center">
                        <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
                            <div className="absolute inset-0 grid grid-cols-8 gap-1">
                                {[...Array(64)].map((_, i) => (
                                    <div key={i} className={`w-2 h-2 ${Math.random() > 0.7 ? 'bg-purple-400' : Math.random() > 0.4 ? 'bg-blue-400' : 'bg-gray-700'} rounded-sm`}></div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-purple-400 flex items-center justify-center">
                                <span className="text-purple-400 text-xs">ML</span>
                            </div>
                            <div className="absolute top-1/2 right-0 w-8 h-8 sm:w-12 sm:h-12 border-2 border-blue-400 flex items-center justify-center">
                                <span className="text-blue-400 text-xs">AI</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
                        {/* Programming Languages */}
                        <div>
                            <h3 className="font-mono font-bold mb-4 text-white border border-white inline-block px-2 py-1">Languages</h3>
                            <div className="font-mono space-y-2 text-sm text-gray-400">
                                <div>Python C/C++</div>
                                <div>JavaScript SQL</div>
                                <div>HTML CSS</div>
                            </div>
                        </div>

                        {/* AI/ML Frameworks */}
                        <div>
                            <h3 className="font-mono font-bold mb-4 text-white border border-white inline-block px-2 py-1">AI/ML</h3>
                            <div className="font-mono space-y-2 text-sm text-gray-400">
                                <div>LangChain PyTorch</div>
                                <div>TensorFlow Transformers</div>
                                <div>OpenAI GPT NLTK</div>
                            </div>
                        </div>

                        {/* Backend & APIs */}
                        <div>
                            <h3 className="font-mono font-bold mb-4 text-white border border-white inline-block px-2 py-1">Backend</h3>
                            <div className="font-mono space-y-2 text-sm text-gray-400">
                                <div>FastAPI Django</div>
                                <div>Node.js Express</div>
                                <div>REST APIs Docker</div>
                            </div>
                        </div>

                        {/* Databases & Vector DBs */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-mono font-bold mb-4 text-white border border-white inline-block px-2 py-1">Databases</h3>
                                <div className="font-mono space-y-2 text-sm text-gray-400">
                                    <div>PostgreSQL MongoDB</div>
                                    <div>FAISS Pinecone</div>
                                    <div>Redis Elasticsearch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="px-4 py-10 md:px-16 md:py-16">
                <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
                    <span className="text-purple-400">#</span>about-me
                </h2>

                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
                    <div className="flex-1 text-center md:text-left">
                        <p className="font-mono text-gray-400 mb-4 md:mb-6">Hello, I'm Abdullah!</p>
                        <p className="font-mono text-gray-400 mb-4 md:mb-6">
                            I specialize in developing production-ready AI systems 
                            using cutting-edge machine learning and deep learning technologies.
                        </p>
                        
                        <p className="font-mono text-gray-400 mb-6 md:mb-8">
                            I'm passionate about pushing the boundaries of AI technology and have experience as a Teaching Assistant, 
                            mentoring 60+ students in NLP and Computer Architecture. Always eager to learn about the newest AI frameworks and methodologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                                Read More →
                            </button>
                            
                        </div>
                    </div>

                    <div className="flex-1 relative mt-8 md:mt-0 flex justify-center md:justify-end">
                        <div className="w-64 h-80 sm:w-80 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-gray-700">
                            {/* AI/Tech visualization */}
                            <div className="absolute inset-4 grid grid-cols-8 gap-1 opacity-30">
                                {[...Array(120)].map((_, i) => (
                                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.8 ? 'bg-purple-400' : Math.random() > 0.6 ? 'bg-blue-400' : 'bg-gray-600'} rounded-full`}></div>
                                ))}
                            </div>
                            <div className="text-6xl font-bold text-purple-400 opacity-60">AS</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contacts" className="px-4 py-10 md:px-16 md:py-16">
                <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-8 md:mb-12">
                    <span className="text-purple-400">#</span>contacts
                </h2>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                        <p className="font-mono text-gray-400 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
                            I'm interested in AI/ML opportunities, research collaborations, and freelance projects. 
                            If you have interesting challenges or questions about AI systems, don't hesitate to reach out.
                        </p>
                    </div>

                    <div className="border border-gray-700 p-6 rounded-lg text-center md:text-left">
                        <h3 className="font-mono font-bold mb-4">Message me here</h3>
                        <div className="space-y-2">
                            <div className="font-mono flex items-center justify-center md:justify-start space-x-2 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>abdullah.shahid1045@gmail.com</span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-800 px-4 py-8 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <div className="font-mono flex items-center justify-center md:justify-start space-x-2 mb-2">
                            <div className="w-6 h-6 bg-purple-500 rounded"></div>
                            <span className="font-bold">Abdullah</span>
                            <span className="text-gray-400 text-sm md:ml-4">abdullah.shahid1045@gmail.com</span>
                        </div>
                        <p className="text-gray-400 text-sm">AI Software Engineer and Machine Learning Developer</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="font-mono font-bold mb-2">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/abdulahshahid" target="_blank" rel="noopener noreferrer" className="relative z-50">
                                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                            </a>
                            <a href="https://linkedin.com/in/abdulahshahid" target="_blank" rel="noopener noreferrer" className="relative z-50">
                                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="font-mono text-center text-gray-400 text-sm mt-8">
                    © Copyright 2025. Made by Abdullah Shahid
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;