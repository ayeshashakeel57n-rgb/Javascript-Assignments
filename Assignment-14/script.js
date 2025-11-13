let city = prompt("Enter your city name:");
    if (city === "karachi") {
      alert("Welcome to city of lights");
    } else {
      alert("Welcome to " + city);
    }
 





    let gender = prompt("Enter your gender (male/female):");

    if (gender  === "male") {
      alert("Good Morning Sir.");
    } else if (gender  === "female") {
      alert("Good Morning Maam.");
    } else {
      alert("Invalid input! Please enter 'male' or 'female'.");
    }



     let color = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");

    if (color   === "red") {
      alert("Must Stop");
    } else if (color === "yellow") {
      alert("Ready to Move");
    } else if (color  === "green") {
      alert("Move Now");
    } else {
      alert("Invalid color! Please enter Red, Yellow, or Green.");
    }





      let fuel = prompt("Enter the remaining fuel in your car (in litres):");


    fuel = parseFloat(fuel);

    if (fuel < 0.25) {
      alert("Please refill the fuel in your car");
    } else {
      alert("You have enough fuel");
    }




     var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}




var b = 82;
if (b++ === 83) {
  alert("Condition 1: b++ === 83 is true");
}


var c = 13;
if (c === 13) {
  alert("Condition 2: c === 13 is true");
}




c = 12;
if (++c < 14) {
  alert("Condition 3: ++c < 14 is true");
}



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("Condition 4: The cost equals");
}



if (true) {
  alert("True");
}


if (false) {
  alert("False");
}


if ("car" < "cat") {
  alert("car is smaller than cat");
}



// Input marks obtained
  var marks1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
  var marks2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
  var marks3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
  
  // Input total marks
  var totalMarks = parseFloat(prompt("Enter total marks of 3 subjects"));

  
  var obtainedMarks = marks1 + marks2 + marks3;
  var percentage = (obtainedMarks / totalMarks) * 100;

  
  var grade, remarks;
  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "A+";
    remarks = "You show great effort!";
  }


  var totalMarks, obtainedMarks, percentage;
  if (percentage >= 80) {
     totalMarks = 300;
      obtainedMarks = 250;
  } else if (percentage >= 70) {
    totalMarks = 300;
     obtainedMarks = 200;
  } else if (percentage >= 60) {
    totalMarks = 300;
     obtainedMarks = 150;
  } else {
    totalMarks = 300;
    obtainedMarks = 250;
    percentage = 83
 }

   // Show results on the page

  document.write("<h3>Marks Sheet</h3>");
  document.write("Total Marks: " + totalMarks +  "<br>");
  document.write("Marks Obtained: " + obtainedMarks + "<br>");
  document.write("Percentage: " + percentage + "%<br>");
  document.write("Grade: " + grade + "<br>");
  document.write("Remarks: " + remarks + "<br>");

