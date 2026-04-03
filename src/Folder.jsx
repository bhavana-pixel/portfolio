{/* Import Statements */ }
import { useState, useEffect } from "react";
import "./Folder.css";

{/* Function opening */}
export default function Folder() {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = ["About", "Resume", "Projects", "Experience"];
  
  {/* Function entry point */}
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
          {/* Projects Tab */}
          {activeTab === "Projects" && (
            <div className="paperclip-wrapper main-note">
              <span className="paperclip">📎</span>
              <div className="clip-note">
                <br />Click on the GitHub links to see my repositories! 🔎
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === "Experience" && (
            <div className="paperclip-wrapper main-note">
              <span className="paperclip">📎</span>
              <div className="clip-note">
                <br />My journey so far!
              </div>
            </div>
          )}
          {/* Resume - update here when needed */}
          {activeTab === "Resume" && (
            <div className="paperclip-wrapper main-note">
              <span className="paperclip">📎</span>
              <div className="clip-note">
                <br />View or download my resume! 📄
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === "About" && (
            <div className="paperclip-wrapper main-note">
              <span className="paperclip">📎</span>
              <div className="clip-note">
                <br />Get to know me! 👩🏽‍💻
              </div>
            </div>
          )}

          {/* Tab */}
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(activeTab === tab ? null : tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>


        {/* Paper Template */}
        {activeTab && (
          <div className="paper">
            {/* Back button */}
            <button className="back-button" onClick={() => setActiveTab(null)}>
              ← Back
            </button>

            {/* About Tab */}
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
                      {/* Interests */}
                      <p><strong>Some of my interests include ⇣</strong></p>
                      <p>✨ Machine Learning</p>
                      <p>✨ Artificial Intelligence</p>
                      <p>✨ Cloud Engineering</p>
                      <p>✨ Full-Stack Web Development</p>
                      <p>✨ Integrating CS into Healthcare</p>
                      <p>✨ Building projects & learning new technologies</p>
                    </div>

                    <div className="photo-wrapper">

                      {/* Changed pic URL to deploy */}
                      <img
                        src={`${import.meta.env.BASE_URL}me.jpg`}
                        alt="Bhavana"
                        className="about-photo"
                      />
                    </div>

                  </div>


                  <p className="quote">
                    “For the things we have to learn before we can do them, we learn by doing them.”
                  </p>
                  <p className="author">— Aristotle</p>
                  <p className="star-about"> ★  </p>
                </div>
              </div>
            )}
            {activeTab === "Resume" && (
              <div className="resume-layout">
                <h3>Resume</h3>

                {/* Changed pic URL to deploy */}
                <img
                  src={`${import.meta.env.BASE_URL}resume.jpg`}
                  alt="Bhavana Resume"
                  className="resume-image"
                />

                <div className="resume-buttons">
                  <div className="download">
                    {/* Changed pic URL to deploy */}
                    <a href={`${import.meta.env.BASE_URL}resume.jpg`} download>Download</a>
                  </div>
                  <br></br>
                  <div className="open">

                    {/* Changed pic URL to deploy */}
                    <a href={`${import.meta.env.BASE_URL}resume.jpg`} target="_blank" rel="noopener noreferrer">
                      Open full size
                    </a>
                  </div>
                </div>
                <p className="star-resume"> ★ </p>
              </div>
            )}
            {/* Projects */}
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
                      src={`${import.meta.env.BASE_URL}quotebook.jpg`}
                      alt="Quotebook project"
                      className="project-image"
                    />

                    {/* Github URL */}
                    <a
                      href="https://github.com/quote-generator-devs/quote-generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}github-logo.png`}
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
                      src={`${import.meta.env.BASE_URL}beachday.jpg`}
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
                        src={`${import.meta.env.BASE_URL}github-logo.png`}
                        alt="GitHub Repository"
                        className="github-logo-2"
                      />
                    </a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="project-row">
                  <div className="project-text3">
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
                      src={`${import.meta.env.BASE_URL}goodoledays.jpg`}
                      alt="Good Ole' Days project"
                      className="project-image project-image3"
                    />
                    <a
                      href="https://github.com/steelhacks-2025-devs/main"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}github-logo.png`}
                        alt="GitHub Repository"
                        className="github-logo-3"
                      />
                    </a>
                  </div>
                </div>
                <p className="star-projects"> ★ </p>
              </div>
            )}
            {activeTab === "Experience" && (
              <div className="experience-layout">
                <h3>Relevant Experience</h3>

                {/* Experience 1 */}
                <div className="experience1-row">
                  <div className="experience1-text">
                    <p>
                      <b>1. Undergraduate AI / ML Researcher</b><br />
                      Conducted research in a course examining trust in <br />
                      generative AI (ChatGPT) across demographics. Devised <br />
                      Random Forest Regression in Python on a dataset of 341<br />
                      survey responses with an 80 / 20 train-test split.
                    </p>
                  </div>

                  <div className="experience1-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}research.jpg`}
                      alt="AI Research"
                      className="experience1-image"
                    />
                  </div>
                </div>

                {/* Experience 2 */}
                <div className="experience2-row">
                  <div className="experience2-text">
                    <p>
                      <b>2. File & Data Structures Proctor</b><br />
                      Selected by my professor to tutor a File & Data Structures <br></br>
                      course of 71 students. Provided hands-on support in Java<br></br>
                      data structures, file tables, debugging, hash functions,<br></br>
                      JSON, and CSV.
                    </p>
                  </div>

                  <div className="experience2-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}java.jpg`}
                      alt="Artificial Intelligence WVU Logo"
                      className="java-image"
                    />
                  </div>
                </div>

                {/* Experience 3 */}
                <div className="experience3-row">
                  <div className="experience3-text">
                    <p>
                      <b>3. Artificial Intelligence WVU — Outreach Coordinator</b><br />
                      Hosted guest speakers and workshops focused on machine<br></br>
                      learning principles and ethical AI. Participated in events<br></br>
                      covering computer vision, TensorFlow, and ML algorithms.<br></br>
                    </p>
                    <div className="experience3-wrapper">
                      <img
                        src={`${import.meta.env.BASE_URL}aiwvu.jpg`}
                        alt="Artificial Intelligence WVU Logo"
                        className="aiwvu-image"
                      />
                    </div>
                  </div>

                  {/* Skills List */}
                </div>
                <div className="skills">
                  <div className="skill-group">
                    <span className="skill-title">Languages: </span>
                    <span>Java, Python, C, SQL, JavaScript, HTML, CSS, R</span>
                  </div>

                  <div className="skill-group">
                    <span className="skill-title">Frameworks: </span>
                    <span>React, Flask, Node.js, Express.js, TailwindCSS, JUnit</span>
                  </div>

                  <div className="skill-group">
                    <span className="skill-title">Developer Tools: </span>
                    <span>Docker, Azure, Anaconda, Git, GitHub, VS Code, Eclipse</span>
                  </div>

                  <div className="skill-group">
                    <span className="skill-title">ML Libraries: </span>
                    <span>Scikit-Learn, pandas, NumPy, Matplotlib</span>
                  </div>
                </div>
                <p className="star-experience"> ★ </p>
              </div>
            )}
          </div>
        )}
      </div>
      <p className="footer-signature">
        © {new Date().getFullYear()} Bhavana Dakshinamoorthy <span className="stars">⋆˙⟡</span>
      </p>
    </div>
  );
}