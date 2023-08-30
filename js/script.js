const numberButtons = document.querySelectorAll(".botones");
const operaciones=document.querySelectorAll(".operacion");
const visor=document.querySelector(".visor");
const calcular=document.querySelector(".calcular");
let number1=0;
let number2=0;
let operacion;
let resultado;


// Agrega el evento de clic a cada botón
numberButtons.forEach(Element => {
    Element.addEventListener("click", function() {
        const number = Element.textContent;
       visor.innerHTML+=number    
    });
});

operaciones.forEach(Element =>{
    Element.addEventListener("click", function(){
        const operaciones = Element.textContent;
        number1=parseFloat(visor.innerHTML);
        visor.innerHTML="";
        operacion=operaciones
    })
})

calcular.addEventListener("click", function(){
    number2=parseFloat(visor.innerHTML);
    if (isNaN(number1) || isNaN(number2)) {
        visor.innerHTML=""
        number1=0;
        number2=0; 
    }else {

    if (operacion== "+"){
        console.log(operacion)
        resultado= number1 + number2
    }
    if (operacion== "-"){
        resultado= number1 - number2
    }
    if (operacion== "*"){
        resultado= number1 * number2
    }
    if (operacion== "/"){
        resultado= number1 / number2
    }

    if (operacion== "cancelar"){
        visor.innerHTML=""
        number1=0;
        number2=0;
    }
    visor.innerHTML=resultado
}
}) 





