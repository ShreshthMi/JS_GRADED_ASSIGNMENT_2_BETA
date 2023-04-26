function validateData() {
  var uid = document.getElementById("username").value;
  var pw = document.getElementById("password").value;

  var getusername = localStorage.getItem("uid");
  var getpassword = localStorage.getItem("pwd");

  if (uid === getusername && pw === getpassword) {
    alert("login successful");

    window.location.replace("./resume-page.html");

    history.pushState(null, null, "../pages/resume-page.html");
    window.onpopstate = function () {
      history.go(1);
    };
  } else {
    alert("invalid username/password - Try again");
    uid.innerHTML = "";
    pw.innerHTML = "";
  }
}