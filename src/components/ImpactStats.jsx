import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Total Startups ", value: 17 },
  { label: "Full Time Jobs Created", value: 50 },
  { label: "Funding Raised (Lakhs)", value: 964 },
  { label: "Currently Incubated", value: 10 },
  /*{ label: "Students Trained", value: 17000 },
  { label: "Startups Impacted", value: 3000 },
  { label: "Research Papers Published", value: 17 },
  { label: "Internships Every Year", value: 250 },*/
];

function ImpactStats() {
  const containerRef = useRef(null);
  const [visibleOnce, setVisibleOnce] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleOnce(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={styles.container}>
      {stats.map((stat, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.number}>
            {visibleOnce ? (
              <CountUp start={0} end={stat.value} duration={4} separator="," />
            ) : (
              0
            )}
            +
          </h2>
          <p style={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px 12px",
    alignItems: "start",
  },
  card: {
    background: "#fff",
    border: "0px solid transparent",
    borderRadius: "8px",
    padding: "8px",
    textAlign: "center",
    boxShadow: "none",
  },
  number: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#8b0000",
    margin: "0",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginTop: "8px",
  },
};

export default ImpactStats;
