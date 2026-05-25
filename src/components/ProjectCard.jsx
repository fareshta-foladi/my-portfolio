function ProjectCard({
  name,
  image,
  description,
  link,
  techStack,
  featured,
}) {
  return (
    <div className="project-card">
      {featured && <span className="featured">Featured</span>}

      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p>{description}</p>

      <a href={link} target="_blank">
        View Project
      </a>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;