import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GithubIcon, LinkedInIcon, TwitterIcon, FbIcon } from "@/components/Icons";
import profileImage from "../../public/images/profile/hamza-profile.png";
import orta from "../../public/images/projects/orta.png";
import malmo from "../../public/images/projects/zero.png";
import answerCampus from "../../public/images/projects/AnswerCampus.png";
import kbm from "../../public/images/projects/kbm.png";
import viceforex from "../../public/images/projects/viceforex.png";
import sportsstream from "../../public/images/projects/sportsstream.png";

const FramerImage = motion(Image);

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) mv.set(value); }, [isInView, value, mv]);
  useEffect(() => { spring.on("change", (v) => { if (ref.current && v.toFixed(0) <= value) ref.current.textContent = v.toFixed(0); }); }, [spring, value]);
  return <span ref={ref}>0</span>;
};

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Hulee Ltd.",
    companyLink: "https://www.orta.co.uk/",
    date: "Aug 2025 – Present",
    location: "Manchester, UK",
    current: true,
    bullets: [
      "Core developer on Orta (orta.co.uk) — a workforce management SaaS platform handling onboarding, compliance tracking, rota planning, and shift management for care services and hospitality industries.",
      "Architected and implemented a global error handler with centralised logging and Sentry integration across the entire backend, drastically reducing mean time to detection and improving incident response.",
      "Built secure workflows including CSV bulk staff upload, CSRF protection, and precision timestamp tracking for automated timesheet calculations and GPS clock-in features.",
      "Designed RESTful APIs for compliance dashboards with automatic expiry alerts (90/60/30 days), DBS tracking, and document management — supporting CQC regulatory requirements.",
      "Built comprehensive CI/CD pipelines with Jest and GitHub Actions, reducing regression incidents by 40% and enabling continuous deployment.",
      "Collaborated cross-functionally with product and design teams to deliver user-centric features aligned with business KPIs across multiple product modules.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Tekvill Solutions",
    companyLink: "https://tekvill.com/",
    date: "Nov 2024 – Jun 2025",
    location: "Hybrid",
    bullets: [
      "Built and optimised scalable microservices using Node.js, Express, MongoDB, and Kubernetes, improving deployment efficiency and system uptime to 99.9%.",
      "Developed responsive SPAs using React.js with server-side rendering, cutting page load times by up to 35% and boosting engagement.",
      "Designed and implemented event-driven architecture using WebSockets for real-time notifications, live dashboards, and collaborative features across SaaS platforms.",
      "Leveraged TDD with Jest and Cypress, increasing code reliability and reducing production bugs by 15%.",
      "Led API gateway design and third-party integrations (payment processing, geolocation services), ensuring seamless interoperability across platforms.",
      "Drove Agile development through effective sprint planning and stakeholder collaboration, accelerating delivery and improving team output by 35%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Innovage.io",
    companyLink: "https://innovage.io/",
    date: "Apr 2023 – Nov 2024",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed dynamic UIs with React.js and Next.js using Context API and reusable component patterns, increasing user engagement by 40%.",
      "Built a microservices backend using Node.js, TypeScript, Docker, and MySQL, enhancing query performance by 35%.",
      "Integrated AWS services (S3 for storage, Lambda for serverless computing, EC2 for scalable infrastructure) to power a high-availability procurement platform.",
      "Created CI/CD pipelines with GitHub Actions and comprehensive testing (Jest, Selenium, Mocha), reducing bugs by 50% and deployment times by 70%.",
      "Led Agile sprint teams, aligning front-end and back-end efforts across cross-functional teams, achieving 15% faster delivery timelines.",
    ],
  },
];

const skillCategories = [
  { label: "Frontend", skills: ["React.js", "Next.js", "React Native", "Redux", "TypeScript", "Tailwind CSS", "Material UI"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "Nest.js", "REST APIs", "WebSockets", "Stripe", "PayPal"] },
  { label: "Database", skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Sequelize"] },
  { label: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"] },
  { label: "Testing", skills: ["Jest", "Cypress", "Selenium", "Mocha", "ESLint"] },
];

const projects = [
  { title: "Orta", type: "Workforce Management SaaS", summary: "Full-stack workforce management platform handling onboarding, compliance tracking, rota planning, and shift management. Built with MERN stack, featuring GPS clock-in, DBS tracking, and CQC-compliant reporting.", img: orta, link: "https://orta.co.uk/", github: "" },
  { title: "Vice Forex", type: "Real-Time Trading Platform", summary: "Full-stack trading system with WebSocket-based real-time market data, ProRealTime API integration, and modular TypeScript architecture for low-latency operations.", img: viceforex, link: "#", github: "" },
  { title: "Sports Streaming", type: "Live Video Infrastructure", summary: "Live sports streaming platform using AWS MediaLive, S3, and CloudFront. Next.js + TypeScript frontend with admin dashboards, role-based access, and QR-based court access.", img: sportsstream, link: "#", github: "" },
  { title: "Zero Swipe", type: "Job Search Platform", summary: "Cross-platform React Native app with Tinder-style swipe job matching, real-time chat, and secure payment integration for the UK job market.", img: malmo, link: "https://zero-psi.vercel.app/", github: "https://github.com/hamza301211/MalmoCityPizzeria" },
  { title: "Answer Campus", type: "Academic Platform", summary: "Led front-end development using Next.js and Material-UI, improving user engagement by 20% with optimised content access and GitHub Actions CI/CD.", img: answerCampus, link: "https://github.com/hamza301211?tab=repositories", github: "https://github.com/hamza301211?tab=repositories" },
  { title: "KBM Technologies", type: "Invoice Tracking", summary: "Robust invoice and remittance tracking system with admin panel, built with MERN stack and AWS (S3, Lambda, EC2).", img: kbm, link: "https://kbmbusiness.co.uk/", github: "https://github.com/Rapolus87/kbm-payments" },
];

const certifications = [
  "IBM Full-Stack JavaScript Developer — IBM",
  "Application Development using Microservices and Serverless — IBM",
  "Get Started with Cloud Native, DevOps, Agile, and NoSQL — IBM",
  "Introduction to Containers with Docker, Kubernetes & OpenShift — IBM",
  "AWS Cloud Technical Essentials — AWS",
];

const ContactForm = () => {
  const [user, setUser] = useState({ username: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => setUser((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) });
      if (res.status === 200) { setUser({ username: "", email: "", message: "" }); setStatus("success"); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      <div><label className="block text-light/60 text-sm mb-2 font-medium">Name</label><input type="text" name="username" value={user.username} onChange={handleChange} required placeholder="Your name" className="contact-input" /></div>
      <div><label className="block text-light/60 text-sm mb-2 font-medium">Email</label><input type="email" name="email" value={user.email} onChange={handleChange} required placeholder="your@email.com" className="contact-input" /></div>
      <div><label className="block text-light/60 text-sm mb-2 font-medium">Message</label><textarea name="message" rows={5} value={user.message} onChange={handleChange} required placeholder="Tell me about your project..." className="contact-input resize-none" /></div>
      {status === "success" && <p className="text-primaryDark text-sm">Thank you! Message sent successfully.</p>}
      {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
      <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
    </form>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamza Nadeem Khan | Full Stack Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer with 3+ years building scalable web apps with React.js, Node.js, TypeScript and cloud technologies. Based in Manchester, UK." />
      </Head>

      {/* ===== HERO ===== */}
      <section id="hero" className="hero-bg min-h-screen flex items-center relative">
        <div className="orb orb-1" /><div className="orb orb-2" />
        <div className="section-container relative z-10 flex items-center justify-between w-full lg:flex-col lg:text-center gap-12" style={{ paddingTop: "120px" }}>
          <motion.div className="flex-1" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="status-badge mb-6 inline-flex"><span className="pulse-dot" />Available for opportunities</div>
            <h1 className="text-6xl font-bold text-light mb-2 xl:text-5xl md:text-4xl sm:text-3xl">Hi, I&apos;m <span className="gradient-text">Hamza</span></h1>
            <h2 className="text-2xl font-semibold text-light/70 mb-6 md:text-xl">Full Stack Developer</h2>
            <p className="text-light/60 text-lg leading-relaxed mb-8 max-w-xl md:text-base lg:mx-auto">
              3+ years building high-performance, scalable web applications using React.js, Node.js, TypeScript, and cloud technologies. Passionate about clean architecture, microservices, and delivering impactful user experiences.
            </p>
            <div className="flex items-center gap-4 lg:justify-center flex-wrap">
              <a href="/Hamza Nadeem Khan — Full Stack Developer CV.pdf" target="_blank" className="btn-primary">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
                Resume
              </a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
            <div className="flex items-center gap-3 mt-8 lg:justify-center">
              <motion.a href="https://www.linkedin.com/in/hamza-nadeem-khan-420389242/" target="_blank" className="social-icon" whileHover={{ y: -3 }}><LinkedInIcon /></motion.a>
              <motion.a href="https://github.com/hamza301211" target="_blank" className="social-icon" whileHover={{ y: -3 }}><GithubIcon /></motion.a>
              <motion.a href="https://twitter.com/hbutt7883" target="_blank" className="social-icon" whileHover={{ y: -3 }}><TwitterIcon /></motion.a>
            </div>
          </motion.div>
          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative w-72 h-72 xl:w-60 xl:h-60 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primaryDark/30 shadow-2xl">
              <Image src={profileImage} alt="Hamza Nadeem Khan" fill className="object-cover" priority sizes="300px" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section id="about" className="relative">
        <div className="section-container">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-2">
            {[{ v: 3, l: "Years Experience" }, { v: 20, l: "Clients Satisfied" }, { v: 30, l: "Projects Completed" }, { v: 5, l: "Certifications" }].map((s) => (
              <motion.div key={s.l} variants={fadeUp} className="stat-card glass-card">
                <div className="stat-number"><AnimatedNumber value={s.v} />+</div>
                <div className="stat-label">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="relative">
        <div className="orb orb-3" />
        <div className="section-container">
          <h2 className="section-heading">Professional <span className="gradient-text">Experience</span></h2>
          <p className="section-subtitle">My career journey</p>
          <div className="gradient-divider" />
          <div className="max-w-3xl mx-auto">
            <div className="timeline">
              {experiences.map((exp, i) => (
                <motion.div key={i} className="timeline-item" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <div className={`timeline-dot ${exp.current ? "active" : ""}`} />
                  <div className="timeline-content glass-card">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-light">{exp.title}</h3>
                        <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-primaryDark font-semibold text-sm hover:underline">{exp.company}</a>
                      </div>
                      <div className="text-right">
                        <span className="text-light/50 text-sm">{exp.date}</span>
                        {exp.current && <span className="block status-badge text-xs mt-1 !py-1 !px-2"><span className="pulse-dot" style={{ width: 6, height: 6 }} />Current</span>}
                      </div>
                    </div>
                    <p className="text-light/40 text-xs mb-3">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-light/70 text-sm flex gap-2"><span className="text-primaryDark mt-1 flex-shrink-0">▸</span><span>{b}</span></li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="relative">
        <div className="section-container">
          <h2 className="section-heading">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="gradient-divider" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-4xl mx-auto space-y-8">
            {skillCategories.map((cat) => (
              <motion.div key={cat.label} variants={fadeUp}>
                <h3 className="text-primaryDark font-semibold text-sm uppercase tracking-widest mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="relative">
        <div className="orb orb-1" style={{ top: "20%", left: "auto", right: "-5%" }} />
        <div className="section-container">
          <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">Some things I&apos;ve built</p>
          <div className="gradient-divider" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-2 gap-8 md:grid-cols-1">
            {projects.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="project-card">
                <div className="project-image-wrap relative">
                  <Image src={p.img} alt={p.title} className="w-full h-full object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  <div className="project-overlay" />
                </div>
                <div className="p-6">
                  <span className="text-primaryDark text-xs font-semibold uppercase tracking-wider">{p.type}</span>
                  <h3 className="text-xl font-bold text-light mt-1 mb-2">{p.title}</h3>
                  <p className="text-light/60 text-sm mb-4 leading-relaxed">{p.summary}</p>
                  <div className="flex items-center gap-3">
                    {p.link && p.link !== "#" && <Link href={p.link} target="_blank" className="text-primaryDark text-sm font-semibold hover:underline">Live Demo →</Link>}
                    {p.github && <Link href={p.github} target="_blank" className="text-light/50 hover:text-light transition-colors"><GithubIcon className="w-5 h-5" /></Link>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section id="certifications" className="relative">
        <div className="section-container">
          <h2 className="section-heading"><span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Professional credentials</p>
          <div className="gradient-divider" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-3">
            {certifications.map((c, i) => (
              <motion.div key={i} variants={fadeUp} className="cert-badge">
                <div className="cert-icon">🏆</div>
                <span className="text-light/80 text-sm">{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="relative">
        <div className="section-container" style={{ paddingTop: "40px" }}>
          <h2 className="section-heading"><span className="gradient-text">Education</span></h2>
          <div className="gradient-divider" style={{ marginTop: "1rem" }} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto glass-card p-8 text-center">
            <h3 className="text-xl font-bold text-light mb-1">BSc Computer Science</h3>
            <p className="text-primaryDark font-semibold">COMSATS University Islamabad</p>
            <p className="text-light/50 text-sm mt-1">2019 – 2023</p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="relative">
        <div className="orb orb-2" style={{ bottom: "auto", top: "10%" }} />
        <div className="section-container">
          <h2 className="section-heading">Get in <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let&apos;s work together</p>
          <div className="gradient-divider" />
          <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto md:grid-cols-1">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-light mb-4">Let&apos;s build something amazing</h3>
              <p className="text-light/60 mb-8 leading-relaxed">I&apos;m always interested in hearing about new projects and opportunities. Whether you need a full-stack developer or want to collaborate, feel free to reach out.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-light/60"><span className="text-primaryDark text-lg">✉</span><a href="mailto:hamza.dev2024@gmail.com" className="hover:text-primaryDark transition-colors">hamza.dev2024@gmail.com</a></div>
                <div className="flex items-center gap-3 text-light/60"><span className="text-primaryDark text-lg">📍</span><span>Bury, Manchester, UK</span></div>
                <div className="flex items-center gap-3 text-light/60"><span className="text-primaryDark text-lg">📱</span><span>+44 7884 529734</span></div>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <motion.a href="https://www.linkedin.com/in/hamza-nadeem-khan-420389242/" target="_blank" className="social-icon" whileHover={{ y: -3 }}><LinkedInIcon /></motion.a>
                <motion.a href="https://github.com/hamza301211" target="_blank" className="social-icon" whileHover={{ y: -3 }}><GithubIcon /></motion.a>
                <motion.a href="https://twitter.com/hbutt7883" target="_blank" className="social-icon" whileHover={{ y: -3 }}><TwitterIcon /></motion.a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
