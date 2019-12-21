const gulp = require('gulp');
const sass = require('gulp-sass');
const globImporter = require('node-sass-glob-importer');

sass.compiler = require('node-sass');

const sassCompilerOptions = {
  importer: globImporter(),
  outputStyle: 'compressed'
};

const images = () => {
  return gulp.src('./src/_assets/images/**/*')
    .pipe(gulp.dest('./public/assets/images'));
};

const stylesheets = () => {
  return gulp.src('./src/_assets/stylesheets/**/*.scss')
    .pipe(sass(sassCompilerOptions).on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/stylesheets'));
};

exports.build = gulp.parallel(images, stylesheets);

exports.watch = () => {
  gulp.watch('./src/_assets/images/**/*', images);
  gulp.watch('./src/_assets/stylesheets/**/*.scss', stylesheets);
};
