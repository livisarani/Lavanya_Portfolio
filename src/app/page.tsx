import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
