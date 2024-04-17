// en los siguientes ejercicios nos familiarizaremos con las variables y los tipos de datos en JS
let miNumero = 10
console.log(miNumero)
let miBooleano = true
console.log(typeof miBooleano)
let miCadena = "Hola Mundo"
console.log(miCadena.length)
let miArray = ["Hola", 5, [1, 2, 3]]
console.log(miArray)
let miObjeto = {
    name: "Diego",
    age: 18,
    Lastname : "Ramirez"
}
console.log(miObjeto)
let nombreUsuario = prompt("ingresa tu nombre:  ")
alert (`¡Hola ${nombreUsuario}, comom estas?!`)
let DoYouLikeJavaScript = confirm("¿Te gusta Javascript?")
DoYouLikeJavaScript ? console.log("!Te gusta JavaScript¡") : console.log("!No te gusta¡")
console.warn("esto es solo una practica")
let error = confirm("Click en lo que sea")
error ? console.error("ERROR 404") : console.error("ERROR 404")
let miArray2 = ["1","2", "3", "4", "5"]
console.table(miArray2)
