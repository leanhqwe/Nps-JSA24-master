let form = document.getElementById("register-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // In ra email người dùng nhập vào.
      console.log(form.email.value);
      console.log(form.name.value);
      
    })