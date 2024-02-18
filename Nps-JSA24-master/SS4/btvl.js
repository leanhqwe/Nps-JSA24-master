// //dada
// let height =5;
// //vẽ tam giác bằng cách in ra sô
// for(let i =1; i <= 5; i++) {
//     let line =" "

// for(let j =1; j<= height - i; j++){
//     line = line + " "
// }

// for(let k =1; k<= 2 * i - 1; k++){
//     line = line + "1"
// }

// console.log(line);
// }

// let arr = [1,2,3,4,5,6,7,8,9,10,0]
// for(let key of arr){
//     if(key%2 ==0){
//         console.log(key);
//     }
// }

let danhba= [
    {
        name: "quan",
        phonenumber: 1234567890,
        email: "quan@gmail.com"
    },

    {
        name: "lacquan",
        phonenumber: 1234567891,
        email: "lacquan@gmail.com"
    },
];


localStorage.setItem("danhba",JSON.stringify(danhba));
    let input;
    do{
        input = prompt("moi nguoi dung nhap vao yeu cau trong C,R,U,D. nhap Q de thoat chuong trinh");
        if (input.toLowerCase().trim() == "c") {
            createContact();
        }

        else if (input.toLowerCase().trim() == "r") {
            readContact();
        }

        else if (input.toLowerCase().trim() == "u") {
            updateContact();
        }

        else if (input.toLowerCase().trim() == "d") {
                deleteContact();
        }
        else{
            alert("chua dung yeu cau nhap.moi nhap lai")
        }
        }

        while (input == "c" || input == "r" || input =="d" && input != "q"  );


        function createContact() {
            const data={
                name: prompt("moi nguoi dung nhap vao ten muon them"),
                phonenumber: prompt("moi nguoi dung nhap vao so dien thoai muon them"), 
                email: prompt("moi nguoi dung nhap vao email muon them")
            }

            let getdanhba = JSON.parse(localStorage.getItem("danhba"));
            getdanhba.push(data);

            localStorage.setItem("danhba", JSON.stringify(getdanhba));

            
            
        }

        function readContact(){
            let getdanhba = JSON.parse(localStorage.getItem("danhba"));
            for(let key of getdanhba){
                console.log(`${key.name}:${key.phonenumber}`);
            }
        }

        function updateContact() {
            let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); /// Lấy dữ liệu từ LS về
            let nameUpdate = prompt("Mời người dùng nhập vào tên danh bạ muốn update").trim();
          
            let viTriDanhBaCanUpdate;
          
            for (let key in getDanhBa) {
              if (getDanhBa[key].name == nameUpdate) {
                viTriDanhBaCanUpdate = key
              }
            }
          
            console.log(line);
          
            getDanhBa[viTriDanhBaCanUpdate] = createContact();
          
            localStorage.setItem("danhBa", JSON.stringify(getDanhBa));
          }