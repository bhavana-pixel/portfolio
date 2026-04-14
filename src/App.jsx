// To run server : npm run dev
import { useState } from "react";
import Folder from "./Folder";
import TerminalLoader from "./Terminal";
import "./App.css";
import TypingTitle from "./TypingTitle";

// App starting point
export default function App() {

  // Variables
  const [loading, setLoading] = useState(true);    // terminal visible
  const [showPortfolio, setShowPortfolio] = useState(false); // portfolio mounted
  
  const handleFinish = () => {
    // Start fading out terminal
    setLoading(false);

    // Mount portfolio immediately
    setShowPortfolio(true);
  };

  // Function start
  return (
    <>
      {showPortfolio && (
        <div className={`page fade-in-overlap ${!loading ? "visible" : ""}`}>
           {/* 🔗 Social links */}
    <div className="social-links">
      
      {/* Github URL */}
      <a
        href="https://github.com/bhavana-pixel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img src={`${import.meta.env.BASE_URL}github-logo.png`} alt="GitHub" />
      </a>
      
      {/* Linkedin URL */}
      <a
        href="https://www.linkedin.com/in/bhavanadakshinamoorthy/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img src={`${import.meta.env.BASE_URL}linkedin.jpg`} alt="LinkedIn" />
      </a>

      {/* Email link */}
      <a 
        href = "mailto:bdakshinamoorthy4@gmail.com"
        aria-label="Mail"
      >
        <img src = {`${import.meta.env.BASE_URL}mail.png`}  alt="Email"/>
      </a>

    </div>
          <div className="title-container">
            {/* Had to add an extra i so that the typing title worked */}
            <TypingTitle text="Hii! I'm Bhavana" speed={90} /> 
          </div>
          <Folder />
        </div>
      )}
      {loading && <TerminalLoader onFinish={handleFinish} />}
    </>
  );
}