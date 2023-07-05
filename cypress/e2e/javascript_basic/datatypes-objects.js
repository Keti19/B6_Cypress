/**
 * variables naming rules : Same as java
 * Primitive Data types
 * numbers : 123, 10.50
 * string : "apple", 'apple'
 * boolean : true, false
 * undefined: variables does not have a value yet
 * null :
 */

/** 
 *  There are 3 different types of variables
 * var : variable abbreviation
 * if ther is , globally scope is a variable definition method
 * yopu can change its value later and define the same variable again
 * 
 * let : is equal to
 * let is a block-scope variable defination method
 * Th value of variables defined wth let can be changed later
 * but you can NOT define teh same variable again
 * 
 * const : short for constant
 * as soon as the value of the variable is constant, like number PI
 */

let a; //undefine 
console.log(typeof a);
a=6; // number
console.log(typeof a)
a='javascript' //string
console.log(typeof a)
a=true; //boolean
console.log(typeof a)

let b= 6, c='Cypress';
console.log(b+c)
console.log(b*c)

var name='Mike'
var age=36;
var name_object={firstNAme:"Jake", lastName:"Masters"}
var truth=true;
var skills=["HTML","CSS","JS"]
var x=null;

//object

var student={
    firstname:'Kate',
    lastName:'Masters',
    age:30,
    height:180,

    fullName: function(){
        return this.firstname+" "+this.lastName
    }
}

const ageValue=student.age;
console.log(ageValue)

console.log(student.fullName())

let str1='Cypress';
let str2='Script';
let str3="Java"

let result;

result="the result variable is: "+ str3 +str2+" and " + str1
console.log(result)

//difference from Jave: backticks for variable insertion

result=`the result variable is: ${str3}${str2} ${str1}`
console.log(result)
