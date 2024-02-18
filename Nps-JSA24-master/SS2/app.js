// // while(1 < 2){
// //     console.log("vòng lặp chạy"):
// // }

// // let i = 1;
// // while(i <11){
// //     console.log(i);
// //     i = i + 1;
// // }

// // let i = 1;
// // do {
// //     console.log(i);
// //     i = i+1;
// // }
// // while(i<=10);


// // for( let i = 1;i<=10;i++){
// //     console.log(i)
// // }

// // array: mang
// // khai bao mang
// // c1
// let arr = [1,"hello",'hi'];
// // c2
// let arr1 = new Array();
// // kiem tra kieu du lieu mang
// console.log(
//     Array.isArray(arr)
//     );

//     console.log(arr[1]);
//     // sl cac phan tu trong mang
//     console.log(
//         arr.length
//     );

//     // them phan tu
//     arr.push("phantuduocthem","more");
//     console.log("arr:", arr);

//     // them phan tu vao dau danh sach
//     arr.unshift("them phan tu");
//     // xoa phan tu cuoi cung trong danh sach
//     arr.pop();

//     // xoa phan tu dau tien trong danh sach
//     arr.shift();
//     // method splice
    
//     /*
//     arr.splice(box1,box2,box3);
//     box1: vi tri phan tu
//     box2: xoa ? phan tu ke tu vi tri box1
//     box3: them phan tu ke tu vi tri box1*/

//     console.log("arr",arr);
//     // xoa phan tu o vi tri thu 3
//     arr.splice(3,1);
//     console.log(arr);

// // vi du minh hoa duyet mang => su dung vong lap
// let arr = [1,2,3,4,5,6,7];
// // in ra cac phan tu trong mang len man hinh console
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// object khai bao
// let object={
//     name:"leanh",
//     age: 15,
//     job: "nothing",


// }
// object.hobbies = ["study","reading book"]

// object.fixbug = function(){
//     return "Execute code"
// }
// for (let key in object){
//     console.log(key);
// }

// object.age = 27;

// delete object.name;
// btvn1