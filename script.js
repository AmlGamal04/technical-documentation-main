let code =document.getElementById("body");
const copyToClipboard=()=>{
var template =document.createElement("textarea");
template.value=code;
document.body.appendChild(template);
//to copy code
template.select();
document.execCommand('copy');
document.body.removeChild(template);

alert("the code is copied")
console.log("copied");
}