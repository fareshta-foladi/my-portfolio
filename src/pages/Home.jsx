import Profile from "../components/Profile";

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <Profile
          image="https://via.placeholder.com/200"
          title="Fareshta Foladi"
          bio="Computer Science Student"
        />

        <h1
          style={{
            marginTop: "20px",
            fontSize: "2.5rem",
          }}
        >
          Hi, I'm Fareshta Foladi 👋
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
          I am an aspiring Computer Science student from Afghanistan,
          passionate about React, Python, and Artificial Intelligence.
          I enjoy building accessible, responsive, and user-friendly
          web applications while continuously improving my skills.
        </p>

        {/* CTA BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "25px",
          }}
        >
          <a
            href="/projects"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            View My Projects
          </a>

          <a
            href="/contact"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Let's Connect
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;