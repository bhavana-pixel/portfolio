import { useState } from "react";
import Folder from "./Folder";
import TerminalLoader from "./Terminal";
import "./App.css";

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
          <div className="title-container">
            <h1 className="title">Bhavana – Portfolio</h1>
          </div>
          <Folder />
        </div>
      )}
      {loading && <TerminalLoader onFinish={handleFinish} />}
    </>
  );
}