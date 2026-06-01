"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Terminal.module.css";

export default function Terminal() {
  const [typedText, setTypedText] = useState("");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullCode = `const nexus = new Team();
nexus.initializeAI({
  mode: 'enterprise',
  scale: Infinity,
  craft: true
});`;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logLines]);

  useEffect(() => {
    let index = 0;
    let typingInterval: any = null;
    let logInterval: any = null;
    let resetTimeout: any = null;
    
    // Step 1: Simulate text typing
    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index < fullCode.length) {
          setTypedText((prev) => prev + fullCode.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsCompiling(true);
          startLogs();
        }
      }, 35); // Fast, realistic typing speed
    };

    // Step 2: Simulate diagnostics logs boot
    const startLogs = () => {
      const logs = [
        "// Executing sequence...",
        "Connecting to Nexus Node Grid... [OK]",
        "Resolving core neural weights... [OK]",
        "Allocating memory spaces (scale: Infinity)... [OK]",
        "System Online. Nexus AI Core Active."
      ];

      let logIndex = 0;
      logInterval = setInterval(() => {
        if (logIndex < logs.length) {
          const currentLog = logs[logIndex];
          if (currentLog) {
            setLogLines((prev) => [...prev, currentLog]);
          }
          logIndex++;
        } else {
          clearInterval(logInterval);
          setIsCompiling(false);
          setIsFinished(true);
          
          // Reset animation loop after 8 seconds of idle time
          resetTimeout = setTimeout(() => {
            resetTerminal();
          }, 8000);
        }
      }, 8000 / logs.length / 2); // Quick log prints
    };

    const resetTerminal = () => {
      setTypedText("");
      setLogLines([]);
      setIsCompiling(false);
      setIsFinished(false);
      index = 0;
      startTyping();
    };

    startTyping();

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (logInterval) clearInterval(logInterval);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className={styles.terminalWrapper}>
      {/* Amber/orange glowing blur sphere behind */}
      <div className={styles.terminalGlow} />

      <div className={styles.terminalContainer} ref={containerRef}>
        {/* Editor Top Bar */}
        <div className={styles.header}>
          <div className={styles.dots}>
            <span className={styles.redDot} />
            <span className={styles.yellowDot} />
            <span className={styles.greenDot} />
          </div>
          <div className={styles.title}>team-nexus-ai.js</div>
        </div>

        {/* Editor Code Area */}
        <div className={styles.editorArea}>
          <pre className={styles.codeText}>
            {/* Syntax highlight basic parser */}
            {typedText.split("\n").map((line, idx) => (
              <div key={idx} className={styles.codeLine}>
                <span className={styles.lineNum}>{idx + 1}</span>
                <span>
                  {line && line.split(/(const|new|initializeAI|mode|scale|craft|true|Infinity)/g).map((word, wordIdx) => {
                    if (word === "const" || word === "new") {
                      return <span key={wordIdx} style={{ color: "#E06C75" }}>{word}</span>; // keyword pink/red
                    }
                    if (word === "initializeAI") {
                      return <span key={wordIdx} style={{ color: "#61AFEF" }}>{word}</span>; // function blue
                    }
                    if (word === "mode" || word === "scale" || word === "craft") {
                      return <span key={wordIdx} style={{ color: "#D19A66" }}>{word}</span>; // property orange
                    }
                    if (word === "true" || word === "Infinity") {
                      return <span key={wordIdx} style={{ color: "#98C379" }}>{word}</span>; // value green
                    }
                    return <span key={wordIdx}>{word}</span>;
                  })}
                </span>
              </div>
            ))}
            {/* Typing cursor */}
            {!isCompiling && !isFinished && <span className={styles.cursor}>|</span>}
          </pre>
        </div>

        {/* Terminal Output Log Area */}
        {logLines.length > 0 && (
          <div className={styles.logArea}>
            {logLines.map((line, index) => {
              if (!line) return null;
              return (
                <div key={index} className={styles.logLine}>
                  {line.startsWith("//") ? (
                    <span className={styles.logComment}>{line}</span>
                  ) : line.includes("[OK]") ? (
                    <span>
                      {line.replace("[OK]", "")}
                      <span className={styles.logSuccess}>[OK]</span>
                    </span>
                  ) : (
                    <span className={styles.logSpecial}>{line}</span>
                  )}
                </div>
              );
            })}
            {isCompiling && <span className={styles.logBlinker}>_</span>}
          </div>
        )}
      </div>
    </div>
  );
}
