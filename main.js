let cars = ["Ford", "Honda", "Toyota", "Chevy"];
let moreCars = ["Nissan", "Volvo", "Dodge", "Honda"];


//1
console.log(cars.length);
//2
let totalCars = cars.concat(moreCars);
//3
console.log(cars.indexOf("Honda"));
console.log(cars.lastIndexOf("Ford"));
//4
let stringOfCars = totalCars.join();
console.log(stringOfCars);
//5
let totalCarsAgain = stringOfCars.split();
//6
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
//7
console.log(carsInReverse.sort());
console.log(totalCarsAgain);
//8
let removedCars = carsInReverse.slice(1, 6, 7)
console.log(removedCars);
//9
console.log(carsInReverse.splice(2, 3, "Ford", "Honda"));
//10
console.log(carsInReverse.splice(2, 3, "Ford", "Honda").push("Dodge", "Nissan"));
//11
console.log(carsInReverse.pop());
//12
console.log(carsInReverse.shift());
//13
carsInReverse.unshift("Buick");
console.log(carsInReverse);
//14
let numberArray = [23, 45, 0, 2];

let addingTwo = (item, index, arr) => {
    arr[index] = item + 2
}

numberArray.forEach(addingTwo);

console.log(numberArray);





