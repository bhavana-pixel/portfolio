import { useState } from "react";
import "./Folder.css";

export default function Folder() {
  const [activeTab, setActiveTab] = useState(null);
  const tabs = ["About", "Resume", "Projects", "Experience"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="folder-page-wrapper">
      <div className="folder-wrapper">
        <div className={`folder-container ${activeTab ? "shrunk" : ""}`}>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab && (
          <div className="paper">
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