import { useState } from "react";
import Folder from "./Folder";
import TerminalLoader from "./Terminal";
import "./App.css";
import TypingTitle from "./TypingTitle";

export default function App() {
  const [loading, setLoading] = useState(true);    // terminal visible
  const [showPortfolio, setShowPortfolio] = useState(false); // portfolio mounted

  const handleFinish = () => {
    // Start fading out terminal
    setLoading(false);

    // Mount portfolio immediately
    setShowPortfolio(true);
  };

  return (
    <>
      {showPortfolio && (
        <div className={`page fade-in-overlap ${!loading ? "visible" : ""}`}>
           {/* 🔗 Social links */}
    <div className="social-links">
      <a
        href="https://github.com/bhavana-pixel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src="/github-logo.png" alt="GitHub" />
      </a>

      <a
        href="https://www.linkedin.com/in/bhavanadakshinamoorthy/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src="/linkedin.jpg" alt="LinkedIn" />
      </a>

      <a 
        href = "mailto:bhavana0412@hotmail.com"
        aria-label="Mail"
      >
        <img src = "/mail.png"  alt="Email"/>
      </a>

    </div>
          <div className="title-container">
            {/* Had to add an extra i so that the typing title worked lol */}
            <TypingTitle text="Hii! I'm Bhavana" speed={90} /> 
          </div>
          <Folder />
        </div>
      )}
      {loading && <TerminalLoader onFinish={handleFinish} />}
    </>
  );
}