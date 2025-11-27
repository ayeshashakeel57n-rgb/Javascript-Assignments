// Question 1

var multidimensional = [ [] , [] , []]
console.log(multidimensional);


// Question 2

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
]
console.log(matrix);

// Question 3

for (let i = 1; i<=10; i++) {
    console.log(i);
    
}

// Question 4

let num = +prompt ("Enter a number to show its multiplication table");
let length = +prompt ("Enter length multiplication table");

for (let i = 1; i<=15; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
    document.write(`${num} x ${i} = ${num * i} <br>`)
}

// Question 5

let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
    
}

// Question 6

document.write("Counting <br>")

for (let i = 1; i<=15; i++) {
    document.write(i + "<br>");
    
}

document.write(" Reverse Counting <br>")


for (let i = 10; i<=10; i--) {
    document.write(i + "<br>");
    
}

document.write("Even <br>")

let Evennum = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

for (let i = 0; i<Evennum.length; i++) {
    document.write(i + "<br>")
}


document.write("Odd <br>")

let Oddnum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

for (let i = 0; i<Oddnum.length; i++) {
    document.write(i + "<br>")
}


document.write("Series <br>")

for (let i = 2; i<=20; i+=2) {
    document.write(i + "K + <br>")

}


// Question 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

  var userInput = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?");

  var item = userInput.toLowerCase();

  var index = A.indexOf(item);

  if (index === -1) {
    document.write(item + " is <b>available</b> at index " + index + " in our bakery.");
  } else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery.");
  }


//   Question 8

  var A = [24, 53, 78, 91, 12];

  for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
      largest = A[i];
    }
  }

  document.write("Array items: " + A.join(", ") + "<br>");
  document.write("The largest number is " + largest);

//   Question 9

 var A = [24, 53, 78, 91, 12];

  for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
      smallest = A[i];
    }
  }

  document.write("Array items: " + A.join(", ") + "<br>");
  document.write("The smallest number is " + smallest);

//   Question 10

for (let i = 5; i<=100; i+=5) {
    console.log(i)
    document.write(i + (", "))
}








