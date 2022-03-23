let entradasTexto = document.getElementsByClassName("entradas");
let labels = document.getElementsByClassName("descricao");
let div = document.querySelector("section");
let enviar = document.querySelector("form"); 

enviar.addEventListener('submit',function(event){
    event.preventDefault();
    cartao();    
});
   
function cartao(){
    let lista = estruturaCartao();
    let divCartao = document.createElement("div");
    lista[0].setAttribute("src",entradasTexto[5].value);
    lista[0].style="width:200px; height:200px; border:2px solid black; border-radius:20px";
    
    for(let i=0; i<lista.length-1; i++){
        let nodeText = document.createTextNode(entradasTexto[i].value);
        lista[i+1].appendChild(nodeText);
        lista[i+1].style = `color:${entradasTexto[4].value}; word-break: break-word`;
    };

    divCartao.style=`background-color:${entradasTexto[3].value};`;
    divCartao.className='cards';

    divCartao.appendChild(lista[1]);
    divCartao.appendChild(lista[0]);
    divCartao.appendChild(lista[2]);
    divCartao.appendChild(lista[3]);
    /* lista.forEach(function(item){
        divCartao.appendChild(item);
    }); */
    div.appendChild(divCartao);
    }

function estruturaCartao(){
    let url = document.createElement("img");
    let categoria = document.createElement("h1");
    let titulo = document.createElement("h3");
    let descricao = document.createElement("p");
    
    return [url, categoria, titulo, descricao];
}