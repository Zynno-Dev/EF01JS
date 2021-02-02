//object

class clientes{
    constructor(nombre, apellido, dni, marca, modelo, año, costo, pago){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.costo = costo
        this.pago = pago
    }
    pendiente(){
        if(this.pago == false){
            alert("Usted debe " + this.costo + " este mes")
        } else {
            alert("Usted esta al dia con el seguro")
        }
    }
}

//declarar nuevo cliente

let bandera = true
function getDni(numero){
    if (numero.length !== 8){
        alert("La longitud de su dni no es correcta")
        bandera = false
    }
    return(numero)
}

let cliente1 = new clientes(prompt("Ingrese su nombre").trim(), prompt("Ingrese su apellido").trim(), getDni(prompt("Ingrese su dni")).trim(), prompt("Ingrese la marca de su vehiculo").trim(), prompt("Ingrese el modelo de su vehiculo").trim(), prompt("Ingrese el año de su vehiculo").trim(), 500000, false)

//obtener dni 

var dni = cliente1.dni
let dniCut = dni.slice(-4)

//corroborar

alert("Saludos " + cliente1.nombre + " para corroborar su identidad ingrese los 4 ultimos digitos de su dni a continuacion")
if(prompt("Ingrese los ultimos 4 digitos de su dni") == dniCut && bandera == true){
    alert("Accedio correctamente")
    cliente1.pendiente()
} else {
    alert("No logro acceder")
}




