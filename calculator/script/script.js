// for toggle
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") 
{
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") 
{
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) 
    {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else 
    {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  });

//for calculator
var input = document.getElementById("calculat");
function empty()
{
    input.value = "";
}
function division()
{
    input.value += '/';
}
function Multiplication()
{
    input.value += '*';
}
function undo()
{
    input.value = eval(input.value.substring(0,input.value.length - 1));
    if(input.value === 'undefined')
        input.value = '';
}

function minus()
{
    input.value += '-';
}
function plus()
{
    input.value += '+';
}
function percentage()
{
    input.value += '%';
}
function sign()
{
    input.value += '.';
}
function equal()
{
    if(input.value != "")
        input.value = eval(input.value);
}
// numbers
function num1(){
    input.value += "1"
}
function num2(){
    input.value += "2"
}
function num3(){
    input.value += "3"
}
function num4(){
    input.value += "4"
}
function num5(){
    input.value += "5"
}
function num6(){
    input.value += "6"
}
function num7(){
    input.value += "7"
}
function num8(){
    input.value += "8"
}
function num9(){
    input.value += "9"
}
function num0(){
    input.value += "0"
}