"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Stunning Portfolio Website",
    desc: "A futuristic developer portfolio website with dark mode, neon gradients, glassmorphism, typing effects, and smooth animations",
    tech: ["Next.js", "Tailwind CSS", "Typescript", "Vercel", "Git"],
    link: "https://lotchan-kumar-portfolio.vercel.app/",
    image: "/portfolio.png",
  },
  {
    title: "A modern web platform",
    desc: "A modern web platform for a mobile repair business that brings doorstep service to customers. Transforms traditional walk-in repairs into convenient on-demand service.",
    tech: ["Next.js", "React", "Next API", "Typescript", "Tailwind CSS", "Git", "Vercel"],
    link: "https://lotchan-mobile-service.vercel.app/",
    image: "/mobileservice.png",
  },
  {
    title: "Traditional Clinic Landing Page",
    desc: "Transformed a traditional Tamil medical clinic advertisement into a sleek, professional web presence using modern full-stack technologies.",
    tech: ["Next.js", "React", "Git", "Typescript", "Tailwind CSS", "Vercel"],
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
    tech: ["React", "TypeScript", "Next", "Tailwind CSS"],
    link: "https://daily-profit-tracker.vercel.app/",
    image: "/tracker.png",
  },
]

export default function ProjectsPage() {
  return (
    <main>
      {/* Top Navbar with Back Button */}
      <div className="w-full flex justify-end items-center px-6 py-4 z-10 relative">
        <Link
          href="/"
          className="px-5 py-2 text-lg font-semibold bg-purple-700/30 hover:bg-purple-700/50 text-white rounded-xl transition-all duration-300 backdrop-blur-sm shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      <section className="py-20 px-6 max-w-6xl mx-auto">
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

        <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-16 relative text-white">
          <span className="relative z-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Projects.db
          </span>
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
