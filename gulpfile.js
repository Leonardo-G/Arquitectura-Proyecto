const { series, dest, src } = require('gulp');
const imagemin = require('gulp-imagemin');
const imgWebp = require('gulp-webp');

function imagenes(){
    return src('./img/*')
    .pipe( imagemin())
    .pipe( dest ('./img/imagemin'))
}
function webp(){
    return src('./img/*')
    .pipe( imgWebp() )
    .pipe( dest( './img/imgWebp') )
}



exports.imagenes = imagenes;
exports.webp = webp;
