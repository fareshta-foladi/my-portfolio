import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const [search, setSearch] = useState("");

  const projects = [
    {
      id: 1,
      name: "Todo App",
      description: "Simple task manager",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/",
      techStack: ["React", "CSS"],
      featured: true,
    },
    {
      id: 2,
      name: "Weather App",
      description: "Shows weather data",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/",
      techStack: ["React", "API"],
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>My Projects</h2>

      <input
        type="text"
        placeholder="Search project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

export default ProjectsPage;