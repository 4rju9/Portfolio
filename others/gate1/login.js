function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="amegakure")
    {
window.location.href="index.html";
    }
    else
    {
        alert("Unauthorized User");
    }
}