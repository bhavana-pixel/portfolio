import { useState } from "react";
import Folder from "./Folder";
import TerminalLoader from "./Terminal";
import "./App.css";
import TypingTitle from "./TypingTitle";

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
            {/* Had to add an extra i so thst the typing title worked lol */}
            <TypingTitle text="Hii! I'm Bhavana" speed={90} /> 
          </div>
          <Folder />
        </div>
      )}
      {loading && <TerminalLoader onFinish={handleFinish} />}
    </>
  );
}