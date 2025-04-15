import { songsByYear } from "../data/songsByYear";
import { emojisByYear } from "../data/emojisByYear";

export function getResultDetails(year) {
  const emoji = emojisByYear[year] || "📅";
  const song = songsByYear[year];

  let summary = "You're in the future!";
  if (year < 2001) summary = "You're living in the Waterfall '90s.";
  else if (year < 2010) summary = "Scrum is in full swing.";
  else if (year < 2017) summary = "DevOps and CI/CD are emerging.";
  else if (year < 2022) summary = "You're leaning into product thinking.";
  else summary = "Welcome to the AI-assisted, post-Agile era.";

  return {
    emoji,
    summary,
    song,
    shareText: `${emoji} My team’s methodology is from ${year} — ${summary} ${
      song ? `The #1 song that year was “${song.song}” by ${song.artist}.` : ""
    } 👉 https://what-year-app.vercel.app`
  };
}