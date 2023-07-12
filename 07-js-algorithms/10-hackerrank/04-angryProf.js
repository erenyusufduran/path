function angryProfessor(k, a) {
  a.forEach((st) => {
    if (st <= 0) {
      k--;
    }
  });
  return k > 0 ? "YES" : "NO";
}
