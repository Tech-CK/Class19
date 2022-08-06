//---------------------Part1:Basic---------------------
//---------------Q1---------------
// In the next 5 small tasks type the correct answer.
//  Replace null with your answer in all tasks.

// Task 1: What will the value of `ln` be?

let sentence = "thisIsARandomSentence";
let ln = sentence.length;
let answer1 = 21;

// Task 2: What will the value of `position` be?

let string = "Please do all of your assignments";
let position = string.indexOf("your");

let answer2 = 17;

// Task 3: What will the value of `pick` will be?

let colors = "Red, Blue, Green, Yellow";
let pick = colors.slice(5, 9);

let answer3 = Blue;

// Task 4: What should be the values of `k` and `l`
// in order for the `result` to be `Yellow`?

let k = null;
let l = null;
let result = colors.slice(k, l);

// Task 5. Consider you have the following variables.
// Write an if-else statement that will take those numbers and it
// will console.log the greater number.

let a = 3;
let b = 5;


//---------------Q2-----------------------------------
// Escaping characters:

/* console.log the following statement ("Up up\n\tdown down");

Now:
Declare a variable and assign it a value that will result in a console.log in this format:

"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

Note:check the following link for more information about escaping characters in js.
https://www.quackit.com/javascript/tutorial/javascript_escape_characters.cfm
*/
 //Answer
/* <p id="html"> Escaping characters:</p>
<script>
 document.getElementById("html").innerHTML = "Up up\\n\\tdown down";
</script> */

//---------------Q3.1 :Logical operators---------------
/*
Evaluate the following values on console.
*/
true; //your answer = true
false; //your answer = false
!true; //your answer = false
!false; //your answer = true

true && true; //your answer = true
true && false; //your answer = false
false && true; //your answer = false
false && false; //your answer = false

true || true; //your answer = true
true || false; //your answer = true
false || true; //your answer = true
false || false; //your answer = false


// ----------------- Q3.2:Comparison operator---------------
let num = 9;
/*
Given that num = 9;
Evaluate the following statement on console.
//  Replace null with your answer in all the following statements.
*/

num > 12;
let answer4 = false;
/* <p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 9 > 12;
</script> */


num < 13;
let answer5 = true;

(num && true) || false;
let answer6 = true;

num == "9";
let answer7 = true;

num === "9";
let answer8 = false;

num === 9;
let answer9 = true;

num != "9";
let answer10 = false;

num !== "9";
let answer11 = true;

num >= 6;
let answer12 = true;

num <= 13;
let answer13 = false;


// ------------------Q4-----------------------------------
//   Given that
let num1 = 20;
let num2 = 4;

// then what the answers will be ?

num1 > 20 || num2 < 2;
let answer14 = false;

!(num1 <= num2) && num1 === 20;
let answer15 = true;


//---------------------Part2:Intermediate---------------------
//---------------Q5---------------

/*
Given the following pseudocode for real life example,
turn them into code.
Think about the variables you need to declare, and console.log() your 
answers.
*/

//---------------Q5.1:----------------
// if it is raining
// you should wear a raincoat

/* Your code here 
let str = "if it is raining\nyou should wear a raincoat";

console.log(str);


or 

<p>if it is raining
      you should wear a raincoat</p>
     <p id="space"></p>
     
    <script>
       document.getElementById("space").innerHTML="if it is raining"+"<br> "+"you should wear a raincoat</p>";
     
       

    </script>
*/

// ---------------Q5.2:----------------
// if your score plus, added to my score, is greater than 90
// we should celebrate

/* Your code here 
let s = "if your score plus, added to my score, is greater than 90\nwe should celebrate";

console.log(s);

or 
<p id="space1"></p>
     
<script>
   document.getElementById("space1").innerHTML="if your score plus, added to my score, is greater than 90"+"<br> "+"we should celebrate</p>";

</script>

 --------------- Q5.3:----------------
<br/><br/>
  Given that let password = "HBffN90oDVDFRET";
  <br/><br/>


// Given that
let password = "HBffN90oDVDFRET";

// if  the password length is greater than 9 and less than 20
// your password is strong enough.
// otherwise. Please write a strong valid password.

/* Your code here 
<script>
function verifyPassword() {
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if(pw == "") {
     document.getElementById("message").innerHTML = "**Fill the password please!";
     return false;
  }
 
 //minimum password length validation
  if(pw.length <9) {
     document.getElementById("message").innerHTML = "**Password length must be atleast 9 characters";
     return false;
  }

//maximum length of password validation
  if(pw.length > 20) {
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
     return false;
  } else {
     alert("Password is correct");
  }
}
</script>


<script>
  function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    //check empty password field
    if(pw == "20") {
       document.getElementById("message").innerHTML = "**Fill the password please!";
       return false;
    }
   
   //minimum password length validation
    if(pw.length <9) {
       document.getElementById("message").innerHTML = "**Password length must be atleast 9 characters";
       return false;
    }
  
  //maximum length of password validation
    if(pw.length > 15) {
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
       return false;
    } else {
       alert("Password is correct");
    }
  }
  </script>
  
  

 
  
  <form onsubmit ="return verifyPassword()">
  <!-- Enter Password -->
  <td> Enter Password </td>
  <input type = "password" id = "pswd" value = ""> 
  <span id = "message" style="color:red"> </span> <br><br>
  
  <!-- Click to verify valid password -->
  <input type = "submit" value = "Submit">
  
  <!-- Click to reset fields -->
  <button type = "reset" value = "Reset" >Reset</button>
  </form>
  */
// ---------------Q5.4:----------------

// Given that you have the following Grades

let mathGrade = 90;
let codingGrade = 97;
let scienceGrade = 80;
let artGrade = 78;
let geographyGrade = 70;

/*
1.  find the average
2.  if your average is greater than 90, print on console "your average is excellent".
3.  if your average is less than 90 and greater than 80, print "your average is veryGood"
4.  if your average is greater than 70 and less than 80, print "your average is good"
5.  Otherwise print "You need to work harder"
*/

/* Your code here */
let mark = 45; 
    
    if (mark <= 100 && mark >= 90){
          console.log("your average is excellent")
    }
    
    else if(mark <= 89 && mark >= 80){
          console.log("your average is veryGood")
    }
    
    else if(mark <= 79 && mark >= 70){
          console.log("your average is good")
    }
    
    else if(mark <= 69 && mark >= 60){
          console.log("You need to work harder")
    }
    
    else if(mark < 60 ){
          console.log("You need to work harder.You failed")
    }

// ---------------Q6---------------
/*
Using ternary operator
1.  declare two number variables with  any values.
2.  find the summationis greater than 10, print "greater t
3.  if the sum han 10"
4.  otherwise print "less than 10"
*/
/* Your code here 
let X = 1;
let Y = 7;


if( X>10){
console.log(X+Y +"" +" greater than 10");
}else{
  console.log(X+Y +" " +"less than 10");
}
*/



// ---------------Q7---------------
/*
Musical groups have special names based on the number of people in the group.
1.  Declare a variable called musicians and assign it with any value.
2.  Write a series of conditional statements that:
        -Prints "not a group" if musicians is less than or equal to 0
        -Prints "solo" if musicians is equal to 1
        -Prints "duet" if musicians is equal to 2
        -Prints "trio" if musicians is equal to 3
        -Prints "quartet" if musicians is equal to 4
        -Prints "this is a large group" if musicians is greater than 4

        Note: change the value of your musicians variable to test your code.
*/
/* Your code here */


//---------------------Part3:Advanced---------------------
// ---------------Q8---------------
/*
Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores

1.  Declare 3 variables:
        - category
        - eatsPlants,and assign to it false.
        - eatsAnimals and assign to it false.
2.  Write a series of ternary statements that sets the variable category equal to:
        -"herbivore" if an animal eats plants
        -"carnivore" if an animal eats animals
        -"omnivore" if an animal eats plants and animals
        -"undefined" if an animal doesn't eat plants or animals.


 Notes:
    - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
    (change the value of them to test your code)
    - `if` statements aren't allowed 
*/

/* Your code here */

// ---------------Q9---------------
/*
1.  Declare a variable called string and assign it with any set of characters.
2.  Write a series of conditional statements that:
        - print true if the string length is odd.
        - print false if the string length is even.
 */

/* Your code here */

// ---------------Q10---------------
/*
Write a function called multiLineString that takes no parameter and return 
the following string in the same format:

This is a long message
that spans across multiple lines
in the code.
*/

/* Your code here */

// ---------------Q11---------------
/* 
Write a function called getCharacter that takes two parameters
a string and a number (index) and return the character at the given index.
*/
/* Your code here */

// ---------------Q12---------------
/*
Write a function called sayHello.
The function should:
Take one input parameter, the language.
Return a greeting in that language.
If the language is 'English', return 'Hello'
If the language is 'French', return 'Bonjour'
If the language is 'Spanish', return 'Hola'
If the language is anything else, return 'Sorry, I do not speak [language].'
*/
/* Your code here */


/*------------------------Good Luck-------------------------------*/
