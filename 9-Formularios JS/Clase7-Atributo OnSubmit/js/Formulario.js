var pf={
    entradas:document.querySelectorAll("input.validar"),
    valor:null,
    expresionRegular:null,
    validarUsuario:false,
    validarPassword:false,
    validarTerminos:false,
    validarEmail:false
};




var mf={
    inicioFormulario:function () {
        for(var i=0;i<pf.entradas.length;i++){
            pf.entradas[i].addEventListener("focus",mf.enFoco);
            pf.entradas[i].addEventListener("blur",mf.fueraFoco);
            pf.entradas[i].addEventListener("change",mf.cambioEntrada);
        }
    },
    enFoco:function (input) {
        pf.valor=input.target.value;
        if(pf.valor=="")
        {
            document.querySelector("#"+input.target.id).style.background="rgba(200,255,0.5)";
            document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity=1;
        }
        document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error");
    },
    fueraFoco:function (input) {
        document.querySelector("#"+input.target.id).style.background="white";
        document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity=0;

    },
    cambioEntrada:function (input) {
        pf.valor=input.target.value;
        if(pf.valor!=""){
            switch (input.target.id) {
                case "nombre":
                    if(pf.valor.length<2 || pf.valor.length>6){
                        document.querySelector("[for="+input.target.id+"] .error").innerHTML='<span style="color:red">*Rango debe ser entre 2 y 6 caracteres</span>';
                        pf.validarUsuario=false;
                    }
                    else {
                        document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                        pf.validarUsuario=true;
                    }
                    break;
                case "password":
                    pf.expresionRegular=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
                    if (!pf.expresionRegular.test(pf.valor)){
                        document.querySelector("[for="+input.target.id+"] .error").innerHTML='<span style="color:red">*Debe contener una mayuscula, un digito y una tamaño entre 8 y 15</span>';
                        pf.validarPassword=false;
                    }

                    else {
                            document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                            pf.validarPassword=true;
                    }
                    break;
                case "email":
                    pf.expresionRegular=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if (!pf.expresionRegular.test(pf.valor)){
                        document.querySelector("[for="+input.target.id+"] .error").innerHTML='<span style="color:red">*Ingrese un email válido</span>';
                        pf.validarEmail=false;
                    }

                    else {
                        document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
                        pf.validarEmail=true;
                    }

                    break;
            }
        }
        else {
            document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))
        }
    },
    validarFormulario:function () {
        pf.validarTerminos=document.querySelector("#terminosYCondiciones").checked;
        if(!pf.validarEmail || !pf.validarUsuario || !pf.validarPassword || !pf.validarTerminos) {
            document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">*Tiene errores en los datos ingresados, por favor revisar</span>';
            return false;
        }
        else if(!pf.validarTerminos){
            document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">*Acepte los terminos y condiciones</span>';

        }
        else return true;
    }
};

mf.inicioFormulario();