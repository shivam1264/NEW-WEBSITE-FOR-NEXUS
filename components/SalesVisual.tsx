"use client";

import styles from "./SalesVisual.module.css";

const stackItems = ["Next.js", "AI Agents", "Mobile", "Dashboards"];
const bars = [68, 46, 84, 58, 92, 72, 88];
const events = [
  { time: "00:01", label: "Lead captured", tone: "mint" },
  { time: "00:04", label: "AI workflow routed", tone: "cyan" },
  { time: "00:08", label: "Deploy approved", tone: "coral" },
];

export default function SalesVisual() {
  return (
    <div className={styles.visualWrapper} aria-label="Animated product command center">
      <div className={styles.auroraField} />
      <div className={styles.ringOne} />
      <div className={styles.ringTwo} />

      <div className={styles.commandPanel}>
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.kicker}>NEXUS OS</span>
            <h3>Product Command Center</h3>
          </div>
          <div className={styles.liveBadge}>
            <span />
            Live Build
          </div>
        </div>

        <div className={styles.heroScreen}>
          <div className={styles.screenGrid} />
          <div className={styles.scanLine} />
          <div className={styles.coreNode}>
            <span className={styles.corePulse} />
            <strong>AI</strong>
          </div>
          {[0, 1, 2, 3].map((item) => (
            <span className={`${styles.node} ${styles[`node${item}`]}`} key={item} />
          ))}
          <svg className={styles.routeMap} viewBox="0 0 420 220" aria-hidden="true">
            <path d="M88 62 C145 28 205 34 250 82 S335 153 372 116" />
            <path d="M64 156 C130 180 178 151 224 112 S311 46 362 66" />
            <path d="M112 112 H308" />
          </svg>
        </div>

        <div className={styles.metricsRow}>
          <div>
            <span>Launch speed</span>
            <strong>2.8x</strong>
          </div>
          <div>
            <span>Automation lift</span>
            <strong>64%</strong>
          </div>
          <div>
            <span>Uptime</span>
            <strong>99.9</strong>
          </div>
        </div>

        <div className={styles.lowerGrid}>
          <div className={styles.chartCard}>
            <div className={styles.cardTitle}>Conversion Flow</div>
            <div className={styles.barChart}>
              {bars.map((height, idx) => (
                <span key={idx} style={{ height: `${height}%`, animationDelay: `${idx * 0.12}s` }} />
              ))}
            </div>
          </div>

          <div className={styles.eventCard}>
            <div className={styles.cardTitle}>Build Timeline</div>
            <div className={styles.eventList}>
              {events.map((event, idx) => (
                <div className={styles.eventItem} key={event.label} style={{ animationDelay: `${idx * 0.18}s` }}>
                  <span className={`${styles.eventDot} ${styles[event.tone]}`} />
                  <span>{event.time}</span>
                  <strong>{event.label}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.floatCard} ${styles.floatLeft}`}>
        <span>Strategy</span>
        <strong>Scope locked</strong>
      </div>
      <div className={`${styles.floatCard} ${styles.floatRight}`}>
        <span>Delivery</span>
        <strong>Production ready</strong>
      </div>

      <div className={styles.stackRail}>
        {stackItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
