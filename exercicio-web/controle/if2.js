function testeAlpha(num) {
    if(num>7)//Estrutura de controle sem o colchete do if considera apenas uma linha de codigo
        console.log(num)

        console.log('Final')
    }



    testeAlpha(6);
    testeAlpha(8.1);   

    function testeBeta(num) {
        if(num>7);{//cuidado com ";" nao usar nas estruturas de controle 
            console.log(num)


        }
        
    }
    testeBeta(6)
    testeBeta(8)