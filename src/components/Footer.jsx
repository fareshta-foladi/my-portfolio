function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>

      <p>© {new Date().getFullYear()} Fareshta Foladi</p>
    </footer>
  );
}

export default Footer;