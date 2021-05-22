let playWins = 0;
let compWins = 0;

const game = (compNum , playNum)=>{
    if (playNum === 1) {
        switch (compNum) {
            case 3:
                playWins ++;
                document.write('Ganaste!<br>');
                break;
            case 2:
                compWins ++;
                document.write('Perdiste!<br>');
                break;
            default:
                document.write('Empate!<br>');
        }
    }else if (playNum === 2) {
        switch (compNum) {
            case 1:
                playWins ++;
                document.write('Ganaste!<br>');
                break;
            case 3:
                compWins ++;
                document.write('Perdiste!<br>');
                break;
            default:
                document.write('Empate!<br>');
        }
    }else if (playNum === 3) {
        switch (compNum) {
            case 2:
                playWins ++;
                document.write('Ganaste!<br>');
                break;
            case 1:
                compWins ++;
                document.write('Perdiste!<br>');
                break;
            default:
                document.write('Empate!<br>');
        }
    }
}

const compu = ()=>{
    compNum = Math.floor(Math.random() * 5) + 1;
    return compNum;
};


const player = ()=>{

    let playNum = parseInt(prompt('Arranca noma, 1)Piedra, 2)Papel o 3)Tijeras?'));

    if (playNum === 1 || playNum === 2 || playNum === 3) {
        return playNum;
    }else {
        alert('Hay 3 opciones jugosho! 1, 2 o 3...');
        player();
    };
};

//The game beggins here

const saludo = (answer)=>{
    if(answer.toUpperCase() === 'SI'){
        alert('Joya... Arrancamo entonce..!');
        for (let i = 1; i <= 5; i++) {
            game(compu(), player());
            document.write(`Ronda ${i} compu: ${compWins} jugador: ${playWins}<br><br>`);
        };
    }else {
        document.write('QUE PEDAZO DE ORTIBA!');
    }
};

saludo(prompt('Hola wachin, jugamos al piedra papel o tijera? si o no?'));