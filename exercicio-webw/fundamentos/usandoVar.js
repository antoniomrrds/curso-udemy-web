{ 
    { 
        {
             { 
                 var sera = 'sera????' 
                 console.log(sera);//global pois não esta dentro de uma função
                } 
            } 
        } 
    }


console.log(sera);

function  teste (){
    var local = 123
    console.log(local)
}

teste()
console.log(local)