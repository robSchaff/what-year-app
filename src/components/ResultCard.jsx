export default function ResultCard({ year, onRestart }) {
  let summary = "You're in the future!";
  if (year < 2001) summary = "You're living in the Waterfall '90s.";
  else if (year < 2010) summary = "Scrum is in full swing.";
  else if (year < 2017) summary = "DevOps and CI/CD are emerging.";
  else if (year < 2022) summary = "You're leaning into product thinking.";
  else summary = "Welcome to the AI-assisted, post-Agile era.";

  return (
    <div>
      <h2>Your methodology is from {year}</h2>
      <p>{summary}</p>
      <button onClick={onRestart}>Take it again</button>
    </div>
  );
}