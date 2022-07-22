// let speak = function(){
//     console.log('good day');
// }
// speak()

// // let name = prompt('What is your name');
// // let weight = prompt('What do you weigh in KG');
// // let height = prompt('What is your height in (m)');

// // let BmiCalc = function () {
// //     return Math.floor(weight / Math.pow(height, 2));
// // }

// // alert(`${name} your BMI is ${BmiCalc()}`);
// // let age = prompt( 'What is your age?' )

// // if (age < 21 ) {
// //     alert( 'You cannote vote')
// // } else if( age > 16 && age < 20) {
// //     alert( 'You can vote')
// // } else{
// //     alert('You are not eligible to drive')
// // }

// let colors = ['blue', 'red', 'yellow', 'black', 'null', '01',]
// console.log(colors);

// console.log(colors[2]);
// console.log(colors.length);

// colors.push("Violet")

// console.log(colors);

// let removedColor = colors.push('indigo');
// console.log(colors);

// let cars = ['toyota', 'bmw','bentley','benz','golf','mitsubishi','rangerover'];

// let tenants = ['Segun','Oyin', 'Abiodun', true, 'Junior']

// console.log(tenants);
// tenants.push('Sege')
// console.log(tenants);
// tenants.unshift('Lege')
// console.log(tenants);
// tenants.pop()
// console.log(tenants);
// tenants.shift()
// console.log(tenants);

// tenantsCopy = tenants.slice()
// console.log(tenantsCopy);

// // let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
// // console.log(tomato, mushroom, carrot);

// const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// console.log(tomato); // '🍅'
// console.log(mushroom); // '🍄'
// console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
// rest[2]
// console.log(rest[4]);

// let a = "🥦";
// let b = "🍅";
// [a, b] = [b, a];
// console.log(b);

// let carsTenant =[...cars, ...tenants];
// console.log(carsTenant);

// console.log(carsTenant.length);

// let merged = cars.concat(tenants, colors);
// console.log(merged);

// let joined = cars.join('--');
// console.log(joined);

// // cars.fill('Corolla');
// // console.log(cars);

// colors.fill('grey', 2, 6);
// console.log(colors);

// console.log(cars.includes("Corolla"));

// console.log(cars.indexOf('golf'));

// let love =['Love','Miss', 'Affection', 'Love'];
// console.log(love.indexOf('Love'));
// // console.log(love.reverse());

// console.log(cars.sort());

// console.log(love.at(-3));

// love.splice(2, 1, 'Hate')

// console.log(love);

// love.length = 0;
// console.log(love);

// console.log(document.getElementsByTagName('li'));

// // console.log(document.getElementsByTagName('li').forEach(() => {
// //     // Do something here..
// //    }));

// const collection = Array.from(document.getElementsByTagName('li'));

// console.log(collection);

// const newId = [2, false, 'test', {'name': 'Alex'}]
// console.log(newId);

// let students = [
//     {
//        'id': 001,
//        'f_name': 'Alex',
//        'l_name': 'B',
//        'gender': 'M',
//        'married': false,
//        'age': 22,
//        'paid': 250,
//        'courses': ['JavaScript', 'React']
//     },
//     {
//        'id': 002,
//        'f_name': 'Ibrahim',
//        'l_name': 'M',
//        'gender': 'M',
//        'married': true,
//        'age': 32,
//        'paid': 150,
//        'courses': ['JavaScript', 'PWA']
//     },
//     {
//        'id': 003,
//        'f_name': 'Rubi',
//        'l_name': 'S',
//        'gender': 'F',
//        'married': false,
//        'age': 27,
//        'paid': 350,
//        'courses': ['Blogging', 'React', 'UX']
//     },
//     {
//        'id': 004,
//        'f_name': 'Zack',
//        'l_name': 'F',
//        'gender': 'M',
//        'married': true,
//        'age': 36,
//        'paid': 250,
//        'courses': ['Git', 'React', 'Branding']
//     }
//  ];

// const femaleStudents = students.filter((element, index) => {
//     return element.gender === 'F';
//   })

//   console.log(femaleStudents);

// for(let i =0; i < 9; i++){
//    console.log(i);
// }

// //   for (let i =1; i < 10; i +=2){
// //    if( i === 7){
// //       break;
// //    }
// //   }

// // let carNam = prompt('What car do you drive?')
// // let carName = carNam.toLowerCase()

// // console.log(carName);
// // if (cars.includes(carName)) {
// //     alert(`Your ${carName} is in your garage`)
// // } else {
// //     alert(`The ${carName} is at the mechanic`)
// // }

// function fan(){
//    console.log('Turn on the fan');
// }
// fan()

// let shinobis = ['Naruto', 'Sasuke', 'Bisi', 'Adebayo', 'Sheyomall'];

// shinobis.forEach((index, ninja) => {
//    console.log(ninja, index)
// })

// console.log(Math.PI);

// console.log(Math.LN10);

// const area = 9.4;

// console.log(Math.round(area));

// console.log(Math.floor(area));

// console.log(Math.ceil(area));

// const random = Math.random();

// // console.log(Math.round(random * 10));

// let n = Math.random();

// n = n * 6;

// n = Math.ceil(n);

// console.log(n);

// const h1 = document.querySelector('h1')
// h1.style.backgroundColor = 'blue'
// h1.style.color = 'red'

// const li = document.querySelector('#main')
// li.style.color = 'crimson'
// const Person = ("Bayo", 31, "London");
// person.name = "Bayo";
// person.age = 31;
// person.location = "London";

// console.log(person.name);

class Traveler extends Person{
   constructor(name, age, homeLocation) {
      super(name, age);
      this.homeLocation = homeLocation
   }
hasLocation() {
   return !!this.homeLocation
}
getGreeting() {
   let greeting = super.getGreeting();
   if (this.hasLocation()) {
      greeting += `I am visiting from ${this.homeLocation}`
   }
     return greeting
   }
}
   const bayo = new Traveler('Bayo', 31, 'Peru');
   console.log(bayo.getGreeting());

   const other = new Traveler();
   console.log(other.getGreeting());

// class traveler extends Person{
//    constructor(name, age, homeLocation)
// }
