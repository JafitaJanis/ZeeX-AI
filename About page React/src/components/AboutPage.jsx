import { useEffect } from "react";
import "../assets/css/about.css";

export default function AboutPage() {
  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    document.addEventListener("scroll", revealOnScroll, { passive: true });
    revealOnScroll();

    // Typewriter Effect
    const text = "About Zeex AI";
    const target = document.getElementById("typewriter");
    let index = 0;

    function typeNext() {
      if (target && index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeNext, 100);
      }
    }

    typeNext();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="section reveal hero-section">
        <h1 id="typewriter" className="typewriter-title"></h1>
        <h2 className="hero-subtitle">
          Empowering Vision. Enhancing Safety. Automating Intelligence.
        </h2>
        <p className="hero-description">
          Zeex AI is an advanced AI-powered platform delivering computer vision,
          CCTV surveillance analytics, and automation solutions — enabling
          smarter, safer environments through real-time detection and actionable
          insights.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="section reveal mission-container">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p className="lead">
            To empower organizations with intelligent surveillance and
            automation by transforming ordinary CCTV systems into proactive
            guardians. We deliver real-time insights, predictive alerts, and
            seamless integration.
          </p>

          <h2 style={{ marginTop: "40px" }}>Our Vision</h2>
          <p className="lead">
            To pioneer a future where AI-driven vision systems redefine
            security, efficiency, and trust worldwide.
          </p>
        </div>

        <div className="mission-image">
          <img src="/images/image1.png" alt="Zeex AI Mission" />
        </div>
      </section>

      {/* Team */}
      <section className="section reveal">
        <h2>Meet our team</h2>

        <div className="grid">
          <a
            href="https://www.linkedin.com/in/yadavgauravkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/images/image0.jpg" className="team-img" alt="Gaurav Yadav" />
            <h3>Gaurav Yadav</h3>
            <p className="lead">Founder & CEO</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sujit-laware/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/images/image2.png" className="team-img" alt="Sujit Laware" />
            <h3>Sujit Laware</h3>
            <p className="lead">Chief Technology Officer</p>
          </a>

          <a
            href="https://www.linkedin.com/in/sanidhyak9"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/images/image3.png" className="team-img" alt="Sanidhya Kanhere" />
            <h3>Sanidhya Kanhere</h3>
            <p className="lead">Chief Business Officer</p>
          </a>

          <a
            href="https://in.linkedin.com/in/tarungangwar08"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <img src="/images/image4.png" className="team-img" alt="Tarun Gangwar" />
            <h3>Tarun Gangwar</h3>
            <p className="lead">Chief Operating Officer</p>
          </a>
        </div>
      </section>

      {/* Journey */}
      <section className="section reveal">
        <h2>Our journey</h2>
        <p className="lead">A timeline of milestones from inception to innovation.</p>

        <div className="timeline">
          <div className="timeline-item left">
            <div className="content">
              <h3>2022</h3>
              <p>Founded at IIT Madras, Nirmaan, CFI.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="content">
              <h3>2023</h3>
              <p>Launched smart CCTV analytics platform.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="content">
              <h3>2024</h3>
              <p>Expanded into enterprise automation solutions.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="content">
              <h3>2025</h3>
              <p>R&D on advanced computer vision models & deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <p className="brand">Zeex AI</p>
        <p className="tagline">
          Advanced AI-powered platform for computer vision, CCTV analytics, and
          automation solutions.
        </p>

        <div className="contact">
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>✉️ admin@zeexai.com | ☎️ +91 8709221636</p>
        </div>

        <div className="links">
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
          <a href="#journey">Journey</a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/zeex-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://x.com/ZEEX_AI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/zeex_ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://youtube.com/@zeexai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <p className="copy">© 2025 Zeex AI. All rights reserved.</p>
      </footer>
    </div>
  );
}