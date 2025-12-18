
// chapter 26 to 30

var number = prompt("Enter a positive number:");
    number = parseFloat(number);

    document.write("Number: " + number + "<br>");
    document.write("Round off value: " + Math.round(number) + "<br>");
    document.write("Floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");



     var number = prompt("Enter a negative floating point number:");
    number = parseFloat(number);

    document.write("Number: " + number + "<br>");
    document.write("Round off value: " + Math.round(number) + "<br>");
    document.write("Floor value: " + Math.floor(number) + "<br>");
    document.write("Ceil value: " + Math.ceil(number) + "<br>");


     var number = prompt("Enter a number:");
    number = parseFloat(number);

    document.write("The absolute value of " + number + " is " + Math.abs(number) +"<br>");



    var dice = Math.floor(Math.random() * 6) + 1;

    document.write("Random Dice Value: " + dice + "<br>");


   
    var toss = Math.floor(Math.random() * 2);

    if (toss === 0) {
        document.write("Random Coin Value: Heads" + "<br>");
    } else {
        document.write("Random Coin Value: Tails" + "<br>");
    }


    var randomNumber = Math.floor(Math.random() * 100) + 1;

    document.write("Random Number between 1 and 100: " + randomNumber + "<br>");



    var weightInput = prompt("Enter your weight:");

    var weight = parseFloat(weightInput);

    document.write("Your weight is " + weight + " kg" + "<br>");



    var secretNumber = Math.floor(Math.random() * 10) + 1;

    var guess = prompt("Guess a number between 1 and 10:");
    guess = parseInt(guess);

    if (guess === secretNumber) {
        alert("Congratulations! You guessed the secret number.");
    } else {
        alert("Sorry! The secret number was " + secretNumber);
    }



    // chapter 31 to 34


    var now = new Date();
    document.write(now + "<br>");



     var month = new Date().toLocaleString("en-US", { month: "long" });
     alert(month);


      var day = new Date().toLocaleString("en-US", { weekday: "short" });
    alert(day);


    var day = new Date().getDay();

    if (day === 6 || day === 0) {
        alert("It's Fun day");
    }


    var date = new Date().getDate();

    if (date < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }



     var now = new Date();
    var milliseconds = now.getTime();
    var minutes = Math.floor(milliseconds / 60000);

    alert("Current Date: " + now +
          "\nElapsed milliseconds since Jan 1, 1970: " + milliseconds +
          "\nElapsed minutes since Jan 1, 1970: " + minutes);


          if (new Date().getHours() < 12) {
        alert("Its AM");
    } else {
        alert("Its PM");
    }



    var laterDate = new Date(2020, 11, 31);
    alert("Later Date: " + laterDate);



    var ramadan = new Date(2015, 5, 18);
    
    var today = new Date();
    
    var milliseconds = today - ramadan;
    
    var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    
    alert("Days passed since 1st Ramadan: " + days);


    var ref = new Date();

    var begin = new Date(2015, 0, 1);

    var milliseconds = ref - begin;

    var seconds = Math.floor(milliseconds / 1000);

    alert("Seconds elapsed since beginning of 2015: " + seconds);



     var current = new Date().getHours();;

    alert("Current Hours: " + current);

    current.getHours(current + 1);

    alert("Date 1 hour ahead: " + current);



     var currentDate = new Date();

    currentDate.setFullYear(currentDate.getFullYear() - 100);

    alert("Date 100 years back: " + currentDate.toString());



    var age = prompt("Enter your age:");

    var current = new Date().getFullYear();

    var birth = current - age;

    document.write("Your birth year is: " + birth);



     var customerName = prompt("Enter Customer Name:");
    var units = parseFloat(prompt("Enter Number of Units:"));
    var perUnit = parseFloat(prompt("Enter Charges per Unit:"));
    var latePayment = parseFloat(prompt("Enter Late Payment Surcharge:"));

    var currentMonth = new Date().toLocaleString("en-US", { month: "long" });

    var netAmount = units * perUnit;
    var grossAmount = netAmount + latePayment;

    netAmount = netAmount.toFixed(2);
    grossAmount = grossAmount.toFixed(2);
    perUnit = perUnit.toFixed(2);
    latePayment = latePayment.toFixed(2);

    document.write("<h2>K-Electric Bill</h2>");
    document.write("Customer Name: <strong>" + customerName + "</strong><br>");
    document.write("Current Month: <strong>" + currentMonth + "</strong><br>");
    document.write("Number of Units: <strong>" + units + "</strong><br>");
    document.write("Charges per Unit: <strong>" + perUnit + "</strong><br>");
    document.write("Net Amount Payable (within Due Date): <strong>" + netAmount + "</strong><br>");
    document.write("Late Payment Surcharge: <strong>" + latePayment + "</strong><br>");
    document.write("Gross Amount Payable (after Due Date): <strong>" + grossAmount + "</strong><br>");