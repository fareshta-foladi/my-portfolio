import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function ProjectCard({
  id,
  name,
  image,
  description,
  link,
  techStack,
  featured,
}) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFav = favorites.some((p) => p.id === id);

  const progress = featured ? 90 : 60; 

  return (
    <div className="card">
      {featured && <span className="badge">⭐ Featured</span>}

      <img src={image} alt={name} className="project-img" />

      <h3>{name}</h3>

      <p>{description}</p>

      <div>
        {techStack.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="buttons">
        <a href={link} target="_blank" rel="noreferrer">
          View Code
        </a>

        <Link to={`/projects/${id}`}>
          View Project
        </Link>
      </div>

      {/* ⭐ FAVORITE BUTTON */}
      <button onClick={() => toggleFavorite({ id, name })}>
        {isFav ? "💔 Remove Favorite" : "⭐ Add Favorite"}
  </button>
  
      <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${progress}%` }}
  />
</div>

    </div>
  );
}

export default ProjectCard;