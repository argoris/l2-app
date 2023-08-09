// function f1() {
//     const a = 2;
// }
// function f2() {
//     let a = 2;
//     a = 3;
// }

// function f1(a, b) {
//   return a + b
// }

// const f2 = (a, b) => a + b;
// console.log(
//     f1(1, 3),
//     f2(1, 3)
// );

// const persona = {
//     name: "Ivan",
//     age: 17,
//     sayHi: () => console.log(persona.name),
//     satAge ()  {
//         console.log(this.age)
//     }
// }

// persona.sayHi();
// persona.satAge();

export function f1 (a) {
    return a
}

export function f2(a, b) {
    return a + b
}

// class Personas {
//    #age; // * Приватне поле (#age так воно позначається)
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHello(){
//         console.log('sayHello ${this.name}');
        
//     }
// }

// class Stydent extends Personas{
//   constructor(name, age, grade){
//         super(name, age);
//         this.grade = grade;
//         console.log('sayHello ${this.grade}');
        
//   }
// }
// const test = new Personas('test', 18);
// const test2 = new Stydent( 'test2', 19);

// test.age();
// test.sayHello();

// * ... Spread operator (склеює багато елем разом)
// const arry1 = [1, 2, 3]
// const arry2 = [4, 5, 6]
// const arry3 = [...arry1, ...arry2, 123455667, {a: 2}]

// console.log(arry3);
// End

// * ... Rest operator
function suma(...numrs) {
  console.log(numrs);
}

suma (1, 2, 3, 4, 5, 5, 6, 7)
// END

// !START 
// * Деструктуризація (приклад)
const pers = {
    name: 'test',
    age: 123,
    adress:{
      numberAdress: 'Bogdan Khmelntsky7 Bud 777',
      zipCode: "dgjjjfxgxjfj"
    },
    sex: 'male'
}

const {name, age, sex = false, adress: {numberAdress}} = pers;

console.log(name + " " + age + " " + sex + " " + numberAdress);
// !END 


// !START
const arr1 = [
  {
    name: "Igor",
    age: 39,
  },
  {
    name: "Ivan",
    age: 17,
  },
  {
    name: "Ira",
    age: 21,
  },
];

// * MAP
// arr1.map((value) => {
//   console.log(value.name + value.age);
// })

// * FILTER
console.log(
  arr1.filter((value) => {
    return value.name === "Ivan"
  })
)

// Просто приклад
// arr1.map((value) => {
//   return(
//     <div>
//       <h1>{value.name}</h1>
//       <p>
//         lorem7\
//         {value.age}
//       </p>
//     </div>
//   )
// });
// !END

// !START
function sum (...nums) {
  return nums.reduce((previousValue, currentValue)=>previousValue + currentValue, 0)
}

console.log(sum(1, 2, 3));
console.log(sum(1, "2", 3));
// !END

// * ... Spread operator (склеює багато елем разом)
// const arr1 = [1, 2, 3,];
// const arr2 = [4, 5, 6,];
// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// * acc, cur ключові слова
// function sum (...nums){
//   return nums.reduce((acc, cur) => acc + cur, 10)
// }
// console.log(sum(1, 2, 3,));
// console.log(sum(4, 5, 6, 7));


// * ... Rest operator (склеює багато елем в один)
// const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
// console.log(a);
// console.log(b);
// console.log(rest);

// * Деструктуризація 
// const person = {name: 'John', age: 30,};
// const {name, age, country = 'USA'} = person;
// console.log(name, country);

// * Проміс
// const Promise = new Promise ((resolve, reject) => {
  // * виконуємо асинхронну операцію
  // * якщо операція успішна викликаємо resolve з результатом
  // * якщо сталася помилка, викликаємо reject з помилкою 
// });

// promice
  // .then(result => {
    // * обробка результату виконання операції
    // console.log(result);
  // })
  // .catch(error => {
    // * обробка помилки
    //  console.log(error);
  // });