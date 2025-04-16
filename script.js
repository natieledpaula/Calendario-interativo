function colorirDia() {
    // Pegar o valor de campo de dia
    let days = document.getElementById("day").value;
    //  Pegar o valor de campo de cor
    let color = document.getElementById("color").value;

    // Pegar os elementos da tabela
    let table = document.getElementById("calendar");

    // Verificar se o campo de dia foi preenchido
    if (!days) {
        alert("Preencha o campo de dia");
    } else if (days > 0 && days <= 30) {
    // Se o número de dias está no intervalo
    //  Aplicará a cor no dia correspondente
    // abaixo estão variáveis de bloco
    let td = calendar.getElementsByTagName("td")[parseInt(days)+ 1];

    td.style.backgroundColor = color;
    } else {
        alert("Digite um dia entre 1 e 30");
    }

    // Guarda a célula da tabela
    // Prestar atenção nesse trecho para prova
    let elementos = document.querySelectorAll("td");

    // Declara e inicializa o contador
    let contadorAzul = 0,
    contadorVerde = 0,
    contadorRosa = 0,
    contadorRoxo = 0;

    for (let i = 0; i < elementos.length; i++) {
    var estilo = window.getComputedStyle(elementos[i]);

    //  Obtém a cor de fundo atual da célula
    var corEstilo = estilo.backgroundColor;

    if (corEstilo === "rgb(172, 216, 230)" || corEstilo === "lightblue") {
        contadorAzul++;
    } else if (corEstilo === "rgb(152, 215, 152)" || corEstilo === "palegreen") {
        contadorVerde++;
    } else if (corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink") {
        contadorRosa++;
    } else if (corEstilo === "rgb(106, 90, 205)" || corEstilo === "slateblue") {
        contadorRoxo++;
    }
    }
}