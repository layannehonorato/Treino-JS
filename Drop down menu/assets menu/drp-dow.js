//MENU DROPDOW
var menuDrop = document.getElementById("menudrop") //Seleciona o elemento do menu dropdow
var classList = menuDrop.classList //guarda a lista de classes ativas no menu dropdow

function myFunction(){
    if(classList == "drop-dow-off"){//se na lista tiver a classe drop-dow-off
        menuDrop.classList.remove( "drop-dow-off"); //ela exclui a classe drop-dow-off
        menuDrop.classList.add( "drop-dow-on"); //e adiciona a classe drop-dow-on
    }else{ //se na lista não tiver a classe drop-dow-off
        menuDrop.classList.remove( "drop-dow-on"); //ela exclui a classe drop-dow-on
        menuDrop.classList.add( "drop-dow-off"); //e adiciona a classe drop-dow-off
    }
}

var menuAction = document.getElementById("menuAction"); //Seleciona o elemento do menu (Dropdow)
menuAction.addEventListener('click', myFunction); //quando clicado ele chama a função

