let massiv = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

  for (let i = 0; i < massiv.length; i++) {
    console.log(massiv[i]);
}
  let sum = 0;
  for (let вложенныйМассив of massiv) {
    for (let element of вложенныйМассив) {
      sum += element;
    }
}
  console.log("Сумма всех элементов массива: " + sum);
  for (let вложенныйМассив of massiv) {
    console.log("Количество элементов во вложенном массиве: " + вложенныйМассив.length);
}
