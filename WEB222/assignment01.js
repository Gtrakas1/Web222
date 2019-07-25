/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: George Trakas Student ID: 108459173 Date: 2/5/2018
*
********************************************************************************/
/*****************************

*TASK 1

******************************/
var student = 'George Trakas';
var program = 'CPA ';
var courses = 6;
var job = ('have' != job) ? 'have' : 'don\'t have'//conditional expression for job option
console.log('My name is ' + student + ' and I\'m in ' + program + ' program. I\'m taking ' + courses + ' course in this semester and I ' + job + ' a part-time job now');
/*****************************

*TASK 2

******************************/
var year = 2018;
var input = prompt('Please enter your age:');//js prompt for age input
var birthyear = year - input;//expression for birthyear
input = parseInt(input);//parseint to grab a number and not a string in prompt
console.log('You were born in the year of ' + birthyear);
var input2 = prompt('Enter the number of years you expect to study in college:');
input2 = parseInt(input2);
var output = year + input2;
console.log('You will graduate from Seneca college in the year: ' + output);
/*****************************

*TASK 3

******************************/
/*
var ceTemlp= 37;
var farTemp= ((celTemp * 9)/5 + 32); 
console.log(celTemp +"°C is");
*/
/*****************************

*TASK 4

******************************/
for (var i = 0; i < 10; i++)//loop for numbers
{
  if (i % 2 == 0) {//if else to determine wheter numbers are even or odd
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
}/*****************************

*TASK 5

******************************/

function largeNum(num1, num2)//functional declaration
{
  var result = 0;// local variable to grab the larger num
  if (num1 > num2)//if else to determine whether num1 or num2 are larger
  {
    result = num1;
  } else {
    result = num2;
  }
  //output of the result
console.log("The larger number of " +num1+" and "+num2+" is "+result) ;
 
}
//rinse and repeat
var greaterNum= function(num1,num2){//functional expression
  var result = 0;
  if (num1 > num2)
  {
    result = num1;
  } else {
    result = num2;
  }
console.log("The larger number of " +num1+" and "+num2+" is "+result) ;
 
}


var greater = greaterNum;
largeNum(1,2);
largeNum(12,5);
greater(5,12);
greater(96,89);
/*****************************

*TASK 6

******************************/
function Evaluator(){
  var avg=0;
  var sum=0;
  var numscore;
  for(var i=0;i<arguments.length;i++){//arguments.length represents 
                                      //  empty parameters
    sum +=arguments[i];//within loop to grab parameters when called
  }
  avg=sum/arguments.length;//expresion for average of parameter values
if (avg <= 49){//if else boolean condition
  return false;
}
else  {
  return true;
}
  
}
console.log("Average greater then or equal to 50:"+Evaluator(55,56,57));
console.log("Average greater then or equal to 50:"+Evaluator(2,4,3));
console.log("Average greater then or equal to 50:"+Evaluator(42,43,55));
/*****************************

*TASK 7

******************************/
var Grader=function(numscore){//functional expression
 var grade;//local undefined variable
  
     //nested if statement for grade
    if (numscore >= 90 && numscore <= 100)
  {
    grade= "A";//variable defined
  }
  //rinse and repeat
   else if (numscore >=70 && numscore<= 89)
  { 
    grade= "B";
   } 
   else if (numscore >=60 && numscore <= 69)
  {
    grade= "C";
  } 
  else  if (numscore >=50 && numscore<= 59)
  {
    grade= "D";
  } 
    else 
  {
    grade= "F";
  }
  return grade;
  
}
var grade=Grader;
console.log("Your grade was: " +grade(49));
console.log("Your grade was: " +grade(72));
console.log("Your grade was: " +grade(90));
/*****************************

*TASK 8

******************************/
 
function showMultiples(num,newMultiples){
  var str="";//empty string to loop parameters num * newMultiples

  for(var i=1;i<=newMultiples;i++){ // for loop to repeat amount of newMultples
    str+= "\n" +num+ "X"+i+"="+num * i;//str= expression
    
  }
    return str;//returns looped expression
}

console.log("Parameters num times newMultiples loop:  " +showMultiples(5,4));//call function within output   
console.log("Parameters num times newMultiples loop: " +showMultiples(12,14));   
console.log("Parameters num times newMultiples loop: " +showMultiples(3,9));   
  

