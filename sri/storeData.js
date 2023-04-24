function storeData() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    localStorage.setItem("uid", uid);
    localStorage.setItem("pw", pw);
}