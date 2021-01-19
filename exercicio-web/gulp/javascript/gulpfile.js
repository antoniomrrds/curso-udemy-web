const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')//uglify serve para converter o codigo em algo minificado
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    /*Este comando faz com que ele procure em cada sub pasta para achar o arquivo que vc escolheu */
  return  gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .on('error', err => console.log(err))
    .pipe(gulp.dest('build'))
    // return cb()
}
function fim(cb) {
    console.log('Fim!!!')

    return cb()
}

exports.default = series(transformacaoJS,fim)