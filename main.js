const botoes = document.querySelectorAll("botao")
const texto = document.querySelectorAll("aba-conteudo")
const contadores = document.querySelectorAll ("contador")  

const tempoObjetivo01 = new date ("2025-05") 
let tempoAtual = new date ();

  for (let i=0; i < botoes.length; i++){

  botoes[i].onclick = function (){
    
    for(let j=0; j<botoes.length;j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }
       botoes[i].classList.add("ativo");
       textos[i].classList.add("ativo");
  }
  }

  function calculaTempo(tempoObjetivo){
    let tempoAtual= new date();
    let tempoFinal= tempoObjetivo- tempoAtual;

    let segundos= Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);


    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return
  }