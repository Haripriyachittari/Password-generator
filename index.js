const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];




let lightTheme=document.querySelector('#lightTheme');

lightTheme.onclick=function(){
  document.body.classList.toggle("lighttheme");
  // if(document.body.classList.contains("lighttheme"))
  // {
  //   lightTheme.classList.toggle("fa-lamp")
  // }
}

let passwordOne = document.querySelector('.password1');
let passwordTwo = document.querySelector('.password2');
let results = document.querySelector('#result');

function generatePasswords() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i <= 15; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];

  }
  passwordOne.textContent = password1;
  passwordTwo.textContent = password2;
  results.textContent = "";
}

function UseFirstPassword() {
  results.textContent = passwordOne.textContent;
}
function UseSecondPassword() {
  results.textContent = passwordTwo.textContent;
}
function copyPassword() {
  var copyText = results.textContent;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  })

}
