function crear_boton() {
  //  var boton = document.createElement("input")
  //  boton.type = "button"
   // boton.value = "Botón nuevo"
    //document.getElementById("span1").appendChild(boton)
//    var span=document.getElementById("span1")
  //  span1.appendChild(boton)
    var boton=document.createElement("button");
    boton.innerHTML="Boton Nuevo";
    document.body.appendChild(boton);

}

function crear_texto() {
/*    var h1 = document.createElement("h1")
    var texto = document.createTextNode("Texto gordo")
    h1.appendChild(texto)
    document.getElementById("div1").appendChild(h1)*/
    var texto=document.createElement("h1");
    texto.innerHTML="Texto gordo";
    document.body.appendChild(texto);

}
