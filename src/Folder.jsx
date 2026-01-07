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
                  <p className="star"> ★</p>
                </div>
              </div>
            )}
            {activeTab === "Resume" && <p>Resume file here...</p>}

{activeTab === "Projects" && (
  <div className="projects-layout">
    <h3>Projects</h3>

    {/* Project 1 */}
    <div className="project-row">
      <div className="project-text">
        <p>
          <strong>1. Quotebook</strong> — AI-Powered Quote Generator
        </p>
        <ul>
          <li>A web app that allows users to input moods to receive 10 personalized quotes.</li>
          <li>Uses artificial intelligence to analyze input and generate quotes.</li>
          <li>Allows account creation and saving quotes to user profiles.</li>
        </ul>
      </div>

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

    {/* Project 2 */}
    <div className="project-row-reverse">
      <div className="project-text">
        <p>
          <strong>2. Beach Day</strong> — Beach Trip Planner
        </p>
        <ul>
          <li>A tool that allows users to plan their ideal beach trips.</li>
          <li>Retrieves weather, forecasts, and beach information.</li>
          <li>Can save beaches and receive hazard email alerts.</li>
          <li> Allows for account creation.</li>
        </ul>
      </div>

      <div className="project-image-wrapper">
        <img
          src="/beachday.jpg"
          alt="Beach Day project"
          className="project-image"
        />
        <a
          href="https://github.com/WVU-CS330-2025-01-Group01/beach-day"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img
            src="/github-logo.png"
            alt="GitHub Repository"
            className="github-logo-2"
          />
        </a>
      </div>
    </div>

    {/* Project 3 */}
     <div className="project-row">
      <div className = "project-text3">
        <p>
          <strong> 3. Good Ole' Days </strong> - Senior Living Assistant
        </p>
        <ul>
          <li> A platform that recommends senior-friendly <br>
          </br>communities to seniors looking for places to retire.<br>
          </br> </li>
          <li> Seniors can input desired attributes and receive <br></br> 
               city/town recommendations.</li>
          <li> Recommendations are based on Principal <br></br>
              Component Analysis and Proximity Scoring (ML).
          </li>
        </ul>
      </div>
      <div className="project-image-wrapper">
        <img
          src="/goodoledays.jpg"
          alt="Good Ole' Days project"
          className="project-image"
        />
        <a
          href="https://github.com/steelhacks-2025-devs/main"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img
            src="/github-logo.png"
            alt="GitHub Repository"
            className="github-logo-3"
          />
        </a>
      </div>
    </div>
  </div>
)}
            {activeTab === "Experience" && <p>Internships and work experience here...</p>}
          </div>
        )}
      </div>
    </div>
  );
}