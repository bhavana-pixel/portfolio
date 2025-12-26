import { useState } from "react";
import "./Folder.css";

export default function Folder() {
    const [activeTab, setActiveTab] = useState("About");
    const [open, setOpen] = useState(false);

    const tabs = ["About", "Resume", "Projects", "Experience"];

    return (
        <div 
            className={`folder-container ${open ? "open" : ""}`}
            onClick = {() => !open && setOpen(true)}
        >
            <div className = "tabs">
                {tabs.map((tab) => (
                    <button key = {tab} className = {`tab ${activeTab === tab ? "active" : ""}`}
                    onClick = {(e) => {
                        e.stopPropagation();
                        setActiveTab(tab);
                        setOpen(true);
                    }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            {open && (
            <div className = "tab-content" style={{ display: open ? "block" : "none" }}>
                {activeTab === "About" && <p> Welcome! My name is Bhavana! </p>}
                {activeTab === "Resume" && <p> Resume content here...</p>}
                {activeTab === "Projects" && <p> Here are my projects! </p>}
                {activeTab === "Experience" && (
                    <p> Internships and work experience here ...</p>
                )}
            </div>
         )}
        </div>
    );
}