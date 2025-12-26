import { useState } from "react";
import "./Folder.css";

export default function Folder() {
    const [activeTab, setActiveTab] = useState("About");
    const tabs = ["About", "Resume", "Projects", "Experience"];

    return (
        <div className="folder-container">
            <div className = "tabs">
                {tabs.map((tab) => (
                    <button key = {tab} className = {'tab $(activeTab === tab ? "active" : ""}'}
                    onclick = {() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className = "tab-content">
                {activeTab === "About" && <p> Welcome! My name is Bhavana! </p>}
                {activeTab === "Resume" && <p> Resume content here...</p>}
                {activeTab === "Projects" && <p> Here are my projects! </p>}
                {activeTab === "Experience" && <p> Internships and work experience here ...</p>}

            </div>
        </div>
    );
}