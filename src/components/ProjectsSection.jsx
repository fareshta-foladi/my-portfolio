import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      image: "https://via.placeholder.com/400",
      description: "A personal portfolio website built with React.",
      link: "#",
      techStack: ["React", "CSS"],
      featured: true,
    },
    {
      id: 2,
      name: "Weather App",
      image: "https://via.placeholder.com/400",
      description: "Weather forecast app using API.",
      link: "#",
      techStack: ["HTML", "CSS"],
      featured: false,
    },
    {
      id: 3,
      name: "Todo App",
      image: "https://via.placeholder.com/400",
      description: "Simple task manager.",
      link: "#",
      techStack: ["React"],
      featured: true,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;