let nombre = prompt("Por favor ingrese su nombre")

alert("Hola " + nombre + "! Bienvenidx a nuestra calculadora de impuestos para juegos de Steam.")
alert("A continuación podrás calcular los impuestos de los juegos...")

let brs = 1
let arg = 2
let chi = 3

function calcularImpuestos(){
    let precio
    let numeroElegido
    let impuestosResultado

    do{
        let inputPrecio = prompt("Especifique el precio del juego")
        precio = parseFloat(inputPrecio)

    if (isNaN(precio)){
        alert("¡Error! Debe ingresar un precio válido. Por favor, vuelva a intentarlo.");
    }
    } while (isNaN(precio))
    numeroElegido = parseInt(prompt("Elige el número del país para calcular los impuestos:\n1 = Brasil\n2 = Argentina\n3 = Chile"))
    let imp
    if(numeroElegido === arg){
        imp = 1.75;
        impuestosResultado = precio * imp;
        alert("El juego cuesta ($" + precio + ") más el 75% de impuestos del país elegido. El resultado es: $" + impuestosResultado.toFixed(2) + " Pesos.")
    }else if(numeroElegido === brs){
        imp = 1.13;
        impuestosResultado = precio * imp;
        alert("El juego cuesta ($" + precio + ") más el 13% de impuestos del país elegido. El resultado es: $" + impuestosResultado.toFixed(2) + " Reales.")
    }else if (numeroElegido === chi){
        imp = 1.30;
        impuestosResultado = precio * imp;
        alert("El juego cuesta ($" + precio + ") más el 30% de impuestos del país elegido. El resultado es: $" + impuestosResultado.toFixed(2) + " Pesos Chilenos.")
    }else {
        alert("Número no válido. Por favor, ingrese un número del 1 al 3.")
    }
    return confirm("¿Desea calcular los impuestos de otro juego?")
}

let calcularOtroJuego = true

while (calcularOtroJuego){
    calcularOtroJuego = calcularImpuestos()
}

alert("¡Perfecto! ¡Muchas gracias por usar nuestra calculadora!")