function areaCalcultae(base,altura) {
    const area = (base*altura)/2;
    return area;
}
function perimeterCalculate(lado1,lado2,lado3){
    const perimeter= lado1+lado2+lado3;
    return perimeter
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
    const lado1Value = inputLado1.value;
    const inputLado2 = document.getElementById("inputL2");
    
}