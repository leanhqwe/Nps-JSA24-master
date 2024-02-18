// vòng lặp for in: array
// let arr = [ 1,2,3,4,5,6,7];
// for (let key in arr){
//     console.log(arr[key]); //key dai dien cho vi tri phan tu trong vong lap
// }

// //khi duyet mang bang vong lap thuong
// //for(let i =0; i<arr.length;i++){
// //console.log(arr[i])
// //}


// //vong lap for of : Array , Object
// for (let key of arr){
//     console.log(key);
// }

// // doi voi object
// let obj ={
//     name: "leanha",
//     age: 15,
// }

// for(let key in obj){
//     console.log(key);//key dai dien cho khoa ben trong object
// }

// chua bai

// let array = [
//     ["grape",15],
//     ["banana",1],
//     ["apple",20],
//     ["starfruit",12],

// ];
// // console.log("I Have " + array[0][1] + " " + array[0][0]);

// for(let i =0; i<array.length;i++){
//     console.log(`I Have ${array[i][1]} ${array[i][0]}`);
// }
// //cach 2: ung dung voi for of
// for(let key of array){
//     console.log(`I Have ${key[1]} ${key[0]}`);
// }

var myDog ={
    "name":"ngao",
    "leg": 4,
    "friend":["everything!"]

}
myDog.name = "Husky"

myDog.color = "brown"
delete myDog.friend
console.log(myDog);
