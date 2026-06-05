import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import GoalSelection from "./pages/GoalSelection";
import YearSelection from "./pages/YearSelection";
import Dashboard from "./pages/Dashboard";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f13",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow blobs */}
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, #7c3aed33 0%, transparent 70%)",
        top: "-80px",
        left: "-80px",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: "350px",
        height: "350px",
        background: "radial-gradient(circle, #a78bfa22 0%, transparent 70%)",
        bottom: "-60px",
        right: "-60px",
        pointerEvents: "none",
      }} />

      {/* Badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "#1c1b2e",
        border: "1px solid #3a2f6a",
        borderRadius: "20px",
        padding: "5px 14px",
        marginBottom: "2rem",
      }}>
        <span style={{ fontSize: "11px", color: "#a78bfa", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          🎓 Built for Engineering Students
        </span>
      </div>

      {/* Main heading */}
      <h1 style={{
        fontSize: "clamp(48px, 10vw, 80px)",
        fontWeight: 800,
        color: "#f1f0ff",
        lineHeight: 1.1,
        marginBottom: "1rem",
        letterSpacing: "-0.02em",
      }}>
        Two Minds
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: "clamp(16px, 3vw, 22px)",
        color: "#8b8a9b",
        marginBottom: "0.5rem",
        maxWidth: "480px",
        lineHeight: 1.5,
      }}>
        Your Career. Your Roadmap.
      </p>
      <p style={{
        fontSize: "14px",
        color: "#4a4a6a",
        marginBottom: "2.5rem",
        maxWidth: "380px",
        lineHeight: 1.6,
      }}>
        A personalized 4-year guide for placements, GATE, MS abroad & startups — built by people who've been there.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/goals")}
        style={{
          background: "#7c3aed",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          padding: "14px 32px",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.15s, transform 0.15s",
          marginBottom: "1rem",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#6d28d9";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#7c3aed";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Get Started →
      </button>

      

      {/* Stats row */}
      <div style={{
        display: "flex",
        gap: "32px",
        marginTop: "3.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {[
          { value: "4", label: "Career Tracks" },
          { value: "100+", label: "Curated Tasks" },
          { value: "4", label: "Years Mapped" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#a78bfa",
              marginBottom: "2px",
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: "12px",
              color: "#4a4a6a",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/goals" element={<GoalSelection />} />
        <Route path="/year" element={<YearSelection />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;