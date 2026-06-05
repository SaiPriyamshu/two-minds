import { useNavigate } from "react-router-dom";

const years = [
  {
    value: 1,
    label: "1st Year",
    tag: "Just getting started",
    icon: "🌱",
    desc: "Build your foundation — coding, maths, mindset",
  },
  {
    value: 2,
    label: "2nd Year",
    tag: "Finding your domain",
    icon: "⚙️",
    desc: "DSA, core subjects & first internship prep",
  },
  {
    value: 3,
    label: "3rd Year",
    tag: "Time to execute",
    icon: "🔥",
    desc: "Projects, internships & serious placement prep",
  },
  {
    value: 4,
    label: "4th Year",
    tag: "Conversion season",
    icon: "🎯",
    desc: "Crack placements, finalize your career path",
  },
];

function YearSelection() {
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
    }}>



      <h1 style={{
        fontSize: "clamp(26px, 5vw, 40px)",
        fontWeight: 700,
        color: "#f1f0ff",
        marginBottom: "8px",
        textAlign: "center",
      }}>
        Which year are you in?
      </h1>
      <p style={{
        fontSize: "15px",
        color: "#8b8a9b",
        marginBottom: "2.5rem",
        textAlign: "center",
      }}>
        Your roadmap will be tailored to your current stage
      </p>

      {/* Year Cards */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "480px",
      }}>
        {years.map((year) => (
          <button
            key={year.value}
            onClick={() => navigate("/dashboard", { state: { year: year.value } })}
            style={{
              background: "#1c1b2e",
              border: "1px solid #2a2a3a",
              borderRadius: "14px",
              padding: "16px 20px",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              transition: "transform 0.15s, border-color 0.15s, background 0.15s",
              width: "100%",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.background = "#231f3f";
              e.currentTarget.style.borderColor = "#7c3aed";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.background = "#1c1b2e";
              e.currentTarget.style.borderColor = "#2a2a3a";
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: "46px",
              height: "46px",
              borderRadius: "12px",
              background: "#2a2440",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              flexShrink: 0,
            }}>
              {year.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                <span style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#f1f0ff",
                }}>
                  {year.label}
                </span>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  background: "#2a2440",
                  color: "#a78bfa",
                  padding: "2px 8px",
                  borderRadius: "20px",
                  textTransform: "uppercase",
                }}>
                  {year.tag}
                </span>
              </div>
              <div style={{
                fontSize: "12px",
                color: "#7a7890",
                lineHeight: 1.5,
              }}>
                {year.desc}
              </div>
            </div>

            {/* Arrow */}
            <div style={{
              fontSize: "18px",
              color: "#4a4a6a",
              flexShrink: 0,
            }}>
              →
            </div>
          </button>
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "1.5rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "13px",
          color: "#4a4a6a",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
        onMouseLeave={e => e.currentTarget.style.color = "#4a4a6a"}
      >
        ← Back to goal selection
      </button>
    </div>
  );
}

export default YearSelection;