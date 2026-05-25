function Header({ message }) {
  return (
    <header className="header">
      <h1>Hi, I'm Fareshta 👋</h1>

      <p>{message}</p>

      <button className="btn">Explore My Work</button>
    </header>
  );
}

export default Header;