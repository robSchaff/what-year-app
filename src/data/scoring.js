export function calculateYear(answers) {
  const total = answers.reduce((sum, answer) => sum + answer.year, 0);
  return Math.round(total / answers.length);
}