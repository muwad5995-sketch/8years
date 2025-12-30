let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let loginName = document.getElementById("email").value;
  let loginPassword = document.getElementById("pwd").value;

  let username = localStorage.getItem("username");
  let pwd = localStorage.getItem("password");

  if (loginName === "" || loginPassword === "") {
    alert("fill the details");
  } else if (username === loginName && pwd === loginPassword) {
    window.open("./hi1.html");
    window.location.reload();
  } else {
    alert("incorrect password");
  }
});
