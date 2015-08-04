var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var ts = require('gulp-typescript');


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
