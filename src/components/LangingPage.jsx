import React, { useState, useEffect } from 'react';
import { Github, Mail, Menu, X, Linkedin, Terminal, Cpu, Database, Award, ExternalLink, Mic, Code2, Server, BookOpen, ChevronRight } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const projects = [
        {
            tag: "FINAL YEAR PROJECT • BEST FYP RUNNER-UP",
            title: "Talk.ai",
            subtitle: "AI-Powered Meeting Intelligence Platform",
            desc: "End-to-end platform processing 10+ hours of meeting audio daily with 92% diarization accuracy. Microservices architecture with Django, Celery, Redis. Reduced manual documentation time by 80%.",
            stack: ["React", "Django", "Celery", "Redis", "OpenAI"],
            award: true,
        },
        {
            tag: "SYBRID PVT. LTD.",
            title: "Skyzone AI Voice Agent",
            subtitle: "Real-time Inbound Call Handler",
            desc: "Conversational AI voice agent using Django, MySQL, OpenAI and WebRTC/Silero VAD. Automated booking and query handling for 300+ U.S. client locations with 85% autonomous resolution.",
            stack: ["FastAPI", "WebRTC", "MySQL", "ElevenLabs", "Twilio"],
        },
        {
            tag: "HEALTHCARE AI",
            title: "Voice-Health AI",
            subtitle: "Intelligent Healthcare Communication",
            desc: "Automated patient outreach using Twilio, LiveKit, and OpenAI. 89.3% success rate, 76.4% reduction in no-shows, saving staff 3.5 hours daily via real-time dashboards.",
            stack: ["Twilio", "LiveKit", "OpenAI", "FastAPI"],
        },
        {
            tag: "NLP / VOICE",
            title: "Domain-Specific ASR Engine",
            subtitle: "Urdu Speech-to-Text for QA",
            desc: "Fine-tuned Whisper Large on 10-hour Urdu dataset. Automated pipeline with VAD, speaker diarization, and AWS GPU training. Integrated OpenAI API for KPI detection in call transcripts.",
            stack: ["Whisper", "PyTorch", "AWS", "VAD", "OpenAI"],
        },
        {
            tag: "ENTERPRISE",
            title: "Event Management Platform",
            subtitle: "Access Control & Multi-tenant SaaS",
            desc: "Multi-tenant platform with QR and biometric access validation, real-time zone occupancy tracking, and role-based permissions. Deployed with FastAPI, React, Redis, Docker, and Nginx.",
            stack: ["FastAPI", "React", "Redis", "Docker", "Nginx"],
        },
        {
            tag: "RAG / AI",
            title: "Intelligent Support RAG System",
            subtitle: "Customer Support Automation",
            desc: "End-to-end RAG system for car rental company via SMTP/IMAP. FAISS vector DB with 95% accuracy on 1000+ docs. 70% reduction in API costs, 35% boost in customer satisfaction.",
            stack: ["LangChain", "FAISS", "Ollama", "Python", "SMTP"],
        },
    ];

    const experience = [
        {
            role: "Software Developer",
            company: "Sybrid Pvt. Ltd.",
            period: "Aug 2025 – Present",
            location: "Islamabad, Pakistan",
            points: [
                "Built high-performance REST APIs with Django and FastAPI, integrating OpenAI, Twilio, and ElevenLabs",
                "Used Celery + Redis to achieve 85% autonomous call resolution at scale",
                "Optimized MySQL schemas and real-time WebSocket streaming for sub-second voice communication and 60% faster queries",
            ],
        },
        {
            role: "Teaching Assistant — Computer Architecture & NLP",
            company: "Namal University",
            period: "Feb 2025 – Jun 2025",
            location: "Mianwali, Pakistan",
            points: [
                "Guided students in implementing deep learning architectures and transformer-based NLP projects",
            ],
        },
        {
            role: "AI Research Intern",
            company: "KICS, UET Lahore",
            period: "Jun 2024 – Aug 2024",
            location: "Lahore, Pakistan",
            points: [
                "Fine-tuned BERT and GPT models achieving 15% accuracy improvement on NLP tasks",
                "Developed production-ready RAG pipelines using LangChain and FAISS vector similarity search",
            ],
        },
        {
            role: "Backend Developer",
            company: "EZMD Solutions",
            period: "May 2024 – Jun 2024",
            location: "Islamabad, Pakistan",
            points: [
                "Developed AI-ready backend infrastructure for medical data systems ensuring security, compliance, and high throughput",
            ],
        },
    ];

    const skillGroups = [
        {
            icon: <Mic size={28} />,
            title: "Voice & Conversational AI",
            items: ["Silero VAD / WebRTC / VoIP", "Twilio · LiveKit · ElevenLabs", "OpenAI Realtime API", "Asterisk VoIP Server", "Whisper ASR Fine-tuning"],
        },
        {
            icon: <Cpu size={28} />,
            title: "AI & ML",
            items: ["LangChain · RAG Pipelines", "PyTorch · Transformers · Keras", "Hugging Face · Autogen", "FAISS · Pinecone · Elasticsearch", "MLflow & MLOps"],
        },
        {
            icon: <Server size={28} />,
            title: "Backend & Infrastructure",
            items: ["FastAPI · Django · Node.js", "Celery + Redis / RabbitMQ", "WebSocket Streaming", "Docker · Nginx · Microservices", "MySQL · PostgreSQL · Redis"],
        },
        {
            icon: <Code2 size={28} />,
            title: "Languages & Tools",
            items: ["Python · JavaScript · C/C++", "Git / GitHub / GitLab", "Linux Server Administration", "RESTful APIs · HTTP/Proxy", "AWS GPU Training Pipelines"],
        },
    ];

    return (
        <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@400;600;700;800&display=swap');
                * { scroll-behavior: smooth; }
                .font-mono { font-family: 'JetBrains Mono', monospace; }
                .font-display { font-family: 'Syne', sans-serif; }
                .glow { box-shadow: 0 0 20px rgba(102,252,241,0.15); }
                .glow-text { text-shadow: 0 0 20px rgba(102,252,241,0.4); }
                .card-hover { transition: all 0.3s ease; }
                .card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(102,252,241,0.1); }
                .nav-link::after { content:''; display:block; height:1px; background:#66fcf1; transform:scaleX(0); transition:transform 0.3s; transform-origin:left; }
                .nav-link:hover::after { transform:scaleX(1); }
                @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
                .animate-fade-up { animation: fadeUp 0.8s ease forwards; }
                .delay-1 { animation-delay: 0.1s; opacity:0; }
                .delay-2 { animation-delay: 0.25s; opacity:0; }
                .delay-3 { animation-delay: 0.4s; opacity:0; }
                .delay-4 { animation-delay: 0.55s; opacity:0; }
                .cursor-blink::after { content:'_'; animation: blink 1s infinite; color:#66fcf1; }
                .grid-bg { background-image: linear-gradient(rgba(102,252,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102,252,241,0.03) 1px, transparent 1px); background-size: 40px 40px; }
            `}</style>

            {/* Nav */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 40 ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#1f2833]' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Terminal className="text-[#66fcf1]" size={20} />
                        <span className="font-mono font-bold text-lg tracking-tighter text-white">AS<span className="text-[#66fcf1]">.</span>dev</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 font-mono text-xs uppercase tracking-widest">
                        {[["#projects","01. Work"],["#experience","02. XP"],["#skills","03. Stack"]].map(([href,label])=>(
                            <a key={href} href={href} className="nav-link hover:text-[#66fcf1] transition-colors pb-0.5">{label}</a>
                        ))}
                        <a href="mailto:abdullah.shahid1045@gmail.com" className="px-4 py-1.5 border border-[#66fcf1] text-[#66fcf1] hover:bg-[#66fcf1] hover:text-[#0b0c10] transition-all rounded font-bold text-xs">Hire Me</a>
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#66fcf1]">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-[#0b0c10] border-b border-[#1f2833] px-6 py-4 space-y-4 font-mono text-sm">
                        {[["#projects","Projects"],["#experience","Experience"],["#skills","Stack"]].map(([href,label])=>(
                            <a key={href} href={href} className="block hover:text-[#66fcf1]" onClick={()=>setIsMenuOpen(false)}>{label}</a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero */}
            <header className="relative pt-36 pb-24 px-6 max-w-6xl mx-auto grid-bg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-[#66fcf1]/5 via-transparent to-transparent" style={{background: 'radial-gradient(ellipse 60% 50% at 60% 40%, rgba(102,252,241,0.06) 0%, transparent 70%)'}} />
                <div className="relative z-10">
                    <p className="font-mono text-[#66fcf1] text-xs mb-5 tracking-[0.3em] animate-fade-up">BACKEND ENGINEER · AI SYSTEMS · ISLAMABAD, PK</p>
                    <h1 className="font-display text-6xl md:text-8xl font-extrabold text-white mb-4 leading-none tracking-tight animate-fade-up delay-1">
                        Abdullah<br/><span className="text-[#45a29e]">Shahid</span><span className="text-[#66fcf1]">.</span>
                    </h1>
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-[#8b949e] mb-8 animate-fade-up delay-2 cursor-blink">
                        I build real-time Voice AI & scalable backend systems
                    </h2>
                    <p className="max-w-2xl text-[#8b949e] leading-relaxed mb-10 animate-fade-up delay-3">
                        Backend Engineer at <span className="text-white font-semibold">Sybrid Pvt. Ltd.</span> — specializing in production-grade microservices, 
                        <span className="text-[#66fcf1]"> real-time conversational AI</span>, and LLM-integrated backend architectures. 
                        B.Sc. Computer Science, Namal University.
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-up delay-4">
                        <a href="#projects" className="px-8 py-3 bg-[#66fcf1] text-[#0b0c10] font-bold font-mono text-sm rounded hover:bg-[#45a29e] transition-colors">view_work()</a>
                        <a href="https://www.linkedin.com/in/abdullah-shahid-8a1192263/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-[#1f2833] hover:border-[#66fcf1]/50 text-[#8b949e] hover:text-white transition-all rounded font-mono text-sm">
                            <Linkedin size={16}/> LinkedIn
                        </a>
                        <a href="mailto:abdullah.shahid1045@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-[#1f2833] hover:border-[#66fcf1]/50 text-[#8b949e] hover:text-white transition-all rounded font-mono text-sm">
                            <Mail size={16}/> Email
                        </a>
                    </div>
                </div>
            </header>

            {/* Stats Ribbon */}
            <div className="bg-[#0f1419] border-y border-[#1f2833] py-8">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        ["85%", "Autonomous Call Resolution"],
                        ["92%", "Diarization Accuracy"],
                        ["60%", "DB Query Speedup"],
                        ["Best FYP", "Runner-up, Namal Univ."],
                    ].map(([val, label]) => (
                        <div key={label} className="group">
                            <div className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-[#66fcf1] transition-colors glow-text">{val}</div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-[#45a29e] mt-1">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects */}
            <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-[#66fcf1] text-sm">01.</span>
                    <h2 className="font-display text-3xl font-bold text-white">Featured Work</h2>
                    <div className="h-px bg-[#1f2833] flex-1" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <div key={i} className={`card-hover relative bg-[#0f1419] border border-[#1f2833] hover:border-[#66fcf1]/40 rounded-xl p-6 flex flex-col ${p.award ? 'ring-1 ring-[#66fcf1]/20' : ''}`}>
                            {p.award && <Award className="absolute top-4 right-4 text-[#66fcf1]" size={16} />}
                            <div className="font-mono text-[#66fcf1] text-[10px] tracking-widest mb-2 uppercase">{p.tag}</div>
                            <h3 className="font-display text-xl font-bold text-white mb-1">{p.title}</h3>
                            <p className="font-mono text-xs text-[#45a29e] mb-3">{p.subtitle}</p>
                            <p className="text-[#8b949e] text-sm leading-relaxed flex-1 mb-5">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.stack.map(t => (
                                    <span key={t} className="font-mono text-[10px] text-[#45a29e] bg-[#1f2833] px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="py-28 bg-[#080a0d] px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <span className="font-mono text-[#66fcf1] text-sm">02.</span>
                        <h2 className="font-display text-3xl font-bold text-white">Experience</h2>
                        <div className="h-px bg-[#1f2833] flex-1" />
                    </div>
                    <div className="space-y-0">
                        {experience.map((e, i) => (
                            <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l border-[#1f2833] last:border-transparent group">
                                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#1f2833] border-2 border-[#45a29e] group-hover:border-[#66fcf1] transition-colors" />
                                <div className="font-mono text-[10px] uppercase tracking-widest text-[#45a29e] mb-1">{e.period} · {e.location}</div>
                                <h3 className="font-display text-xl font-bold text-white">{e.role}</h3>
                                <p className="font-mono text-sm text-[#66fcf1] mb-4">{e.company}</p>
                                <ul className="space-y-2">
                                    {e.points.map((pt, j) => (
                                        <li key={j} className="flex gap-2 text-[#8b949e] text-sm">
                                            <ChevronRight size={14} className="text-[#66fcf1] mt-0.5 flex-shrink-0" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-28 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-[#1f2833] flex-1" />
                        <h2 className="font-display text-3xl font-bold text-white">Technical Stack</h2>
                        <span className="font-mono text-[#66fcf1] text-sm">03.</span>
                        <div className="h-px bg-[#1f2833] flex-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillGroups.map((g, i) => (
                            <div key={i} className="card-hover bg-[#0f1419] border border-[#1f2833] hover:border-[#66fcf1]/30 rounded-xl p-6">
                                <div className="text-[#66fcf1] mb-4">{g.icon}</div>
                                <h3 className="font-display text-base font-bold text-white mb-4">{g.title}</h3>
                                <ul className="space-y-2">
                                    {g.items.map(item => (
                                        <li key={item} className="font-mono text-xs text-[#8b949e] flex items-center gap-2">
                                            <span className="w-1 h-1 bg-[#45a29e] rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-16 bg-[#080a0d] px-6 border-t border-[#1f2833]">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex gap-4 items-start">
                        <BookOpen className="text-[#66fcf1] mt-1 flex-shrink-0" size={24} />
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-[#45a29e] mb-1">2021 – 2025</p>
                            <h3 className="font-display text-xl font-bold text-white">B.Sc. Computer Science</h3>
                            <p className="font-mono text-sm text-[#66fcf1]">Namal University, Mianwali</p>
                            <p className="font-mono text-xs text-[#8b949e] mt-1">CGPA: 3.4 · Best FYP Runner-up Award · MLOps Certification (Coursera, 2024)</p>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 border-t border-[#1f2833] text-center">
                <p className="font-mono text-xs text-[#45a29e] mb-6">
                    Designed & Built by <span className="text-white font-semibold">Abdullah Shahid</span> · Islamabad, Pakistan
                </p>
                <div className="flex justify-center space-x-6 text-[#45a29e]">
                    <a href="mailto:abdullah.shahid1045@gmail.com" className="hover:text-[#66fcf1] transition-colors"><Mail size={18}/></a>
                    <a href="https://github.com/abdulahshahid" target="_blank" rel="noreferrer" className="hover:text-[#66fcf1] transition-colors"><Github size={18}/></a>
                    <a href="https://www.linkedin.com/in/abdullah-shahid-8a1192263/" target="_blank" rel="noreferrer" className="hover:text-[#66fcf1] transition-colors"><Linkedin size={18}/></a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;