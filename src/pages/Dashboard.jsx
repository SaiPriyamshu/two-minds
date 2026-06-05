/* eslint-disable no-unused-vars */
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { roadmap } from "../data/roadmap";

const goalMeta = {
  placement: { label: "Placement Roadmap", icon: "💼", color: "#7c3aed" },
  gate:      { label: "GATE Roadmap",      icon: "📐", color: "#0e7490" },
  ms_abroad: { label: "MS Abroad Roadmap", icon: "✈️", color: "#065f46" },
  startup:   { label: "Startup Roadmap",   icon: "🚀", color: "#92400e" },
};

const yearLabel = { 1: "1st Year", 2: "2nd Year", 3: "3rd Year", 4: "4th Year" };

// ─── Assessment Modal ────────────────────────────────────────────────────────
function AssessmentModal({ taskName, onClose }) {
  const [questions, setQuestions]   = useState([]);
  const [loading, setLoading]       = useState(false);
  const [answers, setAnswers]       = useState({});
  const [submitted, setSubmitted]   = useState(false);
  const [score, setScore]           = useState(0);
  const [error, setError]           = useState(null);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const prompt = `You are an expert engineering educator. Generate exactly 25 assessment questions for the topic: "${taskName}".

Mix the questions as follows:
- 18 Multiple Choice Questions (MCQ) with 4 options each
- 7 True/False questions

Return ONLY a valid JSON array. No explanation, no markdown, no backticks. Just raw JSON.

Format:
[
  {
    "id": 1,
    "type": "mcq",
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "Option A"
  },
  {
    "id": 2,
    "type": "tf",
    "question": "True/False question here?",
    "options": ["True", "False"],
    "answer": "True"
  }
]`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      const raw  = data.content.map(b => b.text || "").join("").trim();
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setQuestions(parsed);
    } catch (e) {
      setError("Failed to load questions. Please try again.");
    }
    setLoading(false);
  };

  const handleSelect = (qId, option) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const allAnswered = questions.length > 0 && questions.every(q => answers[q.id]);
  const percent = questions.length ? Math.round((score / questions.length) * 100) : 0;

  const getGrade = () => {
    if (percent >= 85) return { label: "Excellent! 🎉", color: "#34d399" };
    if (percent >= 65) return { label: "Good job! 👍", color: "#a78bfa" };
    if (percent >= 45) return { label: "Keep practising 💪", color: "#fbbf24" };
    return { label: "Needs more study 📚", color: "#f87171" };
  };

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 100,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      overflowY: "auto",
      padding: "24px 16px",
    }}
      onClick={({ target, currentTarget }) => { if (target === currentTarget) onClose(); }}
    >
      <div style={{
        background: "#13121f",
        border: "1px solid #2e2a4a",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "640px",
        padding: "28px 24px",
        position: "relative",
      }}>

        {/* Close */}
        <button onClick={onClose} style={{
          position: "absolute", top: "16px", right: "16px",
          background: "#1c1b2e", border: "1px solid #2e2a4a",
          borderRadius: "8px", color: "#6b6b80", cursor: "pointer",
          fontSize: "16px", width: "32px", height: "32px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>×</button>

        {/* Header */}
        <p style={{ fontSize: "11px", color: "#6b6b80", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
          Assessment
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#f1f0ff", marginBottom: "4px" }}>
          {taskName}
        </h2>
        <p style={{ fontSize: "13px", color: "#6b6b80", marginBottom: "24px" }}>
          25 questions · MCQ + True/False
        </p>

        {/* States */}
        {!loading && questions.length === 0 && !error && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "40px", marginBottom: "16px" }}>🧠</div>
            <p style={{ color: "#8b8a9b", fontSize: "14px", marginBottom: "20px" }}>
              AI will generate 25 questions specifically for <strong style={{ color: "#a78bfa" }}>{taskName}</strong>
            </p>
            <button onClick={fetchQuestions} style={{
              background: "#7c3aed", color: "#fff", border: "none",
              borderRadius: "10px", padding: "12px 28px",
              fontSize: "14px", fontWeight: 600, cursor: "pointer",
            }}>
              Generate Questions →
            </button>
          </div>
        )}

        {loading && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px", animation: "spin 1s linear infinite" }}>⚙️</div>
            <p style={{ color: "#8b8a9b", fontSize: "14px" }}>Generating questions for <strong style={{ color: "#a78bfa" }}>{taskName}</strong>...</p>
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {error && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <p style={{ color: "#f87171", marginBottom: "16px" }}>{error}</p>
            <button onClick={fetchQuestions} style={{
              background: "#7c3aed", color: "#fff", border: "none",
              borderRadius: "10px", padding: "10px 24px",
              fontSize: "14px", fontWeight: 600, cursor: "pointer",
            }}>Retry</button>
          </div>
        )}

        {/* Score screen */}
        {submitted && (
          <div style={{
            background: "#0f0f1a", border: "1px solid #2e2a4a",
            borderRadius: "14px", padding: "20px", textAlign: "center", marginBottom: "24px",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "8px" }}>
              {percent >= 85 ? "🏆" : percent >= 65 ? "🎯" : percent >= 45 ? "💪" : "📚"}
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: getGrade().color, marginBottom: "4px" }}>
              {score}/{questions.length}
            </div>
            <div style={{ fontSize: "14px", color: getGrade().color, fontWeight: 600, marginBottom: "4px" }}>
              {getGrade().label}
            </div>
            <div style={{ fontSize: "13px", color: "#6b6b80" }}>{percent}% correct</div>
          </div>
        )}

        {/* Questions */}
        {questions.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {questions.map((q, qi) => {
              const selected  = answers[q.id];
              const isCorrect = selected === q.answer;

              return (
                <div key={q.id} style={{
                  background: "#0f0f1a",
                  border: `1px solid ${submitted
                    ? (selected === q.answer ? "#166534" : selected ? "#7f1d1d" : "#2e2a4a")
                    : "#2e2a4a"}`,
                  borderRadius: "12px",
                  padding: "16px",
                }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      background: q.type === "tf" ? "#1e3a2e" : "#1e1535",
                      color: q.type === "tf" ? "#34d399" : "#a78bfa",
                      padding: "2px 8px", borderRadius: "6px",
                      flexShrink: 0, alignSelf: "flex-start",
                    }}>
                      {q.type === "tf" ? "T/F" : "MCQ"}
                    </span>
                    <span style={{ fontSize: "14px", color: "#d4d0f0", lineHeight: 1.5 }}>
                      {qi + 1}. {q.question}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {q.options.map((opt) => {
                      const isSelected = selected === opt;
                      const isAnswer   = q.answer === opt;
                      let bg = "#1c1b2e", border = "#2e2a4a", color = "#9b8fc4";

                      if (submitted) {
                        if (isAnswer)        { bg = "#052e16"; border = "#166534"; color = "#34d399"; }
                        else if (isSelected) { bg = "#2d0a0a"; border = "#7f1d1d"; color = "#f87171"; }
                      } else if (isSelected) {
                        bg = "#231f3f"; border = "#7c3aed"; color = "#f1f0ff";
                      }

                      return (
                        <button key={opt} onClick={() => handleSelect(q.id, opt)} style={{
                          background: bg, border: `1px solid ${border}`,
                          borderRadius: "8px", padding: "10px 14px",
                          textAlign: "left", cursor: submitted ? "default" : "pointer",
                          fontSize: "13px", color, transition: "all 0.15s",
                          display: "flex", alignItems: "center", gap: "8px",
                        }}>
                          {submitted && isAnswer && <span>✓</span>}
                          {submitted && isSelected && !isAnswer && <span>✗</span>}
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Submit / Retake */}
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                style={{
                  background: allAnswered ? "#7c3aed" : "#2a2440",
                  color: allAnswered ? "#fff" : "#4a4a6a",
                  border: "none", borderRadius: "12px",
                  padding: "14px", fontSize: "15px", fontWeight: 600,
                  cursor: allAnswered ? "pointer" : "not-allowed",
                  marginTop: "8px", transition: "background 0.2s",
                }}
              >
                {allAnswered ? "Submit Assessment →" : `Answer all questions (${Object.keys(answers).length}/${questions.length})`}
              </button>
            ) : (
              <button onClick={() => {
                setQuestions([]); setAnswers({});
                setSubmitted(false); setScore(0);
              }} style={{
                background: "#1c1b2e", color: "#a78bfa",
                border: "1px solid #3a2f6a", borderRadius: "12px",
                padding: "14px", fontSize: "14px", fontWeight: 600,
                cursor: "pointer", marginTop: "8px",
              }}>
                🔄 Retake Assessment
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  const year = location.state?.year || 1;
  const goal = location.state?.goal || "placement";

  const data = roadmap[goal]?.[year] || roadmap["placement"][1];
  const meta = goalMeta[goal] || goalMeta["placement"];

  const [checked, setChecked]           = useState({});
  const [activeAssessment, setAssessment] = useState(null);

  const toggle = (index) =>
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));

  const completedCount = Object.values(checked).filter(Boolean).length;
  const totalCount     = data.tasks.length;
  const percent        = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f13",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#f1f0ff",
    }}>

      {/* Assessment Modal */}
      {activeAssessment && (
        <AssessmentModal
          taskName={activeAssessment}
          onClose={() => setAssessment(null)}
        />
      )}

      {/* Top Nav */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px", borderBottom: "1px solid #1e1e2e",
        background: "#0f0f13", position: "sticky", top: 0, zIndex: 10,
      }}>
        <button onClick={() => navigate(-1)} style={{
          background: "transparent", border: "none", color: "#6b6b80",
          cursor: "pointer", fontSize: "13px", display: "flex",
          alignItems: "center", gap: "6px", padding: 0,
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
          onMouseLeave={e => e.currentTarget.style.color = "#6b6b80"}
        >← Back</button>

        <div style={{ fontSize: "13px", color: "#4a4a6a" }}>
          {meta.icon} {meta.label} · {yearLabel[year]}
        </div>

        <div style={{ fontSize: "12px", fontWeight: 600, color: percent === 100 ? "#34d399" : "#a78bfa" }}>
          {percent}% done
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "32px 24px 24px", maxWidth: "680px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", color: "#6b6b80", marginBottom: "6px" }}>
          {yearLabel[year]} · {data.duration}
        </p>
        <h1 style={{
          fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700,
          color: "#f1f0ff", marginBottom: "6px", lineHeight: 1.2,
        }}>
          {data.title}
        </h1>
        <p style={{ fontSize: "13px", color: "#6b6b80" }}>
          {completedCount} of {totalCount} tasks completed
        </p>
        <div style={{ marginTop: "16px", height: "6px", background: "#1e1e2e", borderRadius: "999px", overflow: "hidden" }}>
          <div style={{
            height: "100%", width: `${percent}%`,
            background: percent === 100
              ? "linear-gradient(90deg, #34d399, #059669)"
              : "linear-gradient(90deg, #7c3aed, #a78bfa)",
            borderRadius: "999px", transition: "width 0.4s ease",
          }} />
        </div>
      </div>

      {/* Task List */}
      <div style={{
        padding: "0 24px 40px", maxWidth: "680px", margin: "0 auto",
        display: "flex", flexDirection: "column", gap: "10px",
      }}>
        {data.tasks.map((task, index) => {
          const done = !!checked[index];

          return (
            <div key={index} style={{
              background: done ? "#131320" : "#1c1b2e",
              border: `1px solid ${done ? "#2a2a3a" : "#2e2a4a"}`,
              borderRadius: "14px", padding: "14px 16px",
              display: "flex", alignItems: "center", gap: "12px",
              transition: "all 0.2s", opacity: done ? 0.6 : 1,
            }}>

              {/* Checkbox */}
              <button onClick={() => toggle(index)} style={{
                width: "22px", height: "22px", borderRadius: "6px",
                border: `1.5px solid ${done ? "#7c3aed" : "#3a3a5a"}`,
                background: done ? "#7c3aed" : "transparent",
                cursor: "pointer", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", color: "#fff", transition: "all 0.15s", padding: 0,
              }}>
                {done ? "✓" : ""}
              </button>

              {/* Task name */}
              <span style={{
                flex: 1, fontSize: "14px",
                color: done ? "#4a4a6a" : "#d4d0f0",
                textDecoration: done ? "line-through" : "none",
                lineHeight: 1.4,
              }}>
                {task.name}
              </span>

              {/* Resource link */}
              {task.resource && (
                <a href={task.resource} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "11px", fontWeight: 600, color: "#7c3aed",
                  background: "#1e1535", border: "1px solid #3a2f6a",
                  borderRadius: "8px", padding: "4px 10px",
                  textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#2a1f4a"}
                  onMouseLeave={e => e.currentTarget.style.background = "#1e1535"}
                >
                  Resource ↗
                </a>
              )}

              {/* Assessment button */}
              <button onClick={() => setAssessment(task.name)} style={{
                fontSize: "11px", fontWeight: 600, color: "#f59e0b",
                background: "#1f1607", border: "1px solid #78350f",
                borderRadius: "8px", padding: "4px 10px",
                cursor: "pointer", flexShrink: 0, whiteSpace: "nowrap",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#292008"}
                onMouseLeave={e => e.currentTarget.style.background = "#1f1607"}
              >
                Test 🧠
              </button>
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {percent === 100 && (
        <div style={{
          margin: "0 auto 40px", maxWidth: "680px", padding: "0 24px",
        }}>
          <div style={{
            background: "#052e16", border: "1px solid #166534",
            borderRadius: "14px", padding: "20px", textAlign: "center",
          }}>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>🎉</div>
            <div style={{ fontSize: "16px", fontWeight: 600, color: "#34d399", marginBottom: "4px" }}>
              Phase complete!
            </div>
            <div style={{ fontSize: "13px", color: "#6ee7b7" }}>
              You've finished all tasks for {yearLabel[year]}. Move to the next year!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;