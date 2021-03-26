function pintar()
{
    return "hola";
}

function sumar(){

    var numero1=document.getElementById("num1").value
    var numero2=document.getElementById("num2").value

    var numero1_valido=parseInt(numero1);
    var numero2_valido=parseInt(numero2);
    var resultado = numero1_valido+numero2_valido

    document.getElementById("resultado1").innerHTML= resultado

    
}


function procesar()
{
    console.log("Ha conseguido pulsar el boton")
    var dato=document.getElementById("nom_for").value
    document.getElementById("nombre").innerHTML=dato

}


var x=10
var z=20
var resultado=sumar(x,z)
document.getElementById("nombre").innerHTML=pintar()
document.getElementById("apellidos").innerHTML=resultado
document.write(pintar())
document.write(resultado)