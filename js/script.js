/*code for the sign up page*/
document.getElementById("news-verification").onclick = function() {
    myFunction();
}
function myFunction() {
  var checkBox = document.getElementById("news-verification");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
document.getElementById("theForm").onsubmit = function() {
  submitFunction();
}

function submitFunction() {
  alert("The confirmation was sent to provided email address. Check your inbox and verify the email.");
}
/* end of code for the sign up page*/