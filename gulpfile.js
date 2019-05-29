const gulp = require('gulp');
const series = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// Watch and Serve
gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: './src'
    });
    gulp.watch(['src/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/js/*.js'], gulp.series('js'));
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
}))

// Default
gulp.task('default', gulp.series('serve'));