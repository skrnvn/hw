var globalValue = 'global';

console.log('plain code => ', globalValue);

function someFunction() {
  var globalValue = '10';
  console.log('from funcion => ', globalValue);
  globalValue += ' some text';
  // (function innerFunction() {
  //   console.log('from inner funcion => ', globalValue);
  // })();

  function innerFunction() {
    console.log('from inner funcion => ', globalValue);
  }
  innerFunction();
}

someFunction();

console.log('From plain code => ', globalValue);

//========================================

let variable = 'local';

console.log('plain code => ', variable);

function myFunction() {
  let variable = 'inner';
  let innerVariable = 'inner var';
  console.log('from function => ', variable, innerVariable);
}

myFunction();

console.log('plain code => ', variable);

const arrowFunction = () => {
  console.log(variable)
}

arrowFunction();

//==================================

// let obj = {text: 'My context'}
// this.text = 'My text'

// let myObjet = {
// 	name: 'name',
//   func: function () {
//   	console.log(this, this.name)
//   }
// }

// function myFunction() {
// 	console.log(this.text)
// }

// myFunction();
// myFunction.call(obj);
// myObjet.func();

// const myFunctionBinded = myFunction.bind(obj);
// myFunctionBinded();

//==================================


var obj1 = {
  hello: function() {
    console.log('Hello world');
    return this;
  },
  obj2: {
      breed: 'dog',
      speak: function(){
            console.log(this.breed, 'woof!');
            return this;
        }
    }
};
 
console.log(obj1);
console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
console.log(obj1.obj2);
console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2


//=================================

const record = {
  name: 'name',
  phone: '+380730000000',
  getAllData: function () {
    return {name: this.name, phone: this.phone}
  }
};

console.log(record.getAllData());

