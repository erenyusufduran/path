function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) continue;
    const temp = grades[i] % 5;
    if (temp >= 3) {
      grades[i] += 5 - temp;
    }
  }
  return grades;
}
