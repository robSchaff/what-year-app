export default function QuestionCard({ question, onSelect }) {
  return (
    <div>
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          style={{ display: "block", margin: "10px 0" }}
          onClick={() => onSelect(option)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}