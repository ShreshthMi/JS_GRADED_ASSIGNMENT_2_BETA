function validateData() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var getusername = localStorage.getItem("uid");
    var getpassword = localStorage.getItem("pwd");

    if (uid == getusername) {
        if (pw == getpassword) {
            alert("login successful");
            // <script>
            // function myFunction() {
            //     location.replace("Resumepage.js")
            //   }
            //   </script>
            //redirect to Resume page
            //         If successful, direct the user to Resume Page
            // 4.	Once the user is in the Resume page restrict the user from going back to the login page. (When clicked on the back button in the browser, restrict the user from going back to the login page).

        }
    }
    else {
        alert("invalid username/password");
    }
}