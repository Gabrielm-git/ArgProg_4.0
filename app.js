//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=11;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let htmlcss = document.getElementById("htmlcss");
crearBarra(htmlcss);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let reparacionImpresoras = document.getElementById("reparacionImpresoras");
crearBarra(reparacionImpresoras);
let reparacionMonitores = document.getElementById("reparacionMonitores");
crearBarra(reparacionMonitores);
let php = document.getElementById("php");
crearBarra(php);
let servicioTecnico = document.getElementById("servicioTecnico");
crearBarra(servicioTecnico);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada una
//cada posicion del arreglo  pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalhtmlcss = setInterval(function(){
            pintarBarra(htmlcss, 11, 0, intervalhtmlcss);
        },100);
        const intervalreparacionImpresoras = setInterval(function(){
            pintarBarra(reparacionImpresoras, 9, 1, intervalreparacionImpresoras);
        },100);
        const intervaljavascript = setInterval(function(){
            pintarBarra(javascript, 10, 2, intervaljavascript);
        },100);
        const intervalreparacionMonitores = setInterval(function(){
            pintarBarra(reparacionMonitores, 9, 3, intervalreparacionMonitores);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 11, 4, intervalPhp);
        },100);
        const intervalservicioTecnico = setInterval(function(){
            pintarBarra(servicioTecnico, 10, 5, intervalservicioTecnico);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#0523FA";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}