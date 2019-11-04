const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')
const nunjucks = require('gulp-nunjucks')
const connect = require('gulp-connect')
const rename = require('gulp-rename')

styles = () => {
  return src('./_source/main.scss')
    .pipe(sass({
      includePaths: 'node_modules'
    }))
    .pipe(dest('./_site/'))
}

pages = () => {
  return src('./_source/index.njk')
    .pipe(nunjucks.compile())
    .pipe(rename(function (path) {
      path.extname = ".html";
    }))
    .pipe(dest('./_site/'))
}

server = () => {
  connect.server({
    root: ['_site','node_modules/govuk-frontend/govuk/assets'],
    livereload: true,
    port: 8181
  })
}

exports.default = (cb) => {
  server()
  watch(
    ['./_source/**/*.scss', './_source/**/*.njk'],
    { ignoreInitial: false },
    series(styles, pages)
  )
  cb()
}

exports.build = series(styles, pages)