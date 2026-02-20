import { useEffect, useState } from "react";
import "./Terminal.css";

export default function TerminalLoader({ onFinish }) {
  /* Animation statements. */
  const buildSteps = [
    "cd portfolio",
    "npm install",
    "npm run dep",
    'npm error Missing script: "dep"',
    "npm run dev",
    "VITE v7.3.0  ready in 1077 ms"
  ];

  /* States */
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const handleSkip = () => {
    setSkipped(true);
    setFadeOut(true);
    setTimeout(onFinish, 300);
  };

  useEffect(() => {
    if (skipped) return;

    if (stepIndex >= buildSteps.length) {
      setFadeOut(true);              // start fade
      const timer = setTimeout(onFinish, 800); // after fade, callback
      return () => clearTimeout(timer);
    }

    const currentLine = buildSteps[stepIndex];
    const isErrorLine = currentLine.startsWith("npm error");

    if (!isErrorLine) {
      if (charIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 55);
        return () => clearTimeout(timeout);
      } else {
        setLines((prev) => [...prev, currentLine]);
        setCurrentText("");
        setCharIndex(0);
        setStepIndex((prev) => prev + 1);
      }
    } else {
      const errorPause = setTimeout(() => {
        setLines((prev) => [...prev, currentLine]);
        setCurrentText("");
        setCharIndex(0);
        setStepIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(errorPause);
    }
  }, [charIndex, stepIndex, buildSteps, onFinish]);

  /* Return terminal loader */
  return (
    <div className={`terminal-loader ${fadeOut ? "fade-out" : ""}`}>
      {lines.map((line, index) => (
        <p
          key={index}
          className={`terminal-line ${line.startsWith("npm error") ? "error-line" : ""}`}
        >
          {line}
        </p>
      ))}
      {currentText && !skipped && (
        <p className="terminal-line">
          {currentText}
          <span className="cursor">█</span>
        </p>
      )}

      {!fadeOut && (
        <button className="skip-button" onClick={handleSkip}>
          Skip animation →
        </button>
      )}
    </div>
  );
}