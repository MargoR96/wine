const { src, dest, watch, series, parallel } = require('gulp');

const del = require('gulp-clean');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import');

const { create } = require('browser-sync');
const sync = create();

function reload(done) {
  sync.reload();

  done();
}

function clean() {
  return src('dist', { read: false, allowEmpty: true }).pipe(del())
}

function html() {
  return src('src/*.html').pipe(dest('dist'));
}

function styles() {
  const plugins = [
    cssimport(),
    autoprefixer(),
  ];

  return src('src/css/style.css')
    .pipe(postcss(plugins))
    .pipe(dest('dist/assets/styles'))
    .pipe(sync.stream());
}

function scripts() {
  return src('src/scripts/**/*.js').pipe(dest('dist/assets/scripts'));
}

function fonts() {
  return src('src/fonts/**/*.{woff,woff2}').pipe(dest('dist/assets/fonts'));
}

function images() {
  return src('src/img/**/*.{jpg,png,svg}').pipe(dest('dist/assets/img'));
}

function serve() {
  sync.init({
    server: {
      baseDir: './dist'
    }
  });

  watch('src/*.html').on('change', series(html, reload));
  watch('src/css/*.css').on('change', styles);
  watch('src/scripts/**/*.js').on('change', series(scripts, reload));
  watch('src/img/**/*').on('change', images);
  watch('src/fonts/**/*').on('change', fonts);
}

exports.default = series(clean, parallel(html, fonts, images, styles, scripts), serve);