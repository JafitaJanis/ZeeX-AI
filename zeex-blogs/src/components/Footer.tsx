import "./../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: "900px", margin: "auto" }}>
        <p className="brand">Zeex AI</p>
        <p className="tagline">
          Advanced AI-powered platform for computer vision & automation
          solutions.
        </p>

        <div className="contact">
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>✉️ admin@zeexai.com | ☎️ +91 8709221636</p>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/company/zeex-ai" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/ZEEX_AI" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/zeex_ai/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://youtube.com/@zeexai" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

        <p className="copy">© 2025 Zeex AI. All rights reserved.</p>
      </div>
    </footer>
  );
}