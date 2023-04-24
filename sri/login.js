function validateData() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
  
    var getusername = localStorage.getItem("uid");
    var getpassword = localStorage.getItem("pwd");
  
    if (uid === getusername && pw ===getpassword) {
      
      alert("login successful");
        
      // redirect to Resume page
      window.location.replace("resume.html");
      
      // restrict user from going back to login page
      history.pushState(null, null, location.href);
      window.onpopstate = function () {
        history.go(1);
      };
    } else {
      alert("invalid username/password");
    }
  }
  