/* Import Statements */
import { useState, useEffect } from "react";
import "./App.css";

export default function TypingTitle({ text = "", speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    setDisplayedText(""); 
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length - 1 ) { // This might be janky code for the typing title.
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

 return (
    <h1 className="title">
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
}