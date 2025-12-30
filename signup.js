let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let mob = document.getElementById("number").value;
  let pwd = document.getElementById("pwd").value;
  let cpwd = document.getElementById("cpwd").value;

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    mob === "" ||
    pwd === "" ||
    cpwd === ""
  ) {
    alert("Alert! Fill the form first");
  }else if(pwd !== cpwd){

    alert("Please enter the correct password...")

  }
   else {
    localStorage.setItem("username", email)
    localStorage.setItem("password", pwd)
    console.log(fname, lname, email, mob, pwd, cpwd);
    window.open("./Login.html")
    window.location.reload()
  }
});
