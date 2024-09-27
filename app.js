// 
/* Variable in Typescript */
//number datatype -has integer and float values
// let num: number = 10; //value of number datatype can be changed later in code
// console.log(num);
// const pi=3.14; //fixed value and has to initialize at the time of declaration.
// console.log(pi);
// const num1: number = 10; //fixed value and has to initialize at the time of declaration.
// console.log(num1);
// //string datatype
// const str: string = "Hello";
// console.log(str);
// // const str1 = 'this is a string created  
// //               using back ticks ${str};
// //               this is another line';
// // console.log(str1);
// //boolean datatype
// let bool: boolean = true;
// console.log(bool);
// let isEligible: boolean = false;
// console.log(isEligible);
// let isEquals: boolean = true;
// console.log(isEquals);
// //array datatype
// let arr: number[] = [1, 2, 3];
// console.log(arr);
// let isGreater = 10 > 5;
// console.log(isGreater);
function summation(num1, num2, isPrint) {
    if (isPrint) {
        console.log("Sum of number: " + (num1 + num2));
    }
    else
        return 0;
    console.log(isPrint);
}
summation(10, 20, true);
var person = {
    name: "John",
    age: 25,
    gender: 'male',
};
console.log("Person Object: " + person);
//Arrays in Typescript
var singlePerson = ['john', 28, 'male', 1000];
console.log("People array: " + singlePerson);
var people = ['John', 'Doe', 'Smith'];
console.log("People array: " + people);
var birthYear = [1990, 1991, 1992, 1993];
console.log("Birth Year: " + birthYear);
