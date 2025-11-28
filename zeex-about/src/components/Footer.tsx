export default function Footer() {
  return (
    <footer className="section footer bg-bg-1 border-t border-slate-700 text-center py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <p className="brand text-xl font-semibold text-slate-50">Zeex AI</p>
        <p className="tagline mt-2 text-muted">Advanced AI-powered platform for computer vision, CCTV analytics, and automation solutions.</p>

        <div className="contact mt-4 text-muted">
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>✉️ admin@zeexai.com &nbsp;|&nbsp; ☎️ +91 8709221636</p>
        </div>

        <div className="links mt-4">
          <a className="mx-3 text-accent" href="#about">About</a>
          <a className="mx-3 text-accent" href="#mission">Mission</a>
          <a className="mx-3 text-accent" href="#team">Team</a>
          <a className="mx-3 text-accent" href="#journey">Journey</a>
        </div>

        <div className="social-icons mt-6 flex justify-center gap-4 text-muted">
          <a href="https://www.linkedin.com/company/zeex-ai" target="_blank" rel="noopener noreferrer"
 aria-label="LinkedIn"><i className="fab fa-linkedin text-2xl"></i></a>
          <a href="https://x.com/ZEEX_AI" target="_blank" rel="noopener noreferrer"
 aria-label="Twitter X"><i className="fab fa-x-twitter text-2xl"></i></a>
          <a href="https://www.instagram.com/zeex_ai/" target="_blank" rel="noopener noreferrer"
 aria-label="Instagram"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="https://youtube.com/@zeexai" target="_blank" rel="noopener noreferrer"
aria-label="YouTube"><i className="fab fa-youtube text-2xl"></i></a>
        </div>

        <p className="copy mt-6 text-muted">© 2025 Zeex AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
