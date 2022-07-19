function areaCalcultae(base,altura) {
    const area = (base*altura)/2;
    return area;
}
function perimeterCalculate(lado1,lado2,lado3){
    const perimeter= (lado1+lado2+lado3);
    return perimeter;
}

function onClickButtonArea(){
    const input_Altura = document.getElementById("inputAltura");
    const alturaValue = input_Altura.value;
    const input_Base = document.getElementById("inputBase");
    const baseValue = input_Base.value;

    const areaR = areaCalcultae(baseValue,alturaValue);
    const result = document.getElementById("resultArea");
    result.innerText = "Result: "+areaR;
   
}

function onClickButtonPerimeter(){
    const inputLado1 = document.getElementById("inputL1");
    const lado1Value = parseInt(inputLado1.value); // convertimos el valor en entero
    const inputLado2 = document.getElementById("inputL2");
    const lado2Value = parseInt(inputLado2.value);
    const inputLado3 = document.getElementById("inputL3");
    const lado3Value = parseInt(inputLado3.value);

    const perimeterR = perimeterCalculate(lado1Value,lado2Value,lado3Value);
    const result = document.getElementById("resultPerimeter");
    result.innerText = "Result: "+perimeterR;
    
}