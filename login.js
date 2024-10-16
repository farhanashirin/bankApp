function login()
{
   let acno = document.getElementById('log_acno').value;
   let pswd = document.getElementById('log_pswd').value;
    console.log("login account",acno)
    if (!acno || !pswd) {
        alert("Both account number and password are required!");
        return;
    }
    let accountData = localStorage.getItem(acno);
    if (accountData) {
        let accountDetails = JSON.parse(accountData);
        console.log("Account found:", accountDetails);  // Debugging log

        // Check if the password matches
        if (pswd === accountDetails.pswd) {
            alert("Login successful");
            window.location = "./main.html";  // Redirect to the main page
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Invalid account number");
    }
}
function logout()
{
window.location="./index.html"
}





