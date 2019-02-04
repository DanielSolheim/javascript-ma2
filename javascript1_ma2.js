//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Dog(){

}

Dog.prototype.bark = function(){
  console.log("bark!")
}

var fido = new Dog();

fido.bark();

var Car = {
  drive: function(){
    console.log("i wanna drive!")
  }
}

var childCar = Object.create (Car);

childCar.drive();

function rectangle( width, heigth){
  this.width = width;
  this.heigth = heigth;
}

var rect = new rectangle(3, 4);

rectangle.prototype.area = function(){
  return this.width * this.heigth;
}

console.log(rect.area());





//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [1,2,3,2,3,7,8,9,4,2];
console.log(myNumbers);

var newArray = myNumbers.slice(4,5);
console.log(newArray);

myNumbers.splice(1,2,"hei", "på deg");
console.log(myNumbers);




//3. Delete the last number in the array that you created above.

myNumbers.pop();
console.log(myNumbers);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
var story = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied. "


var mapObj = {
   Strawberries:"bananas",
   strawberry:"banana",

};
story = story.replace(/Strawberries|strawberry/gi, function(matched){
  return mapObj[matched];
});

console.log(story)


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var football = ["Manchester united", "Blackburn", "Barcelona", "real madrid"];
console.log(football);

function changeArray(){
   console.log(football.splice(0, 4 , "Volvo", "mustang", "chevvy", "toyota"));
} /* vet ikke om det skal være så enkelt men det funket hvertfall, men måtte trykke 2 ganger på knappen for at det skal virke */







//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
  

//7. Create a simple function that logs the date

var date1 = new Date();
console.log(date1);
