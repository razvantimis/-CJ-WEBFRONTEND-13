const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

app.use(cors());
app.use(bodyParser());

async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

router.get('/games', async ctx => {
  await sleep(2000)
  ctx.body = db.get('games')
});

router.get('/games/:id', async ctx => {
  ctx.body = db.get('games').find({ _id: ctx.params.id });
});


router.post('/games', async ctx => {
  const post = await db.get('games')
    .push(ctx.request.body)
    .last()
    .assign({ _id: Date.now().toString() })
    .write()

  ctx.body = post;
});



router.delete('/games/:id', async ctx => {
  const posts = await db.get('games')
    .remove({ _id: ctx.params.id })
    .write()
  ctx.body = posts[0];
})

router.put('/games/:id', async ctx => {
  const post = await db.get('games')
    .find({ _id: ctx.params.id })
    .assign({ ...ctx.request.body })
    .write()
  ctx.body = post;
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);