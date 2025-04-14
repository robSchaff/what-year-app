export default function QuestionCard({ question, onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "220px",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>{question.text}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          style={{ margin: "6px 0", width: "100%", maxWidth: "400px" }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}