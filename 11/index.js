let allSelected = document.getElementsByTagName("p");
// let lastSelected = (allSelected[2].style.color = "red");
let lastSelected = allSelected[2].setAttribute("style", "color:red;");
console.log(lastSelected);

// =======================================

let nodeFooter = document.getElementById("footer");
let nodeMain = document.getElementById("main");
nodeMain.after(nodeFooter);

// =======================================

let lightOn = document.getElementsByClassName("light");
let currentLightIndex = 0;
lightOn[currentLightIndex].classList.toggle("light-on");

setInterval(() => {
  lightOn[currentLightIndex].classList.toggle("light-on");
  currentLightIndex += 1;
  if (currentLightIndex >= lightOn.length) {
    currentLightIndex = 0;
  }
  lightOn[currentLightIndex].classList.toggle("light-on");
}, 3000);

// =======================================

array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let tableBase = document.getElementById("table");

for (let i = 0; i < array.length; i++) {
  //   let tableRow = tableBase.insertRow(i);
  let tableRow = document.createElement("tr");
  tableBase.appendChild(tableRow);
  //   tableRow.innerHTML = i;
  //   console.log(array[i]);
  for (j = 0; j < array[i].length; j++) {
    let tableCell = document.createElement("td");
    tableRow.appendChild(tableCell);
    // let tableCell = tableRow.insertCell(j);
    tableCell.innerHTML = [array[i][j]];
    console.log(array[i][j]);
  }
}
