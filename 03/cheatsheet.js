let month = 'September';

if (month === 'September') {
  console.log('It’s time to learn!');
} else {
  console.log('Continue chilling');
}

const flag = true;

if (flag) {
  console.log('Flag set');
}

const x = 1;

if (x > 3) {
  console.log('x > 3');
} else if (x < 2) {
  console.log('x < 2');
} else {
	console.log('Other condition');
}

let color = 'yellow';

switch (color) {
  case 'red': 
    console.log('Stay here!');
    break;
  case 'yellow':
    console.log('Wait for it');
    break;
  default: 
    console.log('Now, you go');
    break;
}

let mark = 0;

while(mark <= 5) {
  console.log(`Mark: ${mark}`);
  mark++;
}

mark = 0;

do {
  console.log(`Mark: ${mark}`);
  mark++;
} while (mark < 5);


for (let i = 0; i < 10; i++) {
  console.log(i)
}


console.log(!Date.myCustom)
 
Date.myCustom = function myCustom () {
  const today = new Date();
  return today.getUTCDate();
}
 
console.log(Date.myCustom())
