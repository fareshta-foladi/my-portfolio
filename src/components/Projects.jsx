import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      image: "https://via.placeholder.com/400",
      description: "A personal portfolio website built with React.",
      link: "#",
      techStack: ["React", "CSS", "JavaScript"],
      featured: true,
    },
    {
      name: "Weather App",
      image: "https://via.placeholder.com/400",
      description: "Weather forecast application with clean UI.",
      link: "#",
      techStack: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "Todo App",
      image: "https://via.placeholder.com/400",
      description: "Simple task management app.",
      link: "#",
      techStack: ["React", "Vite"],
      featured: true,
    },
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;