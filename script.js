function colorDia() {
    //pegar valor de campo de dia
    let days = document.getElementById('day').value;
    //pegar valor de campo de cor
    let color = document.getElementById('color').value;
    //pegar os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

    //Verificar se o campo de dia foi prenchido
    if(days != '') {
        alert('Por favor informar o dia');
    } else if((days > 0) && (days < 31)) {
        //Se o numero de dias está no intervalo aplicara a cor na celula do calendario
        let td = calendar.getElementsByTagName('td') [parseInt(days)+ 1];
        td.style.backgroundColor = color;
    } else {
        alert("Por favor informar um dia do calendário");
    }

    //Guardar a celula da tabela
    //Preste atenção essa parte vai ser importante para prova
    let elementos = document.getElementById('td');
    //Declarar e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    //Loop para verificar o estilo de cada celula e cotar quantas tem cor e qual cor
    for(let i = 0; i < elementos.length; i++) {
        //Obtem o estilo computado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);
        //Obtem a cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;
        //Verifica a cor e incrementar contador correspondente
        if(corEstilo == "rgb(173, 216, 230)" || corEstilo == "LightBlue") {
            contadorAzul++;
        } else if(corEstilo == "rgb(152, 251, 152)" || corEstilo == "PaleGreen") {
            contadorVerde++;
        } else if(corEstilo == "rgb(255, 192, 203)" || corEstilo == "LightPink") {
            contadorRosa++;
        } else if(corEstilo == "rgb(106, 90, 205)" || corEstilo == "SlateBlue") {
            contadorRoxo++;
        }
    }
}