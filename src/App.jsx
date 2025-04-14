import { useState } from "react";
import questions from "./data/questions.json";
import { calculateYear } from "./data/scoring";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

function App() {
  const version = "0.0.8"
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const progressPercent = Math.round((step / questions.length) * 100);

  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, selectedOption]);
    setStep(step + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  if (!started) {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1>🧭 What Year Is Your Team Living In?</h1>
        <p>
          This short quiz will assess how your team works today and match it to a software development era — from the waterfall days of the '90s to the AI-enhanced teams of the 2020s.
        </p>
        <p>
          You'll answer 7 quick questions, and we’ll tell you: *What year are you really working in?*
        </p>
        <button onClick={() => setStarted(true)}>Start the Quiz</button>
        <footer>version</footer>
      </div>
    );
  }

return (
  <div className="container">
    {step >= questions.length ? (
      <ResultCard year={calculateYear(answers)} onRestart={restart} />
    ) : (
      <>
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              height: "10px",
              backgroundColor: "#eee",
              borderRadius: "5px",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                height: "10px",
                width: `${progressPercent}%`,
                backgroundColor: "#007bff",
                transition: "width 0.3s ease"
              }}
            ></div>
          </div>
        </div>

        <div style={{ minHeight: "220px", display: "flex", alignItems: "center" }}>
          <QuestionCard question={questions[step]} onSelect={handleAnswer} />
      </div>
      </>
    )}
  </div>
  );
}

export default App;