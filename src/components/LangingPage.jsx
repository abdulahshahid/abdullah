import React, { useState, useEffect } from 'react';
import { Github, Twitter, FileText, ExternalLink, Mail, MessageCircle } from 'lucide-react';

const Portfolio = () => {


    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navigation */}
            <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded"></div>
                    <span className="font-firacode font-bold text-lg">Abdullah</span>
                </div>
                <div className="font-firacode flex space-x-6 text-sm">
                    <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">#works</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">#about-me</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">#contacts</a>

                </div>
            </nav>

            <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 pl-4 z-50 pointer-events auto">
                <div className="w-px h-32 bg-gray-600"></div>
                <a
                    href="https://github.com/abdulahshahid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>

                <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                <FileText className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <div className="w-px h-32 bg-gray-600"></div>
            </div>

            {/* Hero Section */}
            <div className="flex items-center justify-between px-16 py-20 relative">
                {/* Left Section: Text */}
                <div className="flex-1">
                    <h1 className="font-firacode text-4xl font-bold mb-6">
                        Abdullah is a <span className="text-purple-400">web designer</span> and<br />
                        <span className="text-purple-400">front-end developer</span>
                    </h1>
                    <p className="font-firacode text-gray-400 mb-8 max-w-md">
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <button className="font-firacode px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                        Contact me !!
                    </button>
                </div>

                {/* Right Section: Character image */}
                <div className="flex-1">
                    <div className="w-80 h-80">
                        <img
                            src="src/assets/Group 46.png"
                            alt="Elias character illustration"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Status indicator pinned to bottom-right of the whole section */}

            </div>


            {/* Quote Section */}
            <div className="flex justify-center px-16 py-16">
                <div className="relative max-w-2xl">
                    <div className="text-6xl text-gray-600 absolute -top-4 -left-4">"</div>
                    <blockquote className="font-firacode font-firacode text-xl text-center border border-gray-600 p-8">
                        With great power comes great electricity bill
                    </blockquote>
                    <div className="text-6xl text-gray-600 absolute -bottom-4 -right-4">"</div>
                    <div className="text-right mt-4 mr-8">
                        <span className="font-firacode text-gray-400">- Dr. Who</span>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="px-16 py-16">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold">
                        <span className="font-firacode text-purple-400">#</span>projects
                    </h2>
                    <a href="#" className="font-firacode text-sm hover:text-purple-400 transition-colors">
                        View all <span className="ml-2">→</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-orange-500 h-48 flex items-center justify-center">
                            <div className="font-firacode text-black font-bold text-xl">ChertNodes</div>
                        </div>
                        <div className="font-firacode p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">HTML SCSS Python Flask</div>
                            <h3 className="font-bold mb-2">ChertNodes</h3>
                            <p className="text-sm text-gray-400 mb-4">Minecraft servers hosting</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Live →
                                </button>
                                <button className="px-3 py-1 border border-gray-600 text-gray-400 text-sm hover:border-white hover:text-white transition-colors">
                                    Cached →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="font-firacode border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-green-600 h-48 flex items-center justify-center relative">
                            <div className="text-white font-bold text-xl">PROTECTX</div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded"></div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">React Express Discord.js Node.JS</div>
                            <h3 className="font-bold mb-2">ProtectX</h3>
                            <p className="text-sm text-gray-400 mb-4">Discord anti-crash bot</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Live →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="font-firacode border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-blue-600 h-48 flex items-center justify-center">
                            <div className="text-white font-bold text-xl">Kahoot Answers Viewer</div>
                        </div>
                        <div className="p-4 border-t border-gray-700">
                            <div className="text-xs text-gray-400 mb-2">CSS Express Node.JS</div>
                            <h3 className="font-bold mb-2">Kahoot Answers Viewer</h3>
                            <p className="font-firacode text-sm text-gray-400 mb-4">Get answers to your kahoot quiz</p>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-purple-400 text-purple-400 text-sm hover:bg-purple-400 hover:text-white transition-colors">
                                    Live →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="px-16 py-16">
                <h2 className="font-firacode text-3xl font-bold mb-12">
                    <span className="text-purple-400">#</span>skills
                </h2>

                <div className="flex items-start space-x-12">
                    <div className="flex-1">
                        {/* Decorative graphic */}
                        <div className="w-64 h-64 relative">
                            <div className="absolute inset-0 grid grid-cols-8 gap-1">
                                {[...Array(64)].map((_, i) => (
                                    <div key={i} className={`w-2 h-2 ${Math.random() > 0.7 ? 'bg-purple-400' : 'bg-gray-700'} rounded-sm`}></div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-purple-400"></div>
                            <div className="absolute top-1/2 right-0 w-12 h-12 border-2 border-purple-400"></div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-8">
                        {/* Languages */}
                        <div>
                            <h3 className="font-firacode font-bold mb-4 text-white border border-white inline-block px-2 py-1">Languages</h3>
                            <div className="font-firacode space-y-2 text-sm text-gray-400">
                                <div>TypeScript Lua</div>
                                <div>Python JavaScript</div>
                            </div>
                        </div>

                        {/* Databases */}
                        <div>
                            <h3 className="font-firacode font-bold mb-4 text-white border border-white inline-block px-2 py-1">Databases</h3>
                            <div className="font-firacode space-y-2 text-sm text-gray-400">
                                <div>SQLite PostgreSQL</div>
                                <div>Mongo</div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="font-firacode font-bold mb-4 text-white border border-white inline-block px-2 py-1">Tools</h3>
                            <div className="font-firacode space-y-2 text-sm text-gray-400">
                                <div>VSCode Neovim Linux</div>
                                <div>Figma XFCE Arch</div>
                                <div>Git Font Awesome</div>
                            </div>
                        </div>

                        {/* Other & Frameworks */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-firacode font-bold mb-4 text-white border border-white inline-block px-2 py-1">Other</h3>
                                <div className="font-firacode space-y-2 text-sm text-gray-400">
                                    <div>HTML CSS EJS SCSS</div>
                                    <div>REST APIs</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-firacode font-bold mb-4 text-white border border-white inline-block px-2 py-1">Frameworks</h3>
                                <div className="font-firacode space-y-2 text-sm text-gray-400">
                                    <div>React Vue</div>
                                    <div>Diaseke Discord.js</div>
                                    <div>Flask Express.js</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="px-16 py-16">
                <h2 className="font-firacode text-3xl font-bold mb-12">
                    <span className="text-purple-400">#</span>about-me
                </h2>

                <div className="flex items-center space-x-12">
                    <div className="flex-1">
                        <p className="font-firacode text-gray-400 mb-6">Hello, i'm Elias!</p>
                        <p className="font-firacode text-gray-400 mb-6">
                            I'm a self-taught front-end developer based in Kyiv, Ukraine. 
                            I can develop websites from scratch and raise them into modern user-friendly web experiences.
                        </p>
                        <p className="font-firacode text-gray-400 mb-8">
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </p>
                        <button className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors">
                            Read more →
                        </button>
                    </div>

                    <div className="flex-1 relative">
                        <div className="w-80 h-96 bg-gray-800 rounded-lg relative overflow-hidden">
                            {/* Character illustration */}
                            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-orange-500 rounded-t-full"></div> */}
                            <div className="flex-1">
                                <div className="w-80 h-80">
                                    <img
                                        src="src/assets/Group 50.png"
                                        alt="Elias character illustration"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="px-16 py-16">
                <h2 className="font-firacode text-3xl font-bold mb-12">
                    <span className="text-purple-400">#</span>contacts
                </h2>

                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <p className="font-firacode text-gray-400 mb-8 max-w-md">
                            I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                        </p>
                    </div>

                    <div className="border border-gray-700 p-6 rounded-lg">
                        <h3 className="font-firacode font-bold mb-4">Message me here</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <MessageCircle className="w-4 h-4" />
                                <span>!Elias#3519</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span>elias@elias.me</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-800 px-16 py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-firacode flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-purple-500 rounded"></div>
                            <span className="font-bold">Elias</span>
                            <span className="text-gray-400 text-sm ml-4">elias@elias.me</span>
                        </div>
                        <p className="text-gray-400 text-sm">Web designer and front-end developer</p>
                    </div>

                    <div>
                        <h4 className="font-firacode font-bold mb-2">Media</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/abdulahshahid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-50"
                            >
                                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                            </a>

                            {/* <div className="w-5 h-5 bg-blue-500 rounded cursor-pointer"></div>
                            <div className="w-5 h-5 bg-gray-600 rounded cursor-pointer"></div> */}
                        </div>
                    </div>
                </div>

                <div className="font-firacode text-center text-gray-400 text-sm mt-8">
                    © Copyright 2022. Made by Elias
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;