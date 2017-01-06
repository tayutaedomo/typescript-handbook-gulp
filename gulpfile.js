var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsproject', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist'));
});


//var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var paths = {
  //pages: ['src/*.html']
  pages: ['src/index.html']
};

gulp.task('copy-html', function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', ['copy-html'], function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main3.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});


//var gulp = require('gulp');
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
var watchify = require('watchify');
//var tsify = require('tsify');
var gutil = require('gulp-util');
var paths2 = {
  //pages: ['src/*.html']
  pages: ['src/index2.html']
};

gulp.task('copy-html2', function () {
  return gulp.src(paths2.pages)
    .pipe(gulp.dest('dist'));
});
var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/main4.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify));

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source('bundle2.js'))
    .pipe(gulp.dest('dist'));
}

gulp.task('watchify', ['copy-html2'], bundle);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);


//var gulp = require('gulp');
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
//var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths3 = {
  pages: ['src/index3.html']
};

gulp.task('copy-html3', function () {
  return gulp.src(paths3.pages)
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['copy-html3'], function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main5.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle3.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});


//var gulp = require('gulp');
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
//var tsify = require('tsify');
//var sourcemaps = require('gulp-sourcemaps');
//var buffer = require('vinyl-buffer');
var paths4 = {
  //pages: ['src/*.html']
  pages: ['src/index4.html']
};

gulp.task('copyHtml', function () {
  return gulp.src(paths4.pages)
    .pipe(gulp.dest('dist'));
});

gulp.task('babelify', ['copyHtml'], function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main6.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle4.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

