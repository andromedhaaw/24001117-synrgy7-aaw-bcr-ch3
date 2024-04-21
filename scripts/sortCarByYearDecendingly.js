function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length-1; i++) {
    for (let j = 0; j < result.length-1; j++) {
      const a = result[j];
      const b = result[j + 1];
      if (a.year < b.year) {
        result[j] = b;
        result[j + 1] = a;
      }
      console.log(result);
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
