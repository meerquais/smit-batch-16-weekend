/**
 * @param {Array<{ points?: number, correctIndex: number }>} questions
 * @param {number[]} answers indices chosen per question
 * @returns {{ percent: number, earned: number, total: number, passed: boolean, passingScore?: number }}
 */
export function gradeQuizAttempt(questions, answers, passingScore = 60) {
  let earned = 0
  let total = 0
  questions.forEach((q, i) => {
    const pts = Number(q.points) > 0 ? Number(q.points) : 1
    total += pts
    if (Number(answers[i]) === Number(q.correctIndex)) {
      earned += pts
    }
  })
  const percent = total > 0 ? Math.round((earned / total) * 100) : 0
  return {
    percent,
    earned,
    total,
    passed: percent >= passingScore,
    passingScore,
  }
}
