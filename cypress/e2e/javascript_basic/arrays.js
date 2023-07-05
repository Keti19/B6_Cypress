// creating array

var scores = new Array() //empty array
var numbers = new Array(10)// array with initisls size 10
var myNumber = new Array(9, 5, 4, 11) //array with initial elements

var athletes = Array(3); // array with initisls size 3
var sings = Array("Red"); // array with one element

var emptyArray = [];
var colors = ['red', 'green', 'blue'];

//array examples

let tools = ["Jest", "Selenium", "cypress", "TestCafe", "phantomjs", "Protractor"]

//accessing array elements

console.log(tools)
console.log(tools.toString())
console.log(tools[2])

const str = tools.toString();
console.log(str)
const join = tools.join(" * ") // add * between elements
console.log(join);

const pop = tools.pop()// removes an elements from the end of an arrays
console.log(pop);
console.log(tools);

const push = tools.push("SlimerJS");// add element to end of array
console.log(tools);
console.log(push)

const shift = tools.shift();
console.log(shift)
console.log(tools);

const unshift = tools.unshift("Selenoid") // add element to beginning of an array
console.log(unshift)
console.log(tools);

//sort element
const sort=tools.sort()
console.log(sort);

//reverse element
const reverse= tools.reverse()
console.log(reverse);


tools.forEach((value)=>{ //foreachloop
if (value=="cypress"){
    console.log("cypress is trending now")
}else{
    console.log("element not found")
}
})