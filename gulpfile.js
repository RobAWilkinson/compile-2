var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var ts = require('gulp-typescript');
var flow = require('gulp-flowtype');

gulp.task('sass', function() {
    return gulp.src('sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('output/css/'))
});
gulp.task('less', function () {
  gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('output/css/'));
});

gulp.task('coffee', function() {
  gulp.src('coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', console.log))
    .pipe(gulp.dest('./output/js/'))
});
 
gulp.task('typescript', function () {
  var tsResult = gulp.src('typescript/main.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'main.js'
      }));
  return tsResult.js.pipe(gulp.dest('output/js'));
});
gulp.task('typecheck', function() {
  return gulp.src('./flowtype/main.js')
    .pipe(flow({
        all: false,
        weak: false,
        declarations: './flowtype/declarations',
        killFlow: false,
        beep: true,
        abort: false
    }))
    .pipe(gulp.dest('./output/js/'))
})
