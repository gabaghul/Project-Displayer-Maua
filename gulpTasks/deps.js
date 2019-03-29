const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('deps', ['deps.js', 'deps.css'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/aos/dist/js/aos.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.min.js'
    ])
        .pipe(babel({ presets:['env'] })) 
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('build/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/boostrap.min.css', 
        'node_modules/aos/dist/css/aos.css'])
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/css'))
})