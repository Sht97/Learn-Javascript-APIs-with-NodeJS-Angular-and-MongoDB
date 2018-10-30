var pf={
    entradas:document.querySelectorAll("input.validar"),
    valor:null,
};




var mf={
    inicioFormulario:function () {
        for(var i=0;i<pf.entradas.length;i++){
            pf.entradas[i].addEventListener("focus",mf.enFoco)
        }
    },
    enFoco:function (input) {
        pf.valor=input.target.value;
        if(pf.valor=="")
        {
            document.querySelector("#"+input.target.id).style.background="rgba(200,255,0.5)";
            document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity=1;
        }
    }
};

mf.inicioFormulario();