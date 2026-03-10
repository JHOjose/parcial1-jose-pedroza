var contador=0

function solicitarServicio() {

    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let ciudad = document.getElementById("ciudad").value
    let telefono = document.getElementById("telefono").value
    let edad = document.getElementById("edad").value
    

    

    
    let regexco = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let regexte = /^[0-9]{10,}$/
    let regexno = /^[a-zA-Z\s]{3,}$/
    let regexed = /^[0-9]{1,2}$/
    let regexci = /^[a-zA-Z\s]{5,}$/
    if (nombre == "" || correo== "" || ciudad== ""  || telefono== ""  || edad== ""  ) {
        alert("datos incompletos")
        return

    }

    if (!regexco.test(correo)) {
        alert("Correo inválido")
        return
        }
    if (!regexno.test(nombre)) {
        alert(" Nombre inválido")
        return
        }
    if (!regexci.test(ciudad)) {
        alert("Ciudad inválido")
        return
        } 
    if (!regexte.test(telefono)) {
        alert("Telefono inválido")
        return
        } 
    if (!regexed.test(edad)) {
        alert("edad inválida")
        return
        }
    alert("Su nombre es" + " " + nombre +"," + "Su correo es"  + " "+ correo + "," +"Su ciudad es" + " "+ ciudad +"," + " " + "Su telefono es "  + " "+ telefono +","  + " "+ "Su edad es"  + " "+ edad +"."
        
     )
}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})
function cambiarmodo(){
    

}