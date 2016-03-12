var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var merge = require('utils-merge');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnested = require('postcss-nested');
var cssimport = require('postcss-import');
var cssextend = require('postcss-extend');
var csssimplevars = require('postcss-simple-vars');
var nano = require('gulp-cssnano');
var del = require('del');

var paths = {
  js: 'src/js/**/*.js',
  img: 'src/img/**/*',
  css: 'src/css/**/*.{css,scss,sass}'
};

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function () {
  browserSync({
    files: [
      'public/js/*.js',
      'public/img/**/*',
      'public/fonts/**/*',
      'views/**/*.jade'
    ],
    proxy: 'http://localhost:3000/',
    port: '8000',
    reloadDelay: 800
  });
});

// Clean tasks
gulp.task('clean', function () {
  return del(['public/css', 'public/css', 'public/css']);
});
gulp.task('clean-css', function () {
  return del(['public/css']);
});
gulp.task('clean-js', function () {
  return del(['public/css']);
});
gulp.task('clean-img', function () {
  return del(['public/css']);
});

// Build CSS-DEV
gulp.task('css-dev', function () {
  var processors = [
    cssimport,
    csssimplevars,
    cssextend,
    cssnested
  ];
  return gulp.src('./src/css/main.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

// Build CSS
gulp.task('css', function () {
  var processors = [
    cssimport,
    csssimplevars,
    cssextend,
    cssnested
  ];
  return gulp.src('./src/css/main.css')
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(nano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream: true}));
});

gulp.task('develop', function () {
  return nodemon({
    script: 'bin/www',
    ext: 'js jade',
    stdout: false,
    ignore: ['src/**/*', 'public/css/**/*', 'public/img/**/*']
  }).on('readable', function () {
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

// Build JS-DEV
gulp.task('watchify', function () {
  var args = merge(watchify.args, {debug: true});
  var bundler = watchify(browserify('./src/js/main.js', args)).transform(babelify, {});
  bundle_js(bundler);

  bundler.on('update', function () {
    bundle_js(bundler);
  });
});

function bundle_js (bundler) {
  return bundler.bundle()
  .on('error', gutil.log)
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(gulp.dest('js'))
  .pipe(sourcemaps.init({ loadMaps: true }))
    // capture sourcemaps from transforms
    .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('public/js'));
}

// Build JS
gulp.task('js', function () {
  var bundler = browserify('./src/js/main.js').transform(babelify, {});

  return bundler.bundle()
  .on('error', gutil.log)
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/'));
});

// Build Img
gulp.task('img', function () {
  return gulp.src(paths.img)
    .pipe(plumber())
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('public/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.css, ['css-dev']);
  gulp.watch(paths.img, ['img']);
  // gulp.watch(paths.js, ['js-dev']);
});

// Default task to be run with `gulp`.
gulp.task('default', function () {
  runSequence(
    [
      'css-dev',
      'watchify',
      'img'
    ],
    'watch',
    'develop',
    'browser-sync'
  );
});

gulp.task('build', ['clean'], function () {
  runSequence(['js', 'css', 'img']);
});

// gulp.task('default', [
//   'develop'
// ]);
