import { useState } from "react";
import { getResultDetails } from "../utils/getResultDetails";

export default function ResultCard({ year, onRestart }) {
  const { emoji, summary, song, shareText } = getResultDetails(year);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px auto",
    width: "fit-content"
  };

  return (
    <div style={{ textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{emoji}</h2>
    <h3>Your methodology is from {year}</h3>
    <p>{summary}</p>

    {song && (
      <p style={{ marginTop: "1rem" }}>
        🎵 The #1 song that year was <strong>"{song.song}"</strong> by{" "}
        <strong>{song.artist}</strong>.
      </p>
    )}

    {/* Share Section */}
    <div style={{ marginTop: "2rem" }}>
      <p><strong>Share your result:</strong></p>

      <div style={{ marginBottom: "0.5rem" }}>
        <button
          onClick={copyToClipboard}
          style={buttonStyle}
        >
          📋 {copied ? "Copied!" : "Copy to Clipboard"}
          {copied && <span style={{ color: "green" }}>✔️</span>}
        </button>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#007bff",
            textDecoration: "none"
          }}
        >
        🐦 Tweet This
        </a>
      </div>
    </div>

    <div style={{ textAlign: "center" }}>
    <button onClick={onRestart} style={buttonStyle}>
      🔁 Take it again
    </button>
    </div>
  </div>
);
}