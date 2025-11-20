var student = []
console.log(student);

var stringarr = ["Ayesha", "Zunaira", "Asna", "Areeba"];
console.log(stringarr);

var numberarr = [5, 7, 14, 20, 26];
console.log(numberarr);

var booleanarr = [true, false];
console.log(booleanarr);

var mixedarr = ["Ayesha", 7, 14, "Areeba",true];
console.log(mixedarr);

    var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PHD"];

    document.write(qualification[1]);
    document.write(qualification[2]);
    document.write(qualification[3]);
    document.write(qualification[4]);
    document.write(qualification[5]);
    document.write(qualification[6]);
    document.write(qualification[7]);



 
    var studentnames = ["Ayesha", "Ali", "Sara"];

    
    var scores = [420, 350, 480];

   
    var totalMarks = 500;

    document.write("Score of " + studentnames[i] + " is " + scores[i] + " Percentage: " + percentage.toFixed(2) + "%<br>");


     var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

    for (var i = 0; i < colors.length; i++) {
        document.write(colors[i] + "<br>");
    }



    
    var colors = ["Red", "Green", "Blue"];
    document.write("<b>Initial Array:</b> " + colors + "<br><br>");


    var colorStart = prompt("Enter a color to add at the beginning:");
    colors.unshift(colorStart);
    document.write("<b>After adding to beginning:</b> " + colors + "<br><br>");

    
    var colorEnd = prompt("Enter a color to add at the end:");
    colors.push(colorEnd);
    document.write("<b>After adding to end:</b> " + colors + "<br><br>");

    
    colors.unshift("Pink", "Orange");
    document.write("<b>After adding two colors to beginning:</b> " + colors + "<br><br>");

    
    colors.shift();
    document.write("<b>After deleting first color:</b> " + colors + "<br><br>");

    
    colors.pop();
    document.write("<b>After deleting last color:</b> " + colors + "<br><br>");

    
    var indexNum = +prompt("Enter index number where you want to add a color:");
    var newColor = prompt("Enter the color name:");
    colors.splice(indexNum, 0, newColor);
    document.write("<b>After adding color at index " + indexNum + ":</b> " + colors + "<br><br>");



    
document.write("<h2>9(g). Delete Colors</h2>");

var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
document.write("<b>Initial Array:</b> " + colors + "<br><br>");

var indexDel = +prompt("Enter the index from where to delete colors:");
var qtyDel = +prompt("How many colors you want to delete?");

colors.splice(indexDel, qtyDel);

document.write("<b>Updated Array After Deleting:</b> " + colors + "<br><br>");



document.write("<h2>10. Sorting Student Scores</h2>");

var scores = [320, 230, 480, 120];
document.write("<b>Scores:</b> " + scores + "<br>");

scores.sort(function(a, b){ return a - b; });

document.write("<b>Sorted Scores:</b> " + scores + "<br><br>");



document.write("<h2>11. Cities Array</h2>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<b>Cities List:</b> " + cities + "<br>");

var selectedCities = cities.slice(1, 4);

document.write("<b>Selected Cities:</b> " + selectedCities + "<br><br>");



document.write("<h2>12. Join Array Into String</h2>");

var arr = ["This ", " is ", " my ", " cat"];
document.write("<b>Array:</b> " + arr + "<br>");

var result = arr.join("");
document.write("<b>String:</b> " + result + "<br><br>");




document.write("<h2> FIFO - First In First Out</h2>");
var fifo = [];


fifo.push("Item 1");
fifo.push("Item 2");
fifo.push("Item 3");
fifo.push("Item 4");

document.write("<b>Initial Queue:</b> " + fifo + "<br>");

document.write("<b>Accessing FIFO:</b><br>");
while(fifo.length > 0){
    var removedItem = fifo.shift();
    document.write(removedItem + "<br>");
}

document.write("<h2> LIFO - Last In First Out</h2>");
var lifoStack = [];


lifoStack.push("Item A");
lifoStack.push("Item B");
lifoStack.push("Item C");
lifoStack.push("Item D");

document.write("<b>Initial Stack:</b> " + lifoStack + "<br>");


document.write("<b>Accessing LIFO:</b><br>");
while(lifoStack.length > 0){
    var poppedItem = lifoStack.pop();
    document.write(poppedItem + "<br>");
}


document.write("<h2> Phone Manufacturers Dropdown</h2>");
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for(var i=0; i<phones.length; i++){
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");



    











