//map method- basics:
const fruits = ["apple", "banana", "orange"];

// const bigger = fruits.map((fruit) => fruit.toUpperCase());
// const drinks = fruits.map((fruit) => {
// if(fruit === "banana") return fruit + " juice";
// return fruit;
// });
// console.log(fruits); //["apple", "banana", "orange"]
// console.log(bigger); //["APPLE", "BANANA", "ORANGE"]
// console.log(drinks); //["apple", "banana juice", "orange"]


//foreach method- basics:
// const drinks = fruits.map(fruit => console.log(fruit + " juice"))


//excercise- map + join:
//input: "George Raymond Richard Martin";
//output: "GRRM";
const input = "George Raymond Richard Martin";
const wordsArr= input.split(" "); //['George', 'Raymond', 'Richard', 'Martin'];
//first way (with return):
// const newArr= wordsArr.map((word) => {
//     return word[0]
// })
//second way- better (one line):
// const newArr= wordsArr.map(word =>  word[0]); //['G', 'R', 'R', 'M'];
const newArr= wordsArr.map((word, index) => console.log("the word: " + word + "in index: " + index)); //['G', 'R', 'R', 'M'];
const result= newArr.join(''); 
console.log(result); //GRRM


//diffrence between map and foreach:
fruits.forEach((fruit) => console.log(fruit + "forEach"));
const newArrMap= fruits.map((fruit, index) => index);
console.log(fruits);
console.log(newArrMap);

//diffrence between == and ===:
// if("1" === "1") //true
// if("1" == "1") //true
// if("1" == 1) //true
// if("1" === 1) //false


