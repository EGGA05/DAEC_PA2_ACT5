function viajes(){
    var destino = document.getElementById("destino").value;
    var origen = document.getElementById("origen").value;
    window.alert((origen == "ciudad palma" || origen == "Ciudad Palma") ? (destino == "barcelona" || destino == "Barcelona") ? "tiene un descuento del %5" : (destino == "venecia" || destino == "Venecia") ? "tiene un %10 de descuento" : (destino == "corea" || destino == "Corea") ? "tiene un descuento del %70" : "no tiene ningun descuento" : "no tiene ningun descuento");
}