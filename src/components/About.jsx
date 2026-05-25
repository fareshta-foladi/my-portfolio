import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I am a passionate Computer Science student from Afghanistan
        who loves technology, AI, and innovation.
      </p>

      {showMore && (
        <p>
          My dream is to study abroad, become a software engineer,
          and build impactful solutions using technology.
        </p>
      )}

      <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>

      <h3>My Hobbies</h3>
      <ul className="hobbies">
        <li>📚 Reading</li>
        <li>💻 Coding</li>
        <li>🥋 Taekwondo</li>
        <li>🌏 Languages</li>
      </ul>
    </section>
  );
}

export default About;