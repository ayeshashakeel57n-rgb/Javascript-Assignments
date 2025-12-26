// question 1

function time() {
    var now = new Date();
    document.write("Current Date & Time: " + now);
}

// question 2

function user(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName + "! Welcome.");
}

user("Ayesha", "Shakeel");

// question 3

function numbers() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");

    var sum = num1 + num2;
    return sum;
}

var result = numbers();
alert("Sum of two numbers is: " + result);


// question 4


function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid Operator";
    }

    return result;
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operator (+, -, *, /):");

var answer = calculator(num1, num2, op);

document.getElementById("result").innerHTML =
    "Result: " + answer;


    // question 5


    function square(num) {
  return num * num;
}

var result = square(6);
alert("Square is: " + result);


// question 6


function factorial(num) {
    var result = 1;

    for (var i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

var number = 5;
document.write("Factorial of " + number + " is " + factorial(number));


// question 7

var startNum = +prompt("Enter start number");
var endNum = +prompt("Enter end number");

counting(startNum, endNum);


// question 8 


function calculate(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var hypotenuse2 = calculateSquare(base) + calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuse2);

    document.write("Hypotenuse is: " + hypotenuse);
}

calculate(3, 4);


// question 9


function calculateArea(width, height) {
    return width * height;
}

var area1 = calculateArea(5, 10);
document.write("Area (arguments as values): " + area1 + "<br>");

var w = 7;
var h = 4;
var area2 = calculateArea(w, h);
document.write("Area (arguments as variables): " + area2);


// question 10


function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");

    if (str === reversed) {
        document.write(str + " is a Palindrome");
    } else {
        document.write(str + " is NOT a Palindrome");
    }
}



// question 11


function titleCase(str) {
    var words = str.split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
        result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }

    return result.join(" ");
}

var text = "my name is ayesha";
alert(titleCase(text));


// question 12


function word(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

var text = "Jawan Pakistan";
alert(word(text));


// question 13


function countOccurrences(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

var text = "JSResourceS.com";
var letter = "o";
alert(countOccurrences(text, letter));



// question 14


function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is " + area);
}

calcCircumference(5);
calcArea(5);

