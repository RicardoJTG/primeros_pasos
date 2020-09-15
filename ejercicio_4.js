//Ejercicio 4
console.log("¿Quieres saber cuantos años tienes?")
let fecha = parseInt(prompt("Ingrese su año de nacimiento: "))
let f = new Date() //Obtener fecha
let anios = f.getFullYear() - fecha //Obtener años
console.log("Tienes "+anios+" años")