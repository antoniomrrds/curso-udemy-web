/*//PARA INSTALAR O GULP GLOBAL => npm install --global gulp-cli*/
//para inportar o require
const gulp = require('gulp')
/*Aqui no caso serve pra executar em para as tags =>  series = executar em serie ; e parallel = para executar em paralelo*/ 
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefas Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefas Antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}


//para exportar usa  o default 
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)