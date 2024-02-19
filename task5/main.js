// Вариант 2
const films = [
{
    название: "Бригада",
    годВыпуска: 2002,
    режиссер: "Алексей Сидоров",
    жанр: ["криминал", "драма"],
    актеры: ["Сергей Безруков", "Дмитрий Дюжев", "Павел Майков"],
    описание: "История четырех друзей, которые после службы в армии решают заняться криминалом.",
    постер: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Brigada_poster.jpg/220px-Brigada_poster.jpg"
},
{
    название: "Иван Васильевич меняет профессию",
    годВыпуска: 1973,
    режиссер: "Леонид Гайдай",
    жанр: ["комедия"],
    актеры: ["Юрий Яковлев", "Александр Демьяненко", "Леонид Куравлев"],
    описание: "Комедия о советском инженере, который случайно создает машину времени.",
    постер: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Ivan_Vasilievich_poster.jpg/220px-Ivan_Vasilievich_poster.jpg"
},
{
    название: "Матрица",
    годВыпуска: 1999,
    режиссеры: "Вачовски",
    жанр: ["фантастика", "боевик"],
    актеры: ["Киану Ривз", "Лоуренс Фишберн", "Кэрри-Энн Мосс"],   
 }
];

for (const film of films) {
    console.log("-----");
    console.log(`Название: ${film.название}`);
    console.log(`Год выпуска: ${film.годВыпуска}`);
    console.log(`Режиссер: ${film.режиссер}`);
    console.log(`Жанр: ${film.жанр.join(", ")}`);
  
    const genres = film.жанр;
  
if (genres.includes("комедия")) {
    console.log("Этот фильм - комедия!");
} else if (genres.includes("драма")) {
    console.log("Этот фильм - драма!");
} else if (genres.includes("фантастика")) {
    console.log("Этот фильм - фантастика!");
} else {
    console.log("Жанр фильма: " + genres.join(", "));
}
  
console.log("-----");
}