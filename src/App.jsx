import { useState } from "react";
import { questions } from "./data/questions";
import { calculateYear } from "./data/scoring";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    setAnswers([...answers, selectedOption]);
    setStep(step + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  if (step >= questions.length) {
    const year = calculateYear(answers);
    return <ResultCard year={year} onRestart={restart} />;
  }

  return <QuestionCard question={questions[step]} onSelect={handleAnswer} />;
}

export default App;