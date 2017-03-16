const Koa = require('koa'),
      server = require('koa-static'),
      path = require('path'),
      app = new Koa()

app.use(server(path.resolve('dist')))

app.listen(3000, () => {
    console.log('服务器开启成功')
})