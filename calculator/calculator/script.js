disablee();
var input = document.getElementById("input")
function del(){
    var s = "";
    for(var i = 0;i<input.value.length-1;i++)
        s+=input.value[i]
    input.value = s
}
function empty(){
    input.value = ""
    disablee();
}
function fact(){
    if(input.value != ""){
        var l = 1;
        for(var i = 1;i<= eval(input.value);i++)
            l = l * i
        input.value = l
    }
}
function log(){
    if(input.value != ""){
        var log = Math.log10(input.value)
        input.value = log
    }
}
function pow(){
    if(input.value !=""){
        var pow = input.value * input.value
        input.value = pow
    }
}
function sqrt(){
    if(input.value !=""){
        var sqrt = Math.sqrt(input.value)
        input.value = sqrt
    }
}
function inv(){
    if(input.value !=""){
        var inv_n = 1 / eval(input.value)
        input.value = inv_n
    }
}
function not(){
    if(input.value !=""){
        var s_not = Math.pow(10,eval(input.value))
        input.value = s_not
    }
}
function mod(){
    input.value += "%"
}
function plus(){
    input.value += "+" 
}
function minus(){
    input.value += "-" 
}
function times(){
    input.value += "*" 
}
function div(){
    input.value += "/" 
}
function slash(){
    input.value += "." 
}
function calc(){
    if(input.value != ""){
        var total = eval(input.value)
        input.value = total
    }
}
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
function enablee() {
    for(var i=1;i<=7;++i){
    document.querySelector("#disable"+i).disabled = false;
    }
}
function disablee() {
    for(var i=1;i<=7;++i){
        document.querySelector("#disable"+i).disabled = true;
    }
}