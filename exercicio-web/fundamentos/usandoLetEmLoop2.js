const funcs = []//LET TEM MEMORIA DURANTE O LOOP
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();
funcs[6]()