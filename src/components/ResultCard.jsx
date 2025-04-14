import { songsByYear } from "../data/songsByYear";
import { emojisByYear } from "../data/emojisByYear";

export default function ResultCard({ year, onRestart }) {
  let summary = "You're in the future!";
  if (year < 2001) summary = "You're living in the Waterfall '90s.";
  else if (year < 2010) summary = "Scrum is in full swing.";
  else if (year < 2017) summary = "DevOps and CI/CD are emerging.";
  else if (year < 2022) summary = "You're leaning into product thinking.";
  else summary = "Welcome to the AI-assisted, post-Agile era.";
  const emoji = emojisByYear[year] || "📅"; // fallback if no match

  const song = songsByYear[year];

  return (
    <div>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{emoji}</h2>
      <h2>Your team is living in {year}</h2>
            <p>{summary}</p>
      {song && (
        <p>
          🎵 The #1 song that year was <strong>"{song.song}"</strong> by{" "}
          <strong>{song.artist}</strong>.
        </p>
      )}
      <button onClick={onRestart}>Take it again</button>
    </div>
  );
}