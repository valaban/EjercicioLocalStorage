const alertMensaje = document.getElementById("alertMensaje");
window.addEventListener("load", function(event){
    
    if (this.localStorage.getItem("nombre")!=null){
        alertMensaje.innerHTML = `Hola, ${this.localStorage.getItem("nombre")},
                                        bienvenido/a de nuevo`;
    }//if nombre!=null)
    alertMensaje.style.display="block";
});//load