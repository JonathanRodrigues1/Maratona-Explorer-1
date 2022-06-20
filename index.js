const elementoRespota = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decidamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provalmente.",
  "Não é possivel prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar am fazer pergunta
function fazerPergunta(){

  if(inputPergunta.value == ""){
    alert("Digte sua pergunta!")
    return
  }

 buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoRespota.innerHTML = pergunta + respostas [numeroAleatorio]

  elementoRespota.style.opacity = 1;
  
  // sumir a reposta depois de 3 segundos
  setTimeout(function() {
    elementoRespota.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}