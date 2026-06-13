import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I am Fareshta Foladi, an aspiring Computer Science student
        from Afghanistan who is passionate about technology,
        programming, and Artificial Intelligence.
      </p>

      <p>
        I am currently learning React, JavaScript, Python, and modern
        web development while building projects to improve my skills.
      </p>

      {showMore && (
        <>
          <p>
            My goal is to study Computer Science at a leading
            university and use technology to create educational
            opportunities for people in my community.
          </p>

          <p>
            I believe in continuous learning, creativity,
            problem-solving, teamwork, and building applications
            that help others.
          </p>
        </>
      )}

      <button
        className="theme-btn"
        onClick={() => setShowMore(!showMore)}
        aria-expanded={showMore}
        aria-label="Show more information about me"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      <a
  href="/Resume.pdf"
  download
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none"
  }}
>
  Download Resume
</a>

      <h3 style={{ marginTop: "30px" }}>Skills</h3>

      <ul className="hobbies">
        <li>⚛️ React</li>
        <li>💻 JavaScript</li>
        <li>🐍 Python</li>
        <li>🤖 Artificial Intelligence</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>Hobbies</h3>

      <ul className="hobbies">
        <li>📚 Reading</li>
        <li>💻 Coding</li>
        <li>🥋 Taekwondo</li>
        <li>🌏 Learning Languages</li>
      </ul>
    </section>
  );
}

export default About;