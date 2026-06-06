import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A personal portfolio website built with React.",
    techStack: ["React", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Weather App",
    description: "Weather forecast app using API.",
    techStack: ["HTML", "CSS", "API"],
  },
  {
    id: 3,
    name: "Todo App",
    description: "Simple task management app.",
    techStack: ["React", "Vite"],
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found ❌</h2>;
  }

  return (
    <div className="card">
      <h1>{project.name}</h1>

      <p>{project.description}</p>

      <h3>Technologies:</h3>

      <ul>
        {project.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <Link to="/projects">⬅ Back to Projects</Link>
    </div>
  );
}

export default ProjectDetails;