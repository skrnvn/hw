const profession = {
  developer: 'Sineor',
  velder: 'Sineor'
};

const record = {
  name: 'Ihor',
  sName: 'Filippenko',
  age: 31,
  profession // profession: profession
};

console.log(`${record.profession.velder} ${record.sName}`);

const keyName = 'name';
console.log(record[keyName], record.name);

console.log(Object.keys(record));

// ===========
record.phone = undefined;
console.log('phone' in record, 'name' in record); // true true

delete record.phone;
console.log('phone' in record, 'name' in record); // false true


// const record = {
//   name: 'Ihor',
//   sName: 'Filippenko',
//   age: 31,
//   profession // profession: profession
// };

for (let key in record) {
  if (key === 'age') {
    record[key] += 1;
  }
  console.log(key, record[key]);
}

// ===========

let colors = {
  '1': 'red',
  7: 'violet',
  5: 'blue',
  4.2: 'black',
  '03': 'yellow',
  '4.0': 'green',
  '2': 'orange',
  '6': 'indigo',
};

for (let code in colors) {
  console.log(code);
}

// ==========

console.log({} === {}); // false

let obj1 = { name: 'John' };
let obj2 = obj1;
console.log(obj1 === obj2); // true

obj2.name = 'Sophia';
console.log(obj1.name); // 'Sophia’

// ===========

console.log('=============================');

let book1 = { name: "Cinderella" };
let book2 = Object.assign({}, book1);

book2.name = "Snow White";
console.log(book1, book2);

//{name: "Snow White"}

let info = {
  author: "Grimm",
};

let bookInfo = { ...book2, ...info };
console.log(bookInfo);

// ===========

console.log('=============================');

const string = JSON.stringify(bookInfo); 
console.log(string);

const parsed = JSON.parse('{"firstName": "John", "last name": "Doe", "age": 20}');
console.log(parsed);

// ===========

console.log('=============================');

const myArray = ['one', 'one', 'two', 'three'];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray.length)

// ===========

console.log('============ FOOD =================');

let food = ['potato', 'tomato', 'banana'];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// for (let key of food) {
//   console.log(key);
// }

console.log(food)
food.reverse();
console.log('is apple here?', food.includes('apple'));

food.push('apple');
console.log(food);
console.log('is apple here?', food.includes('apple'));

food.forEach(function (element, index) {
  food[index] = element + ' food'
  console.log(element)
})

console.log(food)
//=====

let numArray = [0, 0, 1, 2, 3, 4, 5];

numArray = numArray.map(function (val, index) {
  return `val + index = ${val + index}`;
});

console.log(numArray)





