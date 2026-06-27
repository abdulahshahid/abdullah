import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Portfolio = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    const projects = [
        {
            year: "2025",
            title: "Meretium",
            subtitle: "AI-Powered Recruitment Platform",
            desc: "4-service microservices architecture (Auth, Admin, Candidate, Recruiter) with JWT-based SSO, TOTP 2FA, and inter-service communication via httpx.AsyncClient. Hybrid candidate matching using cosine similarity on OpenAI embeddings cached in pgvector, with SHA-256 fingerprint cache invalidation. Automated AWS ECS Fargate deploys via GitHub Actions, gated on Alembic migrations, with per-org OpenAI cost tracking.",
            stack: ["FastAPI", "PostgreSQL", "pgvector", "OpenAI", "AWS ECS", "Docker"],
        },
        {
            year: "2025",
            title: "Talk.ai",
            subtitle: "AI-Powered Meeting Intelligence",
            note: "Best FYP, Runner-up",
            desc: "End-to-end platform processing 10+ hours of meeting audio daily with 92% diarization accuracy. Microservices architecture with Django, Celery, and Redis. Reduced manual documentation time by 80%.",
            stack: ["React", "Django", "Celery", "Redis", "OpenAI"],
        },
        {
            year: "2025",
            title: "Skyzone AI Voice Agent",
            subtitle: "Real-time Inbound Call Handler",
            desc: "Conversational AI voice agent using Django, MySQL, OpenAI and WebRTC/Silero VAD. Automated booking and query handling for 300+ U.S. client locations with 85% autonomous resolution.",
            stack: ["FastAPI", "WebRTC", "MySQL", "ElevenLabs", "Twilio"],
        },
        {
            year: "2024",
            title: "Voice-Health AI",
            subtitle: "Intelligent Healthcare Communication",
            desc: "Automated patient outreach using Twilio, LiveKit, and OpenAI. 89.3% success rate, 76.4% reduction in no-shows, saving staff 3.5 hours daily via real-time dashboards.",
            stack: ["Twilio", "LiveKit", "OpenAI", "FastAPI"],
        },
        {
            year: "2024",
            title: "Domain-Specific ASR Engine",
            subtitle: "Urdu Speech-to-Text for QA",
            desc: "Fine-tuned Whisper Large on a 10-hour Urdu dataset. Automated pipeline with VAD, speaker diarization, and AWS GPU training. Integrated the OpenAI API for KPI detection in call transcripts.",
            stack: ["Whisper", "PyTorch", "AWS", "VAD", "OpenAI"],
        },
        {
            year: "2024",
            title: "Intelligent Support RAG System",
            subtitle: "Customer Support Automation",
            desc: "End-to-end RAG system for a car rental company over SMTP/IMAP. FAISS vector DB with 95% accuracy on 1000+ docs. 70% reduction in API costs, 35% boost in customer satisfaction.",
            stack: ["LangChain", "FAISS", "Ollama", "Python", "SMTP"],
        },
    ];

    const experience = [
        {
            role: "Backend Engineer",
            company: "Meretium",
            period: "Feb 2025 – Present",
            location: "UK (Remote)",
            points: [
                "Architected a distributed microservices backend of 4 independent services (Auth, Admin, Candidate, Recruiter) using FastAPI, PostgreSQL, and async SQLAlchemy, enabling independent scaling and clean service boundaries",
                "Designed a hybrid AI matching engine combining 60% semantic similarity (OpenAI text-embedding-3-small + pgvector) with 40% deterministic attribute matching, cutting candidate search latency to 200–400ms via multi-tier vector caching",
                "Built a schema-validated CV parsing pipeline using the instructor library and GPT-4 with Pydantic output guarantees, prompt-injection shielding, and automated profile refinement suggestions",
                "Engineered a CI/CD pipeline with GitHub Actions targeting AWS ECS Fargate: builds multi-service Docker images, runs Alembic migrations as one-off ECS tasks, then triggers zero-downtime rolling deployments",
            ],
        },
        {
            role: "Software Developer",
            company: "Sybrid Pvt. Ltd.",
            period: "Aug 2024 – Feb 2025",
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
                "Fine-tuned BERT and GPT models achieving a 15% accuracy improvement on NLP tasks",
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
            title: "Voice & Conversational AI",
            items: ["Silero VAD", "WebRTC / VoIP", "Twilio", "LiveKit", "ElevenLabs", "OpenAI Realtime API", "Asterisk", "Whisper ASR"],
        },
        {
            title: "AI & Machine Learning",
            items: ["LangChain", "RAG pipelines", "PyTorch", "Transformers", "Keras", "Hugging Face", "Autogen", "FAISS", "Pinecone", "MLflow"],
        },
        {
            title: "Backend & Infrastructure",
            items: ["FastAPI", "Django", "Node.js", "Celery + Redis", "RabbitMQ", "WebSockets", "Docker", "Nginx", "PostgreSQL", "MySQL"],
        },
        {
            title: "Languages & Tools",
            items: ["Python", "JavaScript", "C / C++", "Git", "Linux administration", "REST APIs", "AWS GPU training"],
        },
    ];

    const nav = [
        ["#work", "Work"],
        ["#experience", "Experience"],
        ["#skills", "Skills"],
        ["mailto:abdullah.shahid1045@gmail.com", "Email"],
    ];

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--text)] selection:text-[var(--bg)]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
                html { scroll-behavior: smooth; }
                body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
                :root {
                    --bg: #f7f6f3; --text: #1a1a1a; --muted: #6b6b6b; --body: #4a4a4a;
                    --faint: #9a978f; --fainter: #bdbab2; --line: #e6e4df; --header-bg: rgba(247,246,243,.8);
                }
                :root.dark {
                    --bg: #131312; --text: #ededeb; --muted: #9a978f; --body: #b6b3ab;
                    --faint: #75726a; --fainter: #565349; --line: #292825; --header-bg: rgba(19,19,18,.8);
                }
                html, body { background: var(--bg); }
                body, body * { transition: background-color .35s ease, border-color .35s ease, color .35s ease; }
                .u-link { background-image: linear-gradient(currentColor, currentColor); background-size: 0% 1px; background-position: 0 100%; background-repeat: no-repeat; transition: background-size .3s ease, color .35s ease; }
                .u-link:hover { background-size: 100% 1px; }
            `}</style>

            {/* Header */}
            <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[var(--header-bg)] backdrop-blur-sm border-b border-[var(--line)]' : 'border-b border-transparent'}`}>
                <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
                    <a href="#top" className="text-sm font-medium tracking-tight">Abdullah Shahid</a>
                    <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
                        {nav.map(([href, label]) => (
                            <a key={href} href={href} className="u-link hover:text-[var(--text)] transition-colors hidden sm:inline">{label}</a>
                        ))}
                        <button
                            onClick={() => setDark(d => !d)}
                            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                            className="flex items-center justify-center w-8 h-8 -mr-1.5 rounded-full text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                        >
                            {dark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </nav>
                </div>
            </header>

            <main id="top" className="mx-auto max-w-3xl px-6">

                {/* Intro */}
                <section className="pt-24 pb-20">
                    <h1 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight max-w-2xl">
                        I'm Abdullah — a backend engineer building voice AI and the systems behind it.
                    </h1>
                    <p className="mt-6 text-[var(--body)] leading-relaxed max-w-xl">
                        Currently a Backend Engineer at Meretium (UK, remote), where I work on distributed
                        microservices and LLM-integrated backends. Before that, real-time conversational AI at
                        Sybrid. B.Sc. in Computer Science from Namal University. Based in Islamabad, Pakistan.
                    </p>
                    <div className="mt-8 flex items-center gap-6 text-sm">
                        <a href="mailto:abdullah.shahid1045@gmail.com" className="u-link">Get in touch</a>
                        <a href="https://github.com/abdulahshahid" target="_blank" rel="noreferrer" className="u-link text-[var(--muted)] hover:text-[var(--text)] transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/abdullah-shahid-8a1192263/" target="_blank" rel="noreferrer" className="u-link text-[var(--muted)] hover:text-[var(--text)] transition-colors">LinkedIn</a>
                    </div>
                </section>

                {/* Work */}
                <section id="work" className="py-16 border-t border-[var(--line)]">
                    <h2 className="text-sm font-medium text-[var(--muted)] mb-10">Selected work</h2>
                    <div className="divide-y divide-[var(--line)]">
                        {projects.map((p, i) => (
                            <article key={i} className="group grid grid-cols-[3rem_1fr] gap-x-4 py-7 first:pt-0">
                                <span className="text-sm text-[var(--faint)] tabular-nums pt-0.5">{p.year}</span>
                                <div>
                                    <div className="flex items-baseline justify-between gap-4">
                                        <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                                        {p.note && <span className="text-xs text-[var(--faint)] whitespace-nowrap">{p.note}</span>}
                                    </div>
                                    <p className="text-[var(--muted)] text-sm mt-0.5">{p.subtitle}</p>
                                    <p className="text-[var(--body)] text-sm leading-relaxed mt-3 max-w-xl">{p.desc}</p>
                                    <p className="text-[var(--faint)] text-xs mt-3">{p.stack.join("  ·  ")}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="py-16 border-t border-[var(--line)]">
                    <h2 className="text-sm font-medium text-[var(--muted)] mb-10">Experience</h2>
                    <div className="space-y-12">
                        {experience.map((e, i) => (
                            <div key={i} className="grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
                                <div className="text-sm text-[var(--faint)] sm:pt-0.5">
                                    <div>{e.period}</div>
                                    <div className="text-[var(--fainter)]">{e.location}</div>
                                </div>
                                <div>
                                    <h3 className="font-medium tracking-tight">{e.role}</h3>
                                    <p className="text-sm text-[var(--muted)] mb-3">{e.company}</p>
                                    <ul className="space-y-2">
                                        {e.points.map((pt, j) => (
                                            <li key={j} className="text-[var(--body)] text-sm leading-relaxed max-w-xl">{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="py-16 border-t border-[var(--line)]">
                    <h2 className="text-sm font-medium text-[var(--muted)] mb-10">Skills</h2>
                    <div className="space-y-8">
                        {skillGroups.map((g, i) => (
                            <div key={i} className="grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
                                <h3 className="text-sm font-medium tracking-tight sm:pt-0.5">{g.title}</h3>
                                <p className="text-[var(--body)] text-sm leading-relaxed max-w-xl">{g.items.join("  ·  ")}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="py-16 border-t border-[var(--line)]">
                    <h2 className="text-sm font-medium text-[var(--muted)] mb-10">Education</h2>
                    <div className="grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-1">
                        <div className="text-sm text-[var(--faint)] sm:pt-0.5">2021 – 2025</div>
                        <div>
                            <h3 className="font-medium tracking-tight">B.Sc. Computer Science</h3>
                            <p className="text-sm text-[var(--muted)]">Namal University, Mianwali</p>
                            <p className="text-[var(--body)] text-sm mt-2 max-w-xl">
                                CGPA 3.4 · Best FYP Runner-up · MLOps Certification (Coursera, 2024)
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-[var(--line)]">
                <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[var(--faint)]">
                    <p>Islamabad, Pakistan</p>
                    <div className="flex items-center gap-6">
                        <a href="mailto:abdullah.shahid1045@gmail.com" className="u-link hover:text-[var(--text)] transition-colors">Email</a>
                        <a href="https://github.com/abdulahshahid" target="_blank" rel="noreferrer" className="u-link hover:text-[var(--text)] transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/abdullah-shahid-8a1192263/" target="_blank" rel="noreferrer" className="u-link hover:text-[var(--text)] transition-colors">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
