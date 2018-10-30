/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL SCROLL
=============================================*/

var ps = {

	posicionScroll: 0,
	articulos: document.querySelectorAll("#scroll article"),
	cajaScroll: document.querySelector("#scroll"),
	cabezote: document.querySelector("header")

}


/*=============================================
EL OBJETO CON LOS MÉTODOS DEL SCROLL
=============================================*/

var ms = {

	inicioScroll: function() {

		document.addEventListener("scroll", ms.efectoParallax)

	},

	efectoParallax: function() {

		ps.posicionScroll = window.pageYOffset;

		console.log(ps.posicionScroll);

		if (ps.posicionScroll > 100) {

			ps.cabezote.style.position = "fixed";
			ps.cabezote.style.zIndex = 10;

		} else {

			ps.cabezote.style.position = "relative";
			ps.cabezote.style.zIndex = 0;

		}

		if (ps.posicionScroll > ps.cajaScroll.offsetTop - 200) {

			for (var i = 0; i < ps.articulos.length; i++) {

				ps.articulos[i].style.marginLeft = "0%";

			}

		} else {

			for (var i = 0; i < ps.articulos.length; i++) {

				ps.articulos[i].style.marginLeft = ps.posicionScroll / 25 - 100 + "%";

			}

		}
	}

}

ms.inicioScroll();