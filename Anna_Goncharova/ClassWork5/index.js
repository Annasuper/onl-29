'use strict'

//////////////// ClassWork 5//////////////////////


let UserInput = prompt('Кто там?', '');

if ( UserInput === 'Админ'){
    let userPass = prompt('Введите пароль','');

    if (userPass === 'Я главный'){
        alert('Добро пожаловать!');
    } else if (userPass === '' || userPass === null){
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
}  else if ( UserInput === '' || UserInput === null){
    alert('Отменено');
} else {
    alert('Я тебя не знаю!')
}

let user = {

}
 
///////////////// ClassWork 21///////////////////////////


// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.


function str (string) {
    const  VOWELS = ['a', 'e', 'i', 'o', 'u']
    
    return string.split('').filter(char => !VOWELS.includes(char.toLowerCase())).join('')
} 


// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте Рэп и Регги в начало массива.

let styles = ['Джаз','Блюз'];
console.log (styles)

styles.push('Рок-н-ролл')
console.log (styles)

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log (styles)

styles.shift();
console.log (styles);

styles.unshift ('Рэп','Регги');
console.log (styles);


// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput(){
    let numbers = [];

while (true){
    let value = prompt('Input number','');

    if(value === '' || value === null || !isFinite(value)) break;

    numbers.push(+value);
}

let sum = 0;

for (let number of numbers){
    sum +=number;
}

 return sum;
}

console.log(sumInput());

///////////////////////////////////////////////

function descendingOrder(n){
    let result = "" + n;
     result.split('');

    return result;//...
  };

  descendingOrder(123456789);