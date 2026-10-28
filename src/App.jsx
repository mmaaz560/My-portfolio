import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaArrowRight,
  FaArrowUp,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaCode,
  FaCamera,
  FaShoppingBag,
  FaYoutube,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import mypic2 from "./assets/mypic2.png";
import Reveal from "./components/Reveal";

/* ---------------- DATA ---------------- */
const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400", category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", category: "Frontend" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300", category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", category: "Database" },
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-400", category: "Tools" },
];

const projects = [
  {
    number: "01",
    title: "Instagram Clone",
    description:
      "An Instagram-inspired social media application featuring user authentication, posts, image uploads, stories, and an interactive interface.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mmaaz560/instagram",
    gradient: "from-pink-500/40 to-purple-600/40",
    icon: <FaInstagram />,
  },
  {
    number: "02",
    title: "Photofolio",
    description:
      "A responsive photography portfolio website with a modern gallery layout, reusable components, and an elegant user interface.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/mmaaz560/Photofolio",
    live: "https://photofolio-dbu2.vercel.app/",
    gradient: "from-blue-500/40 to-cyan-500/40",
    icon: <FaCamera />,
  },
  {
    number: "03",
    title: "E-commerce Website",
    description:
      "A modern e-commerce frontend featuring product listings, product detail pages, cart UI, and responsive layouts.",
    tags: ["React", "Tailwind CSS", "React Router"],
    github: "https://github.com/mmaaz560/ecommerce",
    live: "https://ecommerce-five-ruby-89.vercel.app",
    gradient: "from-orange-500/40 to-pink-500/40",
    icon: <FaShoppingBag />,
  },
  {
    number: "04",
    title: "YouTube Clone",
    description:
      "A YouTube-inspired video application built to explore video uploads, thumbnails, playlists, and comment functionality.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/mmaaz560/youtube",
    gradient: "from-red-500/40 to-orange-500/40",
    icon: <FaYoutube />,
  },
  {
    number: "05",
    title: "Arsha Website",
    description:
      "A responsive business website inspired by the Arsha template, with clean sections and a professional layout.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/mmaaz560/arsha",
    live: "https://arsha-coral-nine.vercel.app/",
    gradient: "from-cyan-500/40 to-blue-600/40",
    icon: <FaBriefcase />,
  },
  {
    number: "06",
    title: "More Projects",
    description:
      "Explore my GitHub profile to discover more web development experiments, practice projects, and ongoing work.",
    tags: ["Web Development", "React", "JavaScript"],
    github: "https://github.com/mmaaz560",
    gradient: "from-violet-500/40 to-indigo-600/40",
    icon: <FaCode />,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- TYPING HOOK ---------------- */
function useTyping(words, speed = 90, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

/* ---------------- SECTION TITLE ---------------- */
function SectionTitle({ eyebrow, title, accent }) {
  return (
    <Reveal>
      <div className="mb-12 text-center md:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="text-gradient">{accent}</span>
        </h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-violet-500 to-blue-500 md:mx-0 mx-auto" />
      </div>
    </Reveal>
  );
}

/* ---------------- APP ---------------- */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const typed = useTyping([
    "Full-Stack Web Developer",
    "React Enthusiast",
    "MERN Stack Learner",

  ]);

  /* Scroll effects */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 500);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px] animate-blob" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px] animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px] animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#080d19]/80 backdrop-blur-xl shadow-lg shadow-violet-950/20"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-blue-500 text-lg font-black shadow-lg shadow-violet-900/40 transition group-hover:scale-110 group-hover:rotate-6">
              MM
            </span>
            <span className="text-lg font-bold tracking-tight">
              Maaz<span className="text-violet-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    isActive ? "text-white" : "text-slate-300 hover:text-violet-400"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-violet-500/15 ring-1 ring-violet-400/30" />
                  )}
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-violet-900/30 transition hover:scale-105 hover:shadow-violet-700/40"
            >
              Let's Talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-xl transition hover:border-violet-400/40 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#0c1221] transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative mx-auto grid min-h-100svh max-w-6xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-2 lg:px-8"
        >
          <div className="relative z-10">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to internship opportunities
            </div>

            <p className="animate-fade-up delay-100 mb-3 text-lg text-slate-400">
              Hello, I'm
            </p>

            <h1 className="animate-fade-up delay-200 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad
              <br />
              <span className="text-gradient">Maaz.</span>
            </h1>

            <h2 className="animate-fade-up delay-300 mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
              <span className="cursor-blink">{typed}</span>
            </h2>

            <p className="animate-fade-up delay-500 mt-5 max-w-lg text-base leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications. I
              enjoy turning ideas into useful digital experiences while
              continuously learning new technologies.
            </p>

            <div className="animate-fade-up delay-700 mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-violet-900/30 transition hover:-translate-y-1 hover:shadow-violet-700/50"
              >
                View My Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-violet-400 hover:bg-violet-400/5"
              >
                <FaEnvelope /> Contact Me
              </a>
            </div>

            <div className="animate-fade-up delay-700 mt-8 flex items-center gap-5 text-2xl text-slate-400">
              <a
                href="https://github.com/mmaaz560"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:-translate-y-1 hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:-translate-y-1 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="animate-fade-in delay-500 relative mx-auto flex w-full max-w-md items-center justify-center py-8">
            <div className="absolute h-72 w-72 rounded-full bg-violet-600/30 blur-3xl sm:h-96 sm:w-96 animate-pulse-glow" />

            <div className="animate-spin-slow absolute h-72 w-72 rounded-[4rem] border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-blue-500/10 sm:h-80 sm:w-80" />

            <div className="animate-float-slow relative flex h-80 w-72 flex-col items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-linear-to-br from-[#18213b] to-[#0d1323] shadow-2xl shadow-violet-950/40 sm:h-96 sm:w-80">
              <img
                src={mypic2}
                alt="Muhammad Maaz"
                className="mb-5 h-40 w-40 rounded-full border-4 border-violet-400/50 object-cover shadow-xl shadow-violet-900/40 transition hover:scale-105 sm:h-48 sm:w-48"
              />

              <p className="text-2xl font-bold">Muhammad Maaz</p>
              <p className="mt-2 text-sm text-slate-400">
                Full-Stack Web Developer
              </p>

              <div className="mt-6 flex gap-3">
                <span className="animate-float rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xl text-cyan-300" style={{ animationDelay: "0s" }}>
                  <FaReact />
                </span>
                <span className="animate-float rounded-lg border border-green-400/20 bg-green-400/10 px-3 py-2 text-xl text-green-300" style={{ animationDelay: "0.5s" }}>
                  <FaNodeJs />
                </span>
                <span className="animate-float rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xl text-violet-300" style={{ animationDelay: "1s" }}>
                  <SiMongodb />
                </span>
              </div>
            </div>

            <div className="animate-float absolute -right-1 top-10 rounded-2xl border border-white/10 bg-[#111a2c]/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-5" style={{ animationDelay: "0.3s" }}>
              <p className="text-sm font-semibold text-violet-300">Code</p>
              <p className="text-sm font-semibold text-blue-300">
                Create. Improve.
              </p>
            </div>

            <div className="animate-float absolute -bottom-1 left-0 rounded-2xl border border-white/10 bg-[#111a2c]/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-5" style={{ animationDelay: "0.8s" }}>
              <p className="text-xs text-slate-400">Currently learning</p>
              <p className="mt-1 text-sm font-semibold">
                Full-Stack Development
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative border-y border-white/5 bg-[#0c1221] py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle eyebrow="Get to know me" title="About" accent="Me" />
              <Reveal delay={100}>
                <p className="leading-8 text-slate-400">
                  I'm Muhammad Maaz, a Computer Science student at Virtual
                  University of Pakistan. I'm developing my skills in
                  full-stack web development and enjoy building projects that
                  solve practical problems.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 leading-8 text-slate-400">
                  My current focus is React on the frontend and Node.js,
                  Express.js and MongoDB on the backend. I'm looking for an
                  opportunity to learn from a team, improve my skills and
                  contribute to real-world projects.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3 transition hover:translate-x-1">
                    <FaMapMarkerAlt className="text-lg text-violet-400" />
                    Rawalpindi, Pakistan
                  </div>
                  <div className="flex items-center gap-3 transition hover:translate-x-1">
                    <FaGraduationCap className="text-xl text-violet-400" />
                    BS Computer Science
                  </div>
                  <div className="flex items-center gap-3 transition hover:translate-x-1">
                    <FaEnvelope className="text-lg text-violet-400" />
                    Available for internship opportunities
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4 self-center">
              {[
                { value: "03+", label: "Projects explored" },
                { value: "MERN", label: "Learning stack" },
                { value: "UI", label: "Responsive design" },
                { value: "∞", label: "Curiosity to learn" },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 100}>
                  <div className="shimmer-border group rounded-2xl border border-white/10 bg-white/0.03 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/0.06">
                    <h3 className="text-gradient text-3xl font-black">
                      {item.value}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionTitle eyebrow="What I work with" title="My" accent="Skills" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 60}>
                <div className="shimmer-border group rounded-2xl border border-white/10 bg-white/0.025 p-5 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-violet-400/0.06">
                  <div
                    className={`mb-5 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 ${skill.color}`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="mt-2 text-xs text-slate-500">
                    {skill.category}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-y border-white/5 bg-[#0c1221] py-24"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle
              eyebrow="Things I've been building"
              title="My"
              accent="Creations"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal key={project.number} delay={i * 80}>
                  <article className="shimmer-border group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#101829] transition duration-500 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/40">
                    <div
                      className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient}`}
                    >
                      <span className="absolute left-5 top-5 text-sm font-bold text-white/60">
                        PROJECT / {project.number}
                      </span>
                      <div className="text-7xl text-white/80 transition duration-500 group-hover:scale-125 group-hover:rotate-6">
                        {project.icon}
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-[#101829] to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold transition group-hover:text-violet-300">
                        {project.title}
                      </h3>
                      <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-violet-400/15 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-400/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                        >
                          <FaGithub /> GitHub
                        </a>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/live flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                          >
                            <FaExternalLinkAlt className="transition group-hover/live:rotate-12" />
                            Live Website
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Have a project in mind?"
            title="Let's"
            accent="Connect"
          />

          <Reveal>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/0.03 p-7 sm:p-9">
                <h3 className="text-2xl font-bold">Let's build something useful.</h3>
                <p className="mt-4 leading-8 text-slate-400">
                  I'm open to internship opportunities, collaboration, and
                  learning from real-world projects. Feel free to reach out.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="mailto:your-email@example.com"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3 font-semibold transition hover:-translate-y-1"
                  >
                    <FaEnvelope /> Email Me
                  </a>
                  <a
                    href="/myresume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold transition hover:border-violet-400 hover:bg-violet-400/5"
                  >
                    <FaDownload /> Download CV
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Replace the email placeholder and add your CV as
                  <code className="mx-1">public/resume.pdf</code> if you want
                  these links to work.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://github.com/mmaaz560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-border rounded-2xl border border-white/10 bg-white/0.03 p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
                >
                  <FaGithub className="text-3xl text-violet-300" />
                  <h3 className="mt-4 font-bold">GitHub</h3>
                  <p className="mt-2 wrap-break-words text-sm text-slate-400">
                    Explore my repositories
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-border rounded-2xl border border-white/10 bg-white/0.03 p-6 transition hover:-translate-y-1 hover:border-blue-400/40"
                >
                  <FaLinkedin className="text-3xl text-blue-300" />
                  <h3 className="mt-4 font-bold">LinkedIn</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Connect professionally
                  </p>
                </a>

                <div className="shimmer-border rounded-2xl border border-white/10 bg-white/0.03 p-6 sm:col-span-2">
                  <FaMapMarkerAlt className="text-3xl text-violet-300" />
                  <h3 className="mt-4 font-bold">Location</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0c1221]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-7 text-center text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Muhammad Maaz. All rights reserved.
          </p>
          <a
            href="#home"
            className="transition hover:text-violet-300"
            onClick={() => setActiveSection("home")}
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-blue-500 text-lg text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-1"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
