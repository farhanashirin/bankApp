
let amnt=0;
let withdraw=0;
let totalBalance=0;
let pswd='';
//deposit
function Deposit()
{
let amnt = document.getElementById("damount").value
let acno = document.getElementById("daco").value
amnt = Math.floor(amnt)
 if(localStorage.getItem(acno))
 {
    accountDetails = JSON.parse(localStorage.getItem(acno))

    if(acno == accountDetails.acno && amnt<0)
    {
        alert("value cannot be empty")
    }
    else{

        accountDetails.balance+=amnt

        localStorage.setItem(acno,JSON.stringify(accountDetails))

        alert("your amount is successfully added")
        document.getElementById("bal_amount").innerHTML=`<div class ="text-black fw-bolder mt-2 text-center shadow lg">your current Balance is : ${accountDetails.balance}</div>`
    }}
 else{
    alert("Incorrect acount number")
}
}
// withdraw
function withDraw()
{
let withdrawAmnt = document.getElementById("wamount").value
let acno=document.getElementById("waco").value
withdrawAmnt = Math.floor(withdrawAmnt)
if(localStorage.getItem(acno))
{
    accountDetails=JSON.parse(localStorage.getItem(acno))
    if(acno=accountDetails.acno && withdrawAmnt<=0)
    {
       alert("please enter amount") 
    }
    else if(withdrawAmnt>accountDetails.balance)
    {
        alert("insufficient funds")
    }
    else{

        alert("bank balance before withdrawal :" +accountDetails.balance)
        alert("withdraw amount" + withdrawAmnt)

        accountDetails.balance-= withdrawAmnt;

        alert("your amount is successfully added")
        localStorage.setItem(acno,JSON.stringify(accountDetails))

        alert("after withdrawal balance:" +accountDetails.balance)
        document.getElementById("withdraw_amount").innerHTML=`<div class = "text-black fs-5 fw-bold mt-2 text-center shadow">your current balance is : <span class ="fw-bolder">${accountDetails.balance}</span></div>`
    }
}
else{
    alert("incorrect acount number")
}
}
function logout(){
    window.location="./index.html"
}
