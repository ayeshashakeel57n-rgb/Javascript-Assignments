 var num1 = 3;
    var num2 = 5;

    document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + "<br><br>");
    document.write("Subtract of " + num2 + " and " + num1 + " is " + (num2 - num1) + "<br><br>");
    document.write("Multiplication of " + num2 + " and " + num1 + " is " + (num2 * num1) + "<br><br>");
    document.write("Division of " + num2 + " and " + num1 + " is " + (num2 / num1) + "<br><br>");
    document.write("Modulus of " + num2 + " and " + num1 + " is " + (num2 % num1) + "<br><br>");


    
    var num;

    document.write("Value after variable declaration is: " + num + "<br><br>");

    num = 5;

    document.write("Initial value: " + num + "<br><br>");

    num++;

    document.write("Value after increment is: " + num + "<br><br>");

    num = num + 7;

    document.write("Value after addition is: " + num + "<br><br>");

    num--;

    document.write("Value after decrement is: " + num + "<br><br>");

    var remainder = num % 3;

    document.write("The remainder is: " + remainder + "<br><br>");

    var ticketPrice = 600;
    var numberOftickets = 5;
    var totalCost = ticketPrice + numberOftickets;
    document.write("Total cost to buy " + numberOftickets + " tickets to a movie is " + (ticketPrice*numberOftickets) + "PKR" + "<br><br>")

    document.write("<h2>Table of 4</h2>" + "<br><br>")
    for (let i = 1; i <= 10; i++) 
      document.write("4 x " + i + " = " + (4 * i) + "<br><br>");

    var celsius = 25;                                  
  var cToF = (celsius * 9/5) + 32;

  document.write(celsius + "°C is " + cToF + "°F<br><br>");

  var fahrenheit = 70;
  var fToC = (fahrenheit - 32) * 5/9;

  document.write(fahrenheit + "°F is " + fToC.toFixed(2) + "°C");

  var celsius = 25;


  var fahrenheit = (celsius * 9/5) + 32;

  document.write(celsius + "°C is " + fahrenheit + "°F<br><br>");

  document.write("<h2>Shopping Cart</h2>");

var item1 = "Shoes";
var price1 = 1200;

var item2 = "Jeans";
var price2 = 800;

var item3 = "T-shirt";
var price3 = 750;

document.write("1. " + item1 + " - Rs " + price1 + "<br>");
document.write("2. " + item2 + " - Rs " + price2 + "<br>");
document.write("3. " + item3 + " - Rs " + price3 + "<br><br>");

var total = price1 + price2 + price3;

document.write("<b>Total cost of your order is " + total + "</b>");


 document.write("<h2>Marksheet</h2>");

  var totalMarks = 300;
    var obtainedMarks = 250;
    var percentage = (obtainedMarks / totalMarks) * 100;

    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Obtained Marks: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%");

    document.write("<h2>Currency in PKR</h2>");

     var usd = 10;
  var sar = 25;


  var usdToPkr = 104.80;
  var sarToPkr = 28;


  var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);


  document.write("Total Currency in PKR: <b>" + totalPkr + " PKR</b>");












  






