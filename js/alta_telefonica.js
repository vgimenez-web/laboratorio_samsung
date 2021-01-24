const ProcesarFormulario = (f)=>{
   alert("se ha enviado el formulario");


}

const MostrarCuenta = ()=>{

    pais = document.getElementById("pais").value;
    iban= document.getElementById("iban").value;
    entidad= document.getElementById("entidad").value;
    sucursal= document.getElementById("sucursal").value;
    dc= document.getElementById("dc").value;
    cuenta= document.getElementById("cuenta").value;
    if ((pais !="") && (iban!="")&&(entidad!="")&&(sucursal!="")&&(dc!="")&&(cuenta!="")){
        alert("Le informamos que su cuenta bancaria es: "+ pais+"-"+iban+"-"+entidad+"-"+sucursal+"-"+dc+"-"+cuenta);
    }
    else{
        alert("Los datos de la cuenta bancaria estan incompletos");
    }

    
}

const MostrarValoracion=()=>{
    punto = document.getElementById("points").value;
    alert("Has valorado con "+punto);
}

const MostrarFecha=()=>{

    
    if (document.getElementById("date").value == ""){
        alert("No se ha seleccionado la fecha");
 
    }
    else {
        var d = new Date(document.getElementById("date").value);
        var weekday = new Array();
        weekday[0] = "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernes";
        weekday[6] = "Sabado";
      
        alert("La fecha seleccionada es un "+weekday[d.getUTCDay()]);
       
    }

}
