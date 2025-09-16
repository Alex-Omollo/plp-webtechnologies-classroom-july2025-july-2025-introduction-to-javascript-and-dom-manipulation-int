// Variable declarations
let userName = "Peter";
let userAge = 25;

// Conditional Example
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.")
}

// Function 1: check if user is an adult
function checkAge(age) {
    if (age >= 18) {
        return "You are an adult!";
    } else {
        return "You are underage!";
    }
}

// Function 2: Greet user
function greet(name) {
  return "Hello, " + name + "! Welcome!";
}

function list() {
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }
  return numbers;
}

// Loop Example 2: While loop
function countdown(start) {
  let result = "";
  let i = start;
  while (i > 0) {
    result += i + " ";
    i--;
  }
  return result;
}

// Part 3: Loops
const resultParagraph = document.getElementById("result");
const numberList = document.getElementById("numberList");

// 1. Button click → check age
document.getElementById("checkAge").addEventListener("click", function() {
  resultParagraph.textContent = checkAge(userAge);
});

// 2. Button click → greet user
document.getElementById("greet").addEventListener("click", function() {
  resultParagraph.textContent = greet(userName);
});

// 3. Button click → show numbers list
document.getElementById("list").addEventListener("click", function() {
  numberList.innerHTML = ""; // clear previous list
  let nums = list().trim().split(" ");
  nums.forEach(function(num) {
    let li = document.createElement("li");
    li.textContent = num;
    numberList.appendChild(li);
  });
});