function boaNoticia(nota){
    if(nota>=7){
        console.log('Aprovado com '+ nota);
    }
}
boaNoticia(8.1);
boaNoticia(6.1);

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('E Veradade e eu falo...... ' +  valor); 
       }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo('Teste');