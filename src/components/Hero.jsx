import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I'm Fareshta Foladi 👋</h1>

      <p>
        Frontend Developer building modern, responsive, and accessible React applications.
      </p>

      <div className="hero-buttons">
        <Link to="/projects">
          View My Projects
        </Link>

        <Link to="/contact">
          Contact Me
        </Link>
      </div>
    </section>
  );
}

export default Hero;