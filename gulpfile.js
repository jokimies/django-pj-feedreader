var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

var eslint = require('gulp-eslint');

var gzip_options = {
    threshold: '1kb',
    gzipOptions: {
        level: 9
    }
};

/* Compile Our Sass */
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static/stylesheets'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('static/stylesheets'))
        .pipe(gzip(gzip_options))
        .pipe(gulp.dest('static/stylesheets'))
        .pipe(livereload());
});

gulp.task('js', function () {
    gulp.src('pjfeedreader/static/js/**/*.js')
	.pipe(notify({ message: 'Finished minifying JavaScript'}));
    //.pipe(livereload())
});

gulp.task('lint', function () {
    return gulp.src(['pjfeedreader/static/js/**/*.js'])
        // eslint() attaches the lint output to the eslint property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failOnError last.
        .pipe(eslint.failOnError());
});

/* Watch Files For Changes */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('scss/*.scss', ['sass']);

    /* Trigger a live reload on any Django template changes */
    gulp.watch('**/templates/*').on('change', livereload.changed);
    /* angular template loads */
    gulp.watch('pjfeedreader/static/templates/**/*.html').on('change', livereload.changed);
    gulp.watch('pjfeedreader/static/js/**/*.js', ['lint']).on('change', livereload.changed);

});

gulp.task('default', ['sass', 'watch', 'lint']);
