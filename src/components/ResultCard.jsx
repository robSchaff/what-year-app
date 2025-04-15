import { useState } from "react";
import { songsByYear } from "../data/songsByYear";
import { emojisByYear } from "../data/emojisByYear";
export default function ResultCard({ year, onRestart }) {
  const song = songsByYear[year];
  const emoji = emojisByYear[year] || "📅";

  const [copied, setCopied] = useState(false);

  const shareText = `${emoji} My team’s methodology is from ${year} — ${getEra(year)}. ${
    song ? `The #1 song that year was “${song.song}” by ${song.artist}.` : ""
  } 👉 https://what-year-app.vercel.app`;

  function getEra(year) {
    if (year < 2001) return "the Waterfall Era";
    if (year < 2010) return "the Scrum Era";
    if (year < 2017) return "the DevOps Era";
    if (year < 2022) return "the Product Thinking Era";
    return "the AI-enhanced Agile Era";
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{emoji}</h2>
      <h3>Your methodology is from {year}</h3>
      <p>{getEra(year)}</p>
      {song && (
        <p>
          🎵 The #1 song that year was <strong>"{song.song}"</strong> by{" "}
          <strong>{song.artist}</strong>.
        </p>
      )}

      {/* 🚀 Share Buttons */}
      <div style={{ marginTop: "2rem" }}>
        <p><strong>Share your result:</strong></p>
        <button
          onClick={copyToClipboard}
          style={{
            marginRight: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
        📋 {copied ? "Copied!" : "Copy to Clipboard"}
        {copied && <span style={{ color: "green" }}>✔️</span>}
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noreferrer"
        >
          🐦 Tweet This
        </a>
      </div>

      <button onClick={onRestart} style={{ marginTop: "2rem" }}>
        🔁 Take it again
      </button>
    </div>
  );
}