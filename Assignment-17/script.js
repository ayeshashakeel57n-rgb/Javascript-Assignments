// Question 1
    
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName + " Welcome");


// Question 2

var phone = prompt("Enter your favourite mobile phone model:");
document.write("My favourite phone is : " + phone + "<br>");
document.write("length of string : " + phone.length + "<br>");

// Question 3

var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("index of 'n' : " + index + "<br>");

// Question 4

var word = "Hello World";
var index = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("last Index of 'l' : " + index + "<br>");

// Question 5

var word = "Pakistani";
var char = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3 : " + char + "<br>");

// Question 6

var firstName = prompt("Enter your first name :");
var lastName = prompt("Enter your last name :");

var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName + "!");

// Question 7

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("City : " + city + "<br>");
document.write("After replacement : " + newCity + "<br>");

// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replaceAll("and", "&");

document.write("Message: " + message + "<br>");
document.write("After replacement: " + updatedMessage + "<br>");

// Question 9

var str = "472";
var num = Number(str);

document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br><br>");

document.write("Value: " + num + "<br>");
document.write("Type: "+ typeof num + "<br>");

// Question 10

var userInput = prompt("Enter any word:");
var upperCase = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase + "<br>");

// Question 11

var userInput = prompt("Enter any word:");

var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCase + "<br>");

// Quesion 12

var num = 35.36;
var str = num.toString();

var result = str.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + result + "<br>");

// Question 13

var username = prompt("Enter your username");

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);

    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        alert("Please enter a valid username");
    break;
  }
}

// Question 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

  var userInput = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?");

  var item = userInput.toLowerCase();

  var index = A.indexOf(item);

  if (index === 2) {
    document.write(item + " is <b>available</b> at index " + index + " in our bakery." + "<br>");
  } else {
    document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery." + "<br>");
  }

//   Question 15


var password = prompt("Enter password");
if (password.length < 6) {
    alert("Password must be at least 6 characters long\nPlease enter a valid password");
}

else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password can not begin with a number\nPlease enter a valid password");
}

else {
    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var code = password.charCodeAt(i);

        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }

        if (code >= 65 && code <= 90) {
            hasLetter = true;
        }

        if (code >= 97 && code <= 122) {
            hasLetter = true;
        }
    }

    if (!hasLetter || !hasNumber) {
        alert("Password should contain both alphabets and numbers\nPlease enter a valid password");
    } 
    else {
        alert("Password accepted!");
   }
}


// Question 16

var university = "University of Karachi";

var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

// Question 17

var userInput = prompt("Enter any word");

var lastChar = userInput.charAt(userInput.length - 1);

document.write("User input: " + userInput + "<br>");
document.write("Last character of input is: " + lastChar + "<br>");


// Question 18

var text = "The quick brown fox jumps over the lazy dog";

var lowerText = text.toLowerCase();

var words = lowerText.split(" ");

var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");








