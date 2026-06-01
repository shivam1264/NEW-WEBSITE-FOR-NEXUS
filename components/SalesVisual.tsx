"use client";

import styles from "./SalesVisual.module.css";

export default function SalesVisual() {
  return (
    <div className={styles.visualWrapper}>
      {/* Ambient glow behind mockup */}
      <div className={styles.ambientGlow} />

      {/* Code Editor Container */}
      <div className={styles.editorContainer}>
        {/* Editor Title Bar */}
        <div className={styles.editorHeader}>
          <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.redDot}`} />
            <span className={`${styles.dot} ${styles.yellowDot}`} />
            <span className={`${styles.dot} ${styles.greenDot}`} />
          </div>
          <div className={styles.tabContainer}>
            <div className={`${styles.tab} ${styles.activeTab}`}>
              <span className={styles.tabIcon}>TS</span>
              <span className={styles.tabTitle}>api/dispatch.ts</span>
            </div>
            <div className={styles.tab}>
              <span className={styles.tabIcon}>JSON</span>
              <span className={styles.tabTitle}>package.json</span>
            </div>
          </div>
        </div>

        {/* Editor Body */}
        <div className={styles.editorBody}>
          {/* Line Numbers */}
          <div className={styles.lineNumbers}>
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          {/* Code Content */}
          <div className={styles.codeArea}>
            <pre suppressHydrationWarning={true}>
              <code>
                <span className={styles.keyword}>import</span> {"{"} NextRequest, NextResponse {"}"} <span className={styles.keyword}>from</span> <span className={styles.string}>"next/server"</span>;{"\n"}
                <span className={styles.keyword}>import</span> {"{"} db {"}"} <span className={styles.keyword}>from</span> <span className={styles.string}>"@/lib/database"</span>;{"\n"}
                {"\n"}
                <span className={styles.keyword}>export async function</span> <span className={styles.functionName}>POST</span>(req: NextRequest) {"{"}{"\n"}
                {"  "}<span className={styles.keyword}>const</span> {"{"} userId, plan {"}"} = <span className={styles.keyword}>await</span> req.json();{"\n"}
                {"  "}{"\n"}
                {"  "}<span className={styles.comment}>// Provision active developer pod</span>{"\n"}
                {"  "}<span className={styles.keyword}>const</span> pod = <span className={styles.keyword}>await</span> db.pod.create({"{"} userId, plan, status: <span className={styles.string}>"ACTIVE"</span> {"}"});{"\n"}
                {"  "}<span className={styles.keyword}>return</span> NextResponse.json(pod);{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        {/* Terminal output console */}
        <div className={styles.terminalPanel}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalTitle}>CONSOLE OUTPUT</span>
            <span className={styles.terminalStatus}>● active</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> nexus deploy --prod
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.success}>✔</span> Compiled client production routing (1.2s)
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.success}>✔</span> Serverless edge functions deployed successfully
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.info}>[TELEMETRY]</span> Response: 180ms | Cache hit: 100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
