// Напишите сприпт, который для объекта user, последовательно:
// 1 добавит поле mode со значением 'happy'
// 2 заменит hobby на 'skydiving'
// 3 заменит значение premius на 'false'
// 4 віводит содержимое объекта users в формате
// ключ: значение используя Object.keys() и for...of


// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
// };

//  user.mode = 'happy';
//  user.hobby = 'skydiving';
//  user.premium = 'false';

// const array = Object.keys(user)
//  for (const key of array){
//     console.log(`${key}:${user[key]}`)
//  }


// У нас есть объект в котором хранятся зарплаты нашей команды. 
// напишите код для суммирования всех зарплат и сохраните его результат в переменной sum.
// если объект salaries пуст, то результат должен быть 0.

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
}