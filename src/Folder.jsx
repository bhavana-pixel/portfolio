import { useState } from "react";
import "./Folder.css";

export default function Folder() {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = ["About", "Resume", "Projects", "Experience"];

  return (
    <div className="folder-page-wrapper">
      <div className="folder-wrapper">
        {/* Folder */}
        <div className={`folder-container ${activeTab ? "shrunk" : ""}`}>
          <div className="paperclip-wrapper">
            <span className="paperclip">📎</span>
            <div className="clip-note">
              <br />Click each tab to<br />learn more about me! <br />
            </div>
          </div>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Paper */}
        {activeTab && (
          <div className="paper">
            {/* Back button */}
            <button className="back-button" onClick={() => setActiveTab(null)}>
              ← Back
            </button>

            {activeTab === "About" && (
              <div className="about-layout">
                <div className="about-text">
                  <h3>Welcome, my name is Bhavana Dakshinamoorthy!</h3>

                  <p>
                    I am an undergraduate computer science student at West Virginia
                    University with a minor in General Business!
                  </p>

                  <div className="interests-row">
                    <div className="interests-list">
                      <p><strong>Some of my interests include ⇣</strong></p>
                      <p>✨ Machine Learning</p>
                      <p>✨ Artificial Intelligence</p>
                      <p>✨ Cloud Engineering</p>
                      <p>✨ Full-Stack Web Development</p>
                      <p>✨ Integrating CS into Healthcare</p>
                      <p>✨ Building projects & learning new technologies</p>
                    </div>

                    <div className="photo-wrapper">
                      <img
                        src="/me.jpg"
                        alt="Bhavana"
                        className="about-photo"
                      />
                    </div>

                  </div>
                  <p className="quote">
                    “For the things we have to learn before we can do them, we learn by doing them.”
                  </p>
                  <p className="author">— Aristotle</p>
                </div>
              </div>
            )}
            {activeTab === "Resume" && <p>Resume file here...</p>}

            {activeTab === "Projects" && (
              <div className="projects-layout">
  <h3>Projects</h3>

  <div className="project-row">
    <div className="project-text">
      <p>
        <strong>1. Quotebook</strong> — AI-Powered Quote Generator
      </p>

      <ul>
        <li>A web app that allows users to input moods to receive 10 personalized quotes</li>
        <li>Uses artificial intelligence to analyze input and generate quotes</li>
        <li>Allows account creation and saving quotes to user profiles</li>
      </ul>
    </div>

    {/* Image + GitHub logo wrapper */}
    <div className="project-image-wrapper">
      <img
        src="/quotebook.jpg"
        alt="Quotebook project"
        className="project-image"
      />

      <a
        href="https://github.com/quote-generator-devs/quote-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img
          src="/github-logo.png"
          alt="GitHub Repository"
          className="github-logo"
        />
      </a>
    </div> 
  </div>

  <p>
    <strong> 2. Beach Day </strong> - Beach Trip Planner
  </p>
</div>
            )}
            {activeTab === "Experience" && <p>Internships and work experience here...</p>}
          </div>
        )}
      </div>
    </div>
  );
}