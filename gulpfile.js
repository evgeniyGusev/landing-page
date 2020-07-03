const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');

gulp.task('sass-compile', function() {
  return gulp.src('./scss/global.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/global.css'))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
})

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})
