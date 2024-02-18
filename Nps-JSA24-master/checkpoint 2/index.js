let menu = ["rau xào", "thịt luộc", "gà rán"];

localStorage.setItem("menu", JSON.stringify(menu));

let input;
do {
  let input = prompt("mời người dùng nhập vào yêu cầu C,R,U,D").toLowerCase().trim();
  

  if (input == "c") {
    menu.push(
        prompt("mời người dùng nhập vào món ăn mới")
    )
  }
  else if (input == "r") {
    alert(menu.join(", "))
  }
  else if (input == "u") {
    updatemenu()
  }
  else if (input== "d") {
    deletemenu()
  }
  else {
    alert("chưa đúng yêu cầu mời người dùng nhập lạo")
  }
}
while (input == "c" || input == "r" || input == "u" || input == "d" );

function createmenu () {
    const data = {
        food: prompt("Mời người dùng nhập vào món ăn muốn thêm"),
    }

    let getmenu = JSON.parse(localStorage.getItem("menu"));
    getmenu.push(data);
    localStorage.setItem("menu", JSON.stringify(getmenu));
    return data;
}

function readmenu() {
    let getmenu = JSON.parse(localStorage.getItem("menu"));
    for (let key of menu) {
        console.log(`${key.food}`);
    }
}

function updatemenu() {
    let getmenu = JSON.parse(localStorage.getItem("menu")); 
  let nameUpdate = prompt("Mời người dùng nhập vào menu muốn update").trim();

  let viTrimMenuCanUpdate;

  for (let key in getmenu) {
    if (getmenu[key].food == menuUpdate) {
      viTrimenuCanUpdate = key
    }
  }

  getDanhBa[viTrimenuCanUpdate] = createmenu();

  localStorage.setItem("menu", JSON.stringify(getmenu));

}

function deletemenu() {
    let getmenu = JSON.parse(localStorage.getItem("menu"));
    let fooddelete = prompt("mời người dùng nhập vào món ăn muốn delete").trim();
    
    let vitricandelete;

    for (let vitrimenucandelete = menu.indexOf(prompt("mời nhập vị trí món ăn cần tìm")));
    menu.splice(vitrimenucanupdate, 1);
    localStorage.setItem("menu", JSON.stringify(getmenu));
}