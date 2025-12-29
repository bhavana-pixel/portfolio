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
                    <br/>Click each tab to<br />learn more about me! <br/>
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

            {activeTab === "About" && <p>Welcome! My name is Bhavana!</p>}
            {activeTab === "Resume" && <p>Resume content goes here...</p>}
            {activeTab === "Projects" && <p>Here are my projects!</p>}
            {activeTab === "Experience" && <p>Internships and work experience here...</p>}
          </div>
        )}
      </div>
    </div>
  );
}