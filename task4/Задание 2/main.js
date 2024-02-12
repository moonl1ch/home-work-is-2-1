let users = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 30 },
    { name: 'Алексей', age: 28 }
];
users.forEach(user => {
    console.log(user.name)
    console.log(user.age);
});
users.forEach(user => {
    user.age += 1;
    console.log("Измененные значения:")
    console.log(user.name)
    console.log(user.age);
});
