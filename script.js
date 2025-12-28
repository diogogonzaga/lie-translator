  const mensagem = document.getElementById("msg");
    const botao = document.getElementById("verify");
    const resultado = document.getElementById("result_sorry");

    const respostas = [
      "Convincente, mas ainda estou desconfiado 😏",
      "Hmmmmm, ok desta vez vou aceitar 🙂",
      "Suspeito 🤨",
      "Tás a mentir, tenho certezaaa 🚨"
    ];

    botao.addEventListener("click", function () {
      if (mensagem.value.trim() !== "") {
        resultado.textContent = "Analisando";
        let dots = 0;
        const interval = setInterval(() => {
          dots = (dots + 1) % 4;
          resultado.textContent = "Analisando" + ".".repeat(dots);
        }, 500);
        const percentagem = Math.floor(Math.random() * 101); // 0 a 100
        let frase;
        if (percentagem < 25) {
          frase = respostas[0];
        } else if (percentagem < 50) {
          frase = respostas[1];
        } else if (percentagem < 75) {
          frase = respostas[2];
        } else {
          frase = respostas[3];
        }
        setTimeout(() => {
          clearInterval(interval);
          resultado.textContent = `${frase} (${percentagem}%)`;
        }, 2000);
      } else {
        resultado.textContent = "Por favor, digite algo!";
      }
    });





// const mensagem = document.getElementById("msg");
// const botao = document.getElementById("verify");
// const resultado = document.getElementById("result_sorry");
// const respostas=[
// "Convincente mas ainda estou desconfiado",
// "Hmmmmm, ok desta vez vou aceitar",
// "Suspeito",
// "Tás a mentir, tenho certezaaa"
// ];


// botao.addEventListener("click", function () {
//   if (mensagem.value.trim() === "") {
//     // mostrar "Analisando..." imediatamente
//     resultado.textContent = "Analisando...";
//     let percentagem = Math.floor(Math.random() * 101); // 0 a 100
//     let frase;
//     if(percentagem < 25)
//     {
//         frase= respostas[0];
//     }
//     else if(percentagem < 50)
//     {
//         frase = respostas[1];
//     }
//     else if (percentagem < 75)
//     {
//         frase = respostas[2];
//     }
//     else{
//         frase = respostas[3];
//     }
//     // depois de 2 segundos, mudar o texto
//     setTimeout(() => {
//         document.getElementById("resultado").innerText = 
//   `${frase} (${percentagem}%)`;
// ;
//     }, 2000);

//     return;
//   }
// });
