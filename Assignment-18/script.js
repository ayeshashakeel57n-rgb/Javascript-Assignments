// chapter 1

alert("Welcome to Javascript !");

var username = prompt("Enter your username:");

alert("Your username is: " + username);

var favouritecolour = prompt("Enter your favourite colour:");

alert("Your favourite colour is: " + favouritecolour);

// chapter 2 

var firstName = "Ayesha";
var lastName = "Shakeel";

alert(firstName + " " + lastName);


var city = "Karachi";

alert("I live in " + city);


var hobby = "Sketching";

alert("My hobby is " + hobby);


// chapter 3 

var x = 5;
var y = 25;
var z = x+y;
alert(z);


var marks = 75;

if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
}


var age = 20;

if (age > 18) {
    alert("You are above 18");
}


// chapter 4

var userName = "Ayesha";
var total1Marks = 450;
var $Passed = true;

alert("Name: " + userName + "\nTotal Marks: " + total1Marks + "\nPassed: " + $Passed);


var illegal1 = "1name";       
var illegal2 = "full name";  
var illegal3 = "var";   

alert(
  "Illegal Variables:\n" +
  illegal1 + "\n" +
  illegal2 + "\n" +
  illegal3
);


var vars = ["userName", "totalMarks", "iPassword"];

alert(vars[0] + "\n" + vars[1] + "\n" + vars[2]);


// chapter 5

var num1 = 10;
var num2 = 4;

var sum = num1 + num2;
var diff = num1 - num2;

alert("Number 1: " + num1 + "\nNumber 2: " + num2 + "\nSum: " + sum + "\nDifference: " + diff);

var a = 20;
var b = 6;

var product = a * b;
var quotient = a / b;
var remainder = a % b;

alert("Product: " + product + "\nQuotient: " + quotient + "\nRemainder: " + remainder);

var number = 7;

number++;

alert("After increment: " + number);


// chapter 6

var num = 10;

var inc = num + 1;
var dec = num - 1;

alert("Original number: " + num + "\nAfter increment (++): " + inc + "\nAfter decrement (--): " + dec);


var number = 20;

number += 10;
alert("After += number is: " + number);

number -= 5;
alert("After -= number is: " + number);


var number = 10;

number *= 5;
alert("After *= number is: " + number);

number /= 2;
alert("After /= number is: " + number);


// chapter 7

var a = 10;
var b = 5;
var c = 2;

var result = (a + b) * c;

alert("The result is: " + result);

var a = 10;
var b = 5;
var c = 2;

var result = a + b * c - 3;

alert("The final result is: " + result);


var a = 10;
var b = 5;
var c = 2;
var d = 4;

var result = ((a + b) * c) - d;

alert("The result is: " + result);


// chapter 8


var firstName = "Shakeel Ahmed";
var lastName = "Khan";

var fullName = firstName + " " + lastName;

alert("Full Name: " + fullName);


var city = "Karachi";

var message = "Hello! Welcome to " + city;

alert(message);


var greeting = "Hello";
var name = "Ayesha";
var message = "Welcome to JavaScript!";

var finalMessage = greeting + ", " + name + ". " + message;

alert(finalMessage);


// chapter 9


var favoriteColor = prompt("Enter your favorite color:");

alert("Your favorite color is " + favoriteColor);


var age = prompt("Enter your age:");

alert("Your age is " + age);


var favoriteFruit = prompt("Enter your favorite fruit:");

alert("Your favorite fruit is " + favoriteFruit);


// chapter 10


var number = 15;

if (number > 10) {
  alert("Number is greater than 10");
}


var marks = 65;

if (marks >= 50) {
  alert("Pass");
}


var age = 16;

if (age < 18) {
  alert("Minor");
}


// chapter 11


var num1 = 10;   
var num2 = 5;

if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
} else {
    alert(num1 + " is NOT greater than " + num2);
}


var num1 = 20;  
var num2 = 20;

if (num1 == num2) {
    alert("Numbers are equal");
} else {
    alert("Numbers are not equal");
}


var num1 = 8;  
var num2 = 10; 

if (num1 <= num2) {
    alert(num1 + " is less than or equal to " + num2);
} else {
    alert(num1 + " is greater than " + num2);
}


// chapter 12


var marks = 85;

if (marks >= 90) {
    alert("A");
} else if (marks >= 70) {
    alert("B");
} else {
    alert("C");
}


var age = 15;  

if (age < 12) {
    alert("Child");
} else if (age < 18) {
    alert("Teen");
} else {
    alert("Adult");
}


var temp = 25;

if (temp >= 30) {
    alert("Hot");
} else if (temp >= 20) {
    alert("Warm");
} else {
    alert("Cold");
}


// chapter 13

var num = 6;

if (num > 0 && num % 2 === 0) {
    alert("The number is positive and even");
}


var marks = 80;

if (marks >= 50 && marks <= 100) {
    alert("Valid Marks");
}


var num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    alert("The number is divisible by both 3 and 5");
}



// chapter 14


var age = 20;
var hasID = true;

if (age >= 18) {
    if (hasID) {
        alert("Allowed");
    } else {
        alert("Not Allowed");
    }
} 


var num = 8;

if (num > 0) {
    if (num % 2 === 0) {
        alert("Number is positive and even");
    } else {
        alert("Number is positive but not even");
    }
}


var marks = 55;
var extraCredit = true;

if (marks >= 50) {
    if (extraCredit) {
        alert("Passed with extra credit");
    } else {
        alert("Passed without extra credit");
    }
} 


// chapter 15


var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Grapes"];

alert(fruits);


var numbers = [10, 20, 30, 40, 50];

alert("First element: " + numbers[0]);

alert("Last element: " + numbers[4]);


var colors = ["Red" , "Green" , "Blue" , "Yellow" , "Purple"];

alert(colors);


// chapter 16


var fruits = ["Apple", "Banana", "Mango", "Orange" , "Grapes"];
fruits.push("Pineapple");

alert(fruits);


var fruits = ["Apple", "Banana", "Mango", "Orange" , "Grapes"];
fruits.pop(); 

alert(fruits);


var fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.unshift("Grapes");

fruits.shift();

alert(fruits);


// chapter 17


var fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 0, "Grapes");

alert(fruits);


var fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(2, 1);

alert(fruits);


var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

var selectedFruits = fruits.slice(1, 4);

alert(selectedFruits);



// chapter 18

for (var i = 1; i <= 5; i++) {
    alert(i);
}


var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (var i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}


for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}


// chapter 19


var numbers = [3, 7, 5, -2, 8, 10];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break;
    }
    alert(numbers[i]);
}


var numbers = [1, 3, 5, 8, 7];
var flag = false;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        flag = true;
        break;
    }
}

alert(flag);


var numbers = [10, 25, 40, 55, 30];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        break;
    }
    alert(numbers[i]);
}


// chapter 20


for (var i = 1; i <= 3; i++) {    
for (var j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i * j));
    }
}


var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        alert(matrix[i][j]);
    }
}


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        var sum = arr1[i] + arr2[j];
        alert(arr1[i] + " + " + arr2[j] + " = " + sum);
    }
}



// chapter 21


var text = "hello developers";

alert(text.toUpperCase());


var message = "HELLO DEVELOPERS";  

alert(message.toLowerCase());


var text = "hello developers";

var firstLetterCap = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

alert(firstLetterCap);


// chapter 22


var text = "Hello World";

alert(text.length);


var text = "Jawan Pakistan";

var firstThree = text.slice(0, 3);

alert(firstThree);


var text = "Jawan Pakistan";

var lastThree = text.slice(-3);

alert(lastThree);


// chapter 23


var text = "I love JavaScript programming";
var word = "JavaScript";                     

var position = text.indexOf(word);

alert(position);


var text = "Hello World";
var letter = "d";           

var lastIndex = text.lastIndexOf(letter);

alert(lastIndex);


var text = "JavaScript is fun to learn";   
var sub = "fun";     

var show = text.includes(sub);

alert(show);


// chapter 24


var text = "Ayesha";  

var charAt2 = text.charAt(2);

alert(charAt2);


var text = "Ayesha";

var lastChar = text.charAt(text.length -1);

alert(lastChar);


var text = "Ayesha";

var middleIndex = Math.floor(text.length / 2);
var middleChar = text.charAt(middleIndex);

alert(middleChar);



// chapter 25


var text = "I love JavaScript";
var newText = text.replace("JavaScript", "Python");

alert(newText);


var text = "Hello World"; 
var newText = text.replace(/l/g, "x"); 

alert(newText);


var text = "I love JavaScript and JavaScript is fun";
var newText = text.replace("JavaScript", "Python");

alert(newText);






















































