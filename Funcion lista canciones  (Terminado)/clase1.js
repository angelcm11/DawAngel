window.onload=inicio;
function inicio () {
    var nombreCancion = document.getElementById("text1");
    
    var boton = document.getElementById("añadir").addEventListener("click",function() {añadir(nombreCancion)});
    
    
    
}

function añadir(nombreCancion){
    

    	var nuevoli = document.createElement("li");
    	nuevoli.textContent = nombreCancion.value;
        var ul = document.getElementById("ul");
			ul.appendChild(nuevoli);
}

