import { useState } from "react";
import "./Folder.css";

export default function Folder() {
    const [activeTab, setActiveTab] = useState("About");
    const [open, setOpen] = useState(false);

    const tabs = ["About", "Resume", "Projects", "Experience"];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setOpen(true);
    }
    return (
        <div 
            className={`folder-container ${open ? "open" : ""}`}
            onClick = {() => !open && setOpen(true)}
        >
            <div className = "tabs">
                {tabs.map((tab) => (
                    <button key = {tab} className = {`tab ${activeTab === tab ? "active" : ""}`}
                    onClick = {(e) => {
                        handleTabClick(tab)
                    }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            <div className = {`tab-content ${open ? "fade-in" : "fade-out"}`}>
                {activeTab === "About" && <p> Welcome! My name is Bhavana! </p>}
                {activeTab === "Resume" && <p> Resume content here...</p>}
                {activeTab === "Projects" && <p> Here are my projects! </p>}
                {activeTab === "Experience" && (
                    <p> Internships and work experience here ...</p>
                )}
            </div>
        </div>
    );
}