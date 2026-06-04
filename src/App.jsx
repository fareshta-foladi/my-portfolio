import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

import "./style.css";

function App() {
  return (
    <div>
      <Navbar />

      <Header message="Welcome to my personal developer portfolio built with React." />

      <Profile
        image="https://via.placeholder.com/250"
        title="Computer Science Student"
        bio="Passionate about AI, coding, and building innovative solutions."
      />

      <About />

      <Projects />

      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;