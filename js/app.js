const comentarios = document.querySelectorAll('.comentario__cuadricula');
const comentarioFotoIzq = document.querySelectorAll('.comentario .r-izq');
const comentarioFotoDer = document.querySelectorAll('.comentario .r-der');
// document.addEventListener("DOMContentLoaded", function(){
//     eventos()
// })

comentarios[0].addEventListener("mouseover",function(){
    comentarioFotoIzq[0].style.transform = "translateX(0%)";
    comentarios[0].onmouseout = function(){
        comentarioFotoIzq[0].style.transform = "translateX(-100%)";
    }
})
comentarios[2].addEventListener("mouseover",function(){
    comentarioFotoIzq[1].style.transform = "translateX(0%)";
    comentarios[2].onmouseout = function(){
        comentarioFotoIzq[1].style.transform = "translateX(-100%)";
    }
})
comentarios[3].addEventListener("mouseover",function(){
    comentarioFotoDer[1].style.transform = "translateX(0%)";
    comentarios[3].onmouseout = function(){
        comentarioFotoDer[1].style.transform = "translateX(100%)";
    }
})
comentarios[1].addEventListener("mouseover",function(){
    comentarioFotoDer[0].style.transform = "translateX(0%)";
    comentarios[1].onmouseout = function(){
        comentarioFotoDer[0].style.transform = "translateX(100%)";
    }
})


// comentarios.addEventListener('mouseover', function(){
//     comentarioFotoIzq.style.transform = "translateX(0%)";
//     comentario.onmouseout = function(){
//         comentarioFotoIzq.style.transform = "translateX(-100%)"
// }
// })
