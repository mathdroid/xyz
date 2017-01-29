const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const matchId = route('/blog/:year/:slug')
const matchYear = route('/blog/:year')

const PORT = process.env.PORT || 3000

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const params = matchId(pathname) || matchYear(pathname)
    if (params === false) {
      handle(req, res)
      return
    }
    app.render(req, res, '/blog', params)
  })
  .listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
