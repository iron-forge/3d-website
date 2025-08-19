import { useEffect, useState, useRef } from "react";
import { getProjects } from "../lib/getProjects";
import ProjectCard from "../components/ui/ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const workSectionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  useScrollAnimation(workSectionRef);

  return (
    <div className="font-sans min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section id="hero" className="w-full flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Creative Agency</h1>
        <p className="text-xl max-w-xl text-center mb-8">We blend design, technology, and 3D magic to build unforgettable digital experiences.</p>
        <a href="#work" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">See Our Work</a>
      </section>

      {/* About Section */}
        <h2 ref={workSectionRef} className="text-3xl font-bold mb-4">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-3xl py-20 px-4 text-center border-b border-gray-800">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <ul className="flex flex-col gap-4 text-lg">
          <li>3D Website Development</li>
          <li>UI/UX Design</li>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">Ready to start your next project? Reach out and let’s create something amazing together.</p>
        <a href="mailto:hello@creativeagency.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">Email Us</a>
      </section>
    </div>
  );
}
