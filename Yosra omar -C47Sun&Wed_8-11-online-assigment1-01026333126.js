// //question 1
// let num =Number("123");
// console.log(num +7);

// //question 2
// let val =0;
// if(val ==0||false||""||undefined){
//     console.log("Invalid")
// };

//question 3
// for(let i=1;i<=10;i++){
//     if(i %2==0){
//         continue;
//     }else
//         console.log(i);
// }
//question 4
// let arr=[1, 2, 3, 4, 5];
// let res = arr.filter(function(val){
//     return val %2 ==0;
// })
// console.log (res);

//question 5
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = [...arr1,...arr2];
// console.log(res);

//question 6
// let day=2
// switch(day){
//     case 1:
//         console.log("Saturday")
//         break;
//     case 2:
//         console.log("Sunday")
//         break;
//      case 2:
//       console.log("Sunday");
//       break;
//    case 3:
//       console.log("Monday");
//       break;
//    case 4:
//       console.log("Tuesday");
//       break;
//    case 5:
//       console.log("Wednesday");
//       break;
//    case 6:
//       console.log("Thursday");
//       break;
//    case 7:
//       console.log("Friday");
//       break;
//       default:
//         console.log("invalid")
// }

//question 7
// let arr=["a", "ab", "abc"];
//    let res = arr.map(num =>{
//    return num .length 
// })

//  console.log(res);

// question 8
// let num ;
// function check (num){
// if(num %5==0 && num % 3==0){
//    console.log("Divisible by both");
// }}
// check (15);

//question 9
// let num;
// const square = num => num *num
// console.log(square(5));

//question 10
// const person = {name: 'John', age: 25};
// function print (obj){
//    return `${person.name} is ${ person.age} year old`;
// }
// console.log(print(person));

//question 11

// function funsum (...arr){
//    let sum =0;
//    for(let num of arr){
//       sum +=num
//    }
//    return sum
// }
// console.log(funsum(1, 2, 3, 4, 5));

//question 12

//question 13

// function largNum(arr) {
//     let largest = arr[0];
//     for (let num of arr) {
//         if (num > largest) {
//             largest = num;
//         }
//     }
//     return largest;
// }

// console.log(largNum([1, 3, 7, 2, 4]));

//question 14
// const person= { name:"John", age: 30}
// function takeobj(obj){
//    for(let key in obj)
//        console.log(key);
// }
// takeobj(person);

//question 15
const text="The quick brown fox";
let res =text.split(" ");
console.log(res)