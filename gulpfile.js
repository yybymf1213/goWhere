let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
function fnScss(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass()) //先编译
        .pipe(cssnano()) //再压缩
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}
function fnJs(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('./dist/js'));
}

//导出模块
exports.scss = fnScss;
exports.js = fnJs;