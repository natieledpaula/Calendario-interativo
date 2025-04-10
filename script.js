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
}