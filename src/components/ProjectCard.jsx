import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function ProjectCard({
  id,
  name,
  image,
  description,
  link,
  techStack = [],
  featured,
}) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFav = favorites.some((p) => p.id === id);
  const progress = featured ? 90 : 60;

  return (
    <article className="card">
      {featured && <span className="badge">⭐ Featured</span>}

      <img src={image} alt={name} className="project-img" />

      <h3>{name}</h3>

      <p>{description}</p>

      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="buttons">
        <a href={link} target="_blank" rel="noreferrer">
          Live Demo
        </a>

        <Link to={`/projects/${id}`}>
          View Details
        </Link>
      </div>

      <button
        onClick={() => toggleFavorite({ id, name })}
        aria-label="Toggle favorite project"
      >
        {isFav ? "💔 Remove Favorite" : "⭐ Add Favorite"}
      </button>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </article>
  );
}

export default ProjectCard;