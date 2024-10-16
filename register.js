function register()
{
    let uname = document.getElementById('reg_name').value
   let acno = document.getElementById('reg_aco').value
  let  pswd = document.getElementById('reg_psw').value
let accountDetails ={
    acno,
    uname,
    pswd,
    balance:0
}
if(localStorage.getItem(acno))
{
    alert("user already registered")
}
else{

    localStorage.setItem(acno,JSON.stringify(accountDetails))
    console.log("Account registered:", accountDetails); 
    window.location="./login.html"
}
}
function logout()
{
window.location="./index.html"
}