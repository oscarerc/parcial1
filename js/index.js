document.getElementById("1").addEventListener("click",num1);
document.getElementById("2").addEventListener("click",num2);
document.getElementById("3").addEventListener("click",num3);
document.getElementById("4").addEventListener("click",num4);
document.getElementById("5").addEventListener("click",num5);
document.getElementById("6").addEventListener("click",num6);
document.getElementById("7").addEventListener("click",num7);
document.getElementById("8").addEventListener("click",num8);
document.getElementById("9").addEventListener("click",num9);
document.getElementById("0").addEventListener("click",num0);
document.getElementById("codigo").addEventListener("click",codigo);
document.getElementById("borrar").addEventListener("click",borrar);
document.getElementById("suma").addEventListener("click",suma);
document.getElementById("resta").addEventListener("click",resta);
document.getElementById("multiplicacion").addEventListener("click",multiplicacion);
document.getElementById("division").addEventListener("click",division);
document.getElementById("igual").addEventListener("click",operar);

function operar(){
    var actual = document.getElementById('resultado').innerHTML;
    
}

function borrar(){
    var actual = document.getElementById('resultado').innerHTML;
    var nuevos= ' ';
    document.getElementById('resultado').innerHTML=nuevos;
}

function codigo(){
    var actual = document.getElementById('resultado').innerHTML;
    var chaira= 'codigo: 1610078131';
    document.getElementById('resultado').innerHTML=actual+chaira;
}

function suma(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("suma").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function resta(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("resta").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function multiplicacion(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("multiplicacion").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function division(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("division").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num0(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("0").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}

function num1(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("1").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num2(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("2").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num3(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("3").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num4(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("4").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num5(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("5").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num6(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("6").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num7(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("7").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num8(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("8").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}
function num9(){
    var actual = document.getElementById('resultado').innerHTML;
    var codigochaira= document.getElementById("9").innerHTML;
    document.getElementById('resultado').innerHTML= actual+codigochaira
}