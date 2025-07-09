"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  ExternalLink,
  Code,
  Zap,
  Cpu,
  Rocket,
  Database,
  Cloud,
  Server,
  EllipsisIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function FuturisticPortfolio() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Full-Stack Developer | AI-Augmented Engineer | Product-Minded Builder",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setTypedText("");
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, titleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Stunning Portfolio Website",
      desc: "A futuristic developer portfolio website with dark mode, neon gradients, glassmorphism, typing effects, and smooth animations",
      tech: ["Next.js", "Tailwind CSS","Typescript","Vercel","Git"],
      link: "https://lotchan-kumar-portfolio.vercel.app/",
      image: "/portfolio.png",
    },
    {
      title: "A modern web platform",
      desc: "A modern web platform for a mobile repair business that brings doorstep service to customers. Transforms traditional walk-in repairs into convenient on-demand service.",
      tech: ["Next.js","React","Next API", "Typescript", "Tailwind CSS","Git","Vercel"],
      link: "https://lotchan-mobile-service.vercel.app/",
      image: "/mobileservice.png",
    },
    {
      title: "Traditional Clinic Landing Page",
      desc: "Transformed a traditional Tamil medical clinic advertisement into a sleek, professional web presence using modern full-stack technologies.",
      tech: ["Next.js","React","Git", "Typescript", "Tailwind CSS", "Vercel"],
      link: "https://prnv-treatment.vercel.app/",
      image: "/prnv.png",
    },
    {
      title: "To-Do-CRUD App",
      desc: "To-Do App with CRUD functionality using React.js and TypeScript, demonstrating state management, props, events, and hooks.",
      tech: ["React.js", "Typescript"],
      link: "https://todo-crud-app-three.vercel.app/",
      image: "/todo.png",
    },
    {
      title: "Mobile Shop Daily Calculator",
      desc: "Intelligent code completion and review tool",
      tech: ["React","TypeScript", "Next", "Tailwind CSS"],
      link:"https://daily-profit-tracker.vercel.app/",
      image: "/tracker.png",
    },
    {
      title: "Blockchain Voting",
      desc: "Secure decentralized voting platform",
      tech: ["Solidity", "Web3.js", "IPFS"],
      image: "/projects/blockchain-vote.jpg",
    },
  ];

  const displayedProjects = projects.slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/5 via-transparent to-cyan-500/5 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-purple-500/20">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {"<Dev/>"}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-gray-300 hover:text-white transition-colors duration-300 hover:glow-text"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    {isOpen && (
      <div className="md:hidden mt-4 flex flex-col space-y-4">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => {
              scrollToSection(item.toLowerCase());
              setIsOpen(false);
            }}
            className="text-gray-300 hover:text-white transition-colors duration-300 hover:glow-text text-left"
          >
            {item}
          </button>
        ))}
      </div>
    )}
  </div>
</nav>


      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              LOTCHAN KUMAR
            </h1>
            <div className="h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-light text-gray-300">
                {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting tomorrow's digital experiences with cutting-edge technology and innovative solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About.exe
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-white-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                <img src="/lotchan.jpeg" className="w-80 h-80 mx-auto rounded-full" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse" />
            </div>
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  T-shaped full-stack developer skilled in building fast, scalable, user-first web applications using 
modern stacks like Next.js, Node.js, MongoDB, and Tailwind CSS. Passionate about solving real
world problems and delivering production-ready MVPs rapidly with the help of AI-powered tools like 
ChatGPT, GitHub Copilot, and AI APIs. Strong product mindset, agile development habits, and 
experience working with cloud platforms (Vercel, Firebase, Railway). 
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="p-4 rounded-xl bg-cyan-900/20 backdrop-blur-sm border border-cyan-500/20 text-center">
                  <div className="text-2xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Skills.json
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chakra UI"] },
              { icon: Cpu, title: "Backend", skills: ["Node.js","Express.js", "Nest.js", "GraphQL", "REST APIs","Python"] },
              { icon: Database, title: "Database", skills: ["MongoDB", "PostgreSQL", "Firebase" ] },
              { icon: Server, title: "DevOps & Cloud", skills: ["GitHub", "Docker", "Vercel", "Railway", "Netlify" ] },
              { icon: Zap, title: "Tools", skills: ["ChatGPT", "GitHub", "Copilot", "Postman", "VS Code" ] },
              { icon: EllipsisIcon, title: "Other", skills: ["JWT Auth", "Stripe", "WebSockets", "Redis", "Git " ] },
            ].map((category, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Projects Section */}
<section id="projects" className="relative py-20 z-10">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
      Projects.db
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedProjects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Card className=" p-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="space-y-4 h-full flex flex-col">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-40 object-cover border border-purple-600/30 group-hover:shadow-lg transition"
                />
              )}

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              <p className="text-gray-400 text-sm flex-grow">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </a>
      ))}

      {/* See More Projects Card */}
      {projects.length > 5 && (
        <Link href="/projects" className="block group">
          <Card className="h-[400px] p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div>
              <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-400 mb-2">
                See More Projects
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                Explore the complete list of all my projects in detail.
              </p>
            </div>
          </Card>
        </Link>
      )}
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Connect.link
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Ready to build the future together? Let's connect and create something extraordinary.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Github, href: "https://github.com/lotchankumar?tab=repositories", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lotchan-kumar/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:lotchansm1612@gamil.com?subject=Hello Lotchan&body=I loved your portfolio!"
              , label: "Email" },
              { icon: PhoneCall, href: "tel:+917092796463", label: "Contact" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center hover:from-purple-600/50 hover:to-cyan-600/50 transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-purple-500/40"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 text-purple-400" />
              </a>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20">
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <Rocket className="w-6 h-6 text-cyan-400" />
              <span className="text-lg">Currently available for new projects</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 z-10 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Lotchan Portfolio. Crafted with ⚡ and futuristic vision.</p>
        </div>
      </footer>
    </div>
  );
}
