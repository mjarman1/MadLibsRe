function createParagraph(){
 var wordOne = document.getElementById("holiday1").value;   
 var wordTwo = document.getElementById("noun1").value;   
 var wordThree = document.getElementById("place1").value;   
 var wordFour = document.getElementById("person1").value;   
 var wordFive = document.getElementById("adjective1").value;   
 var wordSix = document.getElementById("body1").value;   
 var wordSeven = document.getElementById("verb1").value;   
 var wordEight= document.getElementById("adjective2").value;   
 var wordNine = document.getElementById("noun2").value;   
 var wordTen = document.getElementById("food1").value;   
 var wordEleven = document.getElementById("noun3").value;   

var paragraph = "I can't believe it's already " + wordOne + "! I can't wait to put on my " + wordTwo + " and visit every " + wordThree + ". This year, I am going to dress up as (a) " + wordFour + " with " + wordFive + " "+ wordSix +". Before I " + wordSeven + ", I make sure to grab my " + wordEight + " " + wordNine + " to hold all of my " + wordTen + ". Finally, all of my " + wordEleven + " are ready to go!";

document.getElementById("answer").innerHTML = paragraph;
}
