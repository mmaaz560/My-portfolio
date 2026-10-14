
import { useState } from "react";
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
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaCode,
  FaCamera,
  FaShoppingBag,
  FaYoutube,
  FaBriefcase,
} from "react-icons/fa";
import mypic2 from "./assets/mypic2.png";
import hero from "./assets/hero.png";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
} from "react-icons/si";

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
        live: "https://your-arsha-website.vercel.app",

    gradient: "from-pink-500/30 to-purple-600/30",
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

    gradient: "from-blue-500/30 to-cyan-500/30",
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

    gradient: "from-orange-500/30 to-pink-500/30",
    icon: <FaShoppingBag />,
  },
  {
    number: "04",
    title: "YouTube Clone",
    description:
      "A YouTube-inspired video application built to explore video uploads, thumbnails, playlists, and comment functionality.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/mmaaz560/youtube",
        live: "https://your-arsha-website.vercel.app",

    gradient: "from-red-500/30 to-orange-500/30",
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
    gradient: "from-cyan-500/30 to-blue-600/30",
    icon: <FaBriefcase />,
  },
  {
    number: "06",
    title: "More Projects",
    description:
      "Explore my GitHub profile to discover more web development experiments, practice projects, and ongoing work.",
    tags: ["Web Development", "React", "JavaScript"],
    github: "https://github.com/mmaaz560",
    gradient: "from-violet-500/30 to-indigo-600/30",
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

function SectionTitle({ eyebrow, title, accent }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title} <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">{accent}</span>
      </h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080d19]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-blue-500 text-lg font-black">
              MM
            </span>
            <span className="text-lg font-bold tracking-tight">
              Maaz<span className="text-violet-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-5 py-2.5 text-sm font-semibold transition hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-xl md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0c1221] px-5 py-4 md:hidden">
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
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-2 lg:px-8"
        >
          <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" />
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to internship opportunities
            </div>

            <p className="mb-3 text-lg text-slate-400">Hello, I'm</p>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Muhammad
              <br />
              <span className="bg-linear-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Maaz.
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
              Full-Stack Web Developer
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
              I build modern, responsive and user-friendly web applications.
              I enjoy turning ideas into useful digital experiences while
              continuously learning new technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-blue-500 px-6 py-3.5 font-semibold shadow-lg shadow-violet-900/20 transition hover:-translate-y-1"
              >
                View My Projects <FaArrowRight />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold transition hover:border-violet-400 hover:bg-violet-400/5"
              >
                <FaEnvelope /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-2xl text-slate-400">
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

          {/* Developer illustration made with CSS */}
        
<div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8">
  {/* Background glow */}
  <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-3xl sm:h-96 sm:w-96" />

  {/* Gradient background */}
  <div className="absolute h-72 w-72 rotate-12 rounded-[4rem] border border-violet-400/20 bg-linear-to-br from-violet-500/15 to-blue-500/10 sm:h-80 sm:w-80" />

  {/* Profile card */}
  <div className="relative flex h-80 w-72 flex-col items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-linear-to-br from-[#18213b] to-[#0d1323] shadow-2xl shadow-violet-950/40 sm:h-96 sm:w-80">

    {/* Your picture */}
    <img
      src={mypic2}
      alt="Muhammad Maaz"
      className="mb-5 h-40 w-40 rounded-full border-4 border-violet-400/50 object-cover shadow-xl shadow-violet-900/40 sm:h-48 sm:w-48"
    />

    <p className="text-2xl font-bold">Muhammad Maaz</p>
    <p className="mt-2 text-sm text-slate-400">
      Full-Stack Web Developer
    </p>

    {/* Technology icons */}
    <div className="mt-6 flex gap-3">
      <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xl text-cyan-300">
        <FaReact />
      </span>

      <span className="rounded-lg border border-green-400/20 bg-green-400/10 px-3 py-2 text-xl text-green-300">
        <FaNodeJs />
      </span>

      <span className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-xl text-violet-300">
        <SiMongodb />
      </span>
    </div>
  </div>

  {/* Floating badge */}
  <div className="absolute -right-1 top-10 rounded-2xl border border-white/10 bg-[#111a2c] px-4 py-3 shadow-xl sm:-right-5">
    <p className="text-sm font-semibold text-violet-300">Code</p>
    <p className="text-sm font-semibold text-blue-300">
      Create. Improve.
    </p>
  </div>

  {/* Learning badge */}
  <div className="absolute -bottom-1 left-0 rounded-2xl border border-white/10 bg-[#111a2c] px-4 py-3 shadow-xl sm:-left-5">
    <p className="text-xs text-slate-400">Currently learning</p>
    <p className="mt-1 text-sm font-semibold">
      Full-Stack Development
    </p>
  </div>
</div>

        </section>

        {/* About */}
        <section id="about" className="border-y border-white/5 bg-[#0c1221] py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 lg:px-8">
            <div>
              <SectionTitle eyebrow="Get to know me" title="About" accent="Me" />
              <p className="leading-8 text-slate-400">
                I'm Muhammad Maaz, a Computer Science student at Virtual
                University of Pakistan. I'm developing my skills in full-stack
                web development and enjoy building projects that solve
                practical problems.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                My current focus is React on the frontend and Node.js,
                Express.js and MongoDB on the backend. I'm looking for an
                opportunity to learn from a team, improve my skills and
                contribute to real-world projects.
              </p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-lg text-violet-400" />
                  Rawalpindi, Pakistan
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-xl text-violet-400" />
                  BS Computer Science
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-lg text-violet-400" />
                  Available for internship opportunities
                </div>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 gap-4 self-center">
              {[
                { value: "03+", label: "Projects explored" },
                { value: "MERN", label: "Learning stack" },
                { value: "UI", label: "Responsive design" },
                { value: "∞", label: "Curiosity to learn" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/0.03 p-6 transition hover:border-violet-400/40"
                >
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-blue-400">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionTitle eyebrow="What I work with" title="My" accent="Skills" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-white/0.025 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/0.04"
              >
                <div className={`mb-5 text-3xl ${skill.color}`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="mt-2 text-xs text-slate-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-y border-white/5 bg-[#0c1221] py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <SectionTitle eyebrow="Things I've been building" title="My " accent="Creations" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101829] transition duration-300 hover:-translate-y-2 hover:border-violet-400/40"
                >
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${project.gradient}`}
                  >
                    <span className="absolute left-5 top-5 text-sm font-bold text-white/60">
                      PROJECT / {project.number}
                    </span>
                    <div className="text-7xl text-white/80 transition duration-300 group-hover:scale-110">
                      {project.icon}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-[#101829] to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-violet-400/15 bg-violet-400/5 px-3 py-1.5 text-xs text-violet-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                   
<div className="flex flex-wrap gap-3 mt-5">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
  >
    <FaGithub />
    GitHub
  </a>

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
    >
      <FaExternalLinkAlt />
      Live Website
    </a>
  )}
</div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionTitle eyebrow="Have a project in mind?" title="Let's" accent="Connect" />
              <p className="max-w-md leading-8 text-slate-400">
                I'm interested in internship opportunities, collaborative
                projects and connecting with other developers. Feel free to
                reach out!
              </p>

              <a
                href="mailto:maaz.ibrahim@gmail.com"
                className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/0.03 p-5 transition hover:border-violet-400/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300">
                  <FaEnvelope />
                </span>
                <span>
                  <span className="block text-sm text-slate-400">Email me</span>
                  <span className="mt-1 block font-medium">maaz.ibrahim@gmail.com</span>
                </span>
              </a>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Portfolio enquiry from ${data.get("name")}`
                );
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
                );
                window.location.href =
                  `mailto:maaz.ibrahim@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/0.025 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your idea..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-violet-400"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-blue-500 px-5 py-3.5 font-semibold transition hover:brightness-110"
              >
                <FaEnvelope /> Send Message
              </button>
              <p className="text-xs leading-5 text-slate-500">
                This form opens your default email app with the message prepared.
                It does not send messages directly from the website.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0c1221]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Maaz. Built with React.
          </p>
          <div className="flex gap-5 text-xl text-slate-400">
            <a
              href="https://github.com/mmaaz560"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
