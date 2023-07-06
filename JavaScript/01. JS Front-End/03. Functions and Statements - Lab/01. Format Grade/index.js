// < 3.00 - "Fail"
//  >= 3.00 and < 3.50 - "Poor"
//  >= 3.50 and < 4.50 - "Good"
//  >= 4.50 and < 5.50 - "Very good"
//  >= 5.50 - "Excellent"
function solve(readGradeFromConsole) {
  const gradeInfo = {
    grades: [
      { minGrade: 2.0, maxGrade: 2.99, status: "Fail" },
      { minGrade: 3.0, maxGrade: 3.49, status: "Poor" },
      { minGrade: 3.5, maxGrade: 4.49, status: "Good" },
      { minGrade: 4.5, maxGrade: 5.49, status: "Very good" },
      { minGrade: 5.5, maxGrade: 6.0, status: "Excellent" },
    ],
  };
  let student = ``;
  for (const grade of gradeInfo.grades) {
    if (
      readGradeFromConsole >= grade.minGrade &&
      readGradeFromConsole <= grade.maxGrade
    ) {
      student = grade;
    }
  }
  console.log(
    readGradeFromConsole < 3
      ? `${student.status} (2)`
      : `${student.status} (${readGradeFromConsole.toFixed(2)})`
  );
}
