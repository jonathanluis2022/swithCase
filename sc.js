function getDiaSemnas (diaDaSemana) {
    let diaSemanaTexto ;

        switch (diaDaSemana) { // a variavel que eu quero checar
        case 0 : //caso o dia da semana for 0 faça isso (domingo)
            diaSemanaTexto = 'Domingo'; //caso for verdadeira ele ja vai parar por ai msm no break/return
            return diaSemanaTexto;
            case 1 :
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
            case 2 :
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
            case 3 :
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
            case 4 :
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
            case 5 :
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
            case 6 :
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        }
        
}


const data  = new Date   ('1987-06-20  00:00:00');

const diaDaSemana = data.getDay();  //dia da semana (getDay)
const diaSemanaTexto = getDiaSemnas (diaDaSemana); //com a function q acabei de criar posso usar ela omde eu quizer 


console.log (diaDaSemana , diaSemanaTexto);
