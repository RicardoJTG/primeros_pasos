//Ejercicio 5
console.log("¿Quieres saber tu indice de masa corporal (IMC)")
let peso = parseFloat(prompt("Ingrese su peso en Kg: "))
let altura = parseFloat(prompt("Ingrese su altura en mts: "))
console.log("Tu IMC es: "+`${peso/Math.pow(altura,2)}`)