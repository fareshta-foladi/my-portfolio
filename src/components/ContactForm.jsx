import { useState,useEffect } from "react";

function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSavedData, setHasSavedData] =
  useState(false);
  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
const feedbacks = [
  {
    name: "Ali",
    rating: 5,
    comment: "Amazing Portfolio"
  },
  {
    name: "Sara",
    rating: 4,
    comment: "Great Work"
  }
];
const projects = [
  {
    title: "Portfolio",
    tech: "React"
  },
  {
    title: "Todo App",
    tech: "JavaScript"
  }
];

    useEffect(() => {
  localStorage.setItem(
    "portfolioForm",
    JSON.stringify({
      name,
      email,
      message,
    })
  );
}, [name, email, message]);

const [updates, setUpdates] = useState([]);

useEffect(() => {
  const interval = setInterval(() => {
    setUpdates((prev) => [
      ...prev,
      "New update arrived 🚀"
    ]);
  }, 15000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const savedData =
    localStorage.getItem(
      "portfolioForm"
    );

  if (savedData) {
    const parsedData =
      JSON.parse(savedData);

    setName(parsedData.name || "");
    setEmail(parsedData.email || "");
    setMessage(parsedData.message || "");

    setHasSavedData(true);
  }
}, []);

useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);

useEffect(() => {
  const timer = setTimeout(() => {
    if (
      email &&
      !/\S+@\S+\.\S+/.test(email)
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid Email Format"
      }));
    }
  }, 400);

  return () => clearTimeout(timer);
}, [email]);




function validate() {

  let newErrors = {};

  if (!name) {
    newErrors.name = "Name is required";
  }

  if (!email) {
    newErrors.email = "Email is required";
  }

  if (
  email &&
  !/\S+@\S+\.\S+/.test(email)
) {
  newErrors.email =
    "Invalid Email Format";
}

  if (!message) {
    newErrors.message = "Message is required";
  }

  return newErrors;
}
  
  function handleSubmit(e) {

  e.preventDefault();

  const validationErrors = validate();

  if (
    Object.keys(validationErrors).length > 0
  ) {

    setErrors(validationErrors);

    return;
  }

 alert("Message Sent successfully!");

localStorage.removeItem("portfolioForm");
setHasSavedData(false);

setName("");
setEmail("");
setMessage("");
setErrors({});
}

  return (

  <section className={theme}>

    <button
      onClick={() =>
        setTheme(
          theme === "light"
            ? "dark"
            : "light"
        )
      }
    >
      {theme === "light"
        ? "🌙 Dark"
        : "☀️ Light"}
    </button>

    <h2>Contact Me</h2>

    {hasSavedData && (
      <p>
        💾 You have unsent message data saved!
      </p>
    )}

    <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <p>{errors.name}</p>

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <p>{errors.email}</p>

        <br /><br />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <p>{errors.message}</p>

        <br /><br />

        <button type="submit">
          Send Message
        </button>

      </form>

<div className="preview">

  <h3>Live Preview</h3>

  {name && (
    <p>👋 Hello {name}</p>
  )}

  <p>Name: {name}</p>

  <p>Email: {email}</p>

  <p>Message: {message}</p>

  {!message && (
    <p>No message yet...</p>
  )}

</div>
<div>
  <h2>Feedback Wall</h2>

  {feedbacks.map((item, index) => (
    <div key={index}>
      <h4>
        {item.name}

        {item.rating === 5 &&
          " 🌟 Featured"}
      </h4>

      <p>
        Rating:
        {"⭐".repeat(item.rating)}
      </p>

      <p>{item.comment}</p>
    </div>
  ))}
</div>
<div className="projects">
  <h2>🚀 Projects</h2>

  {projects.map((project, index) => (
    <div key={index} className="project-card">

      <h3>📌 {project.title}</h3>

      <p>🛠 Tech: {project.tech}</p>

      {/* Conditional Rendering */}
      {project.tech === "React" && (
        <span>🔥 Featured Project</span>
      )}
      <button>
        View Details
      </button>
    </div>
  ))}
</div>
 
 <div>
  <h2>Live Updates</h2>

  {updates.map((u, i) => (
    <p key={i}>⚡ {u}</p>
  ))}
</div>

    </section>

  );
}

export default ContactForm;