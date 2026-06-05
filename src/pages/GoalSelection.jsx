import { useNavigate } from "react-router-dom";

const goals = [
  {
    id: "placement",
    label: "Placement",
    icon: "💼",
    desc: "Land your dream job at top companies",
    route: "/year",
    available: true,
  },
  {
    id: "gate",
    label: "GATE",
    icon: "📐",
    desc: "Crack GATE for M.Tech or PSU jobs",
    route: "/year",
    available: true,
  },
  {
    id: "ms_abroad",
    label: "MS Abroad",
    icon: "✈️",
    desc: "Get into top universities worldwide",
    route: "/year",
    available: true,
  },
  {
    id: "startup",
    label: "Startup",
    icon: "🚀",
    desc: "Build and launch your own venture",
    route: "/year",
    available: true,
  },
];

function GoalSelection() {
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
        fontSize: "clamp(28px, 5vw, 42px)",
        fontWeight: 700,
        color: "#f1f0ff",
        marginBottom: "8px",
        textAlign: "center",
      }}>
        What's your goal?
      </h1>
      <p style={{
        fontSize: "15px",
        color: "#8b8a9b",
        marginBottom: "2.5rem",
        textAlign: "center",
      }}>
        Choose a path — we'll build your personalized roadmap
      </p>

      {/* Goal Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "14px",
        width: "100%",
        maxWidth: "520px",
      }}>
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => navigate(goal.route)}
            style={{
              background: goal.available ? "#1c1b2e" : "#141420",
              border: goal.available ? "1.5px solid #7c3aed" : "1px solid #2a2a3a",
              borderRadius: "16px",
              padding: "20px 16px",
              cursor: goal.available ? "pointer" : "pointer",
              textAlign: "left",
              position: "relative",
              transition: "transform 0.15s, border-color 0.15s, background 0.15s",
              opacity: goal.available ? 1 : 0.6,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.background = goal.available ? "#231f3f" : "#181826";
              e.currentTarget.style.borderColor = goal.available ? "#a78bfa" : "#3a3a50";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = goal.available ? "#1c1b2e" : "#141420";
              e.currentTarget.style.borderColor = goal.available ? "#7c3aed" : "#2a2a3a";
            }}
          >
            {/* Coming Soon Badge */}
            {!goal.available && (
              <span style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                background: "#2a2a3a",
                color: "#6b6b80",
                padding: "3px 8px",
                borderRadius: "20px",
                textTransform: "uppercase",
              }}>
                Soon
              </span>
            )}

            {/* Icon */}
            <div style={{
              fontSize: "28px",
              marginBottom: "10px",
              lineHeight: 1,
            }}>
              {goal.icon}
            </div>

            {/* Label */}
            <div style={{
              fontSize: "16px",
              fontWeight: 600,
              color: goal.available ? "#f1f0ff" : "#6b6b80",
              marginBottom: "4px",
            }}>
              {goal.label}
            </div>

            {/* Description */}
            <div style={{
              fontSize: "12px",
              color: goal.available ? "#9b8fc4" : "#4a4a5a",
              lineHeight: 1.5,
            }}>
              {goal.desc}
            </div>

            {/* Arrow for available */}
            {goal.available && (
              <div style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#7c3aed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                color: "#fff",
              }}>
                →
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Footer note */}
      <p style={{
        marginTop: "2rem",
        fontSize: "12px",
        color: "#4a4a5a",
      }}>
        More tracks coming soon 🔒
      </p>
    </div>
  );
}

export default GoalSelection;