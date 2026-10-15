import cors from '@elysia/cors'
import cron, { Patterns } from '@elysia/cron'
import { Elysia, status, t } from 'elysia'
import { type Static } from 'elysia/type'

const articleResponse = t.Object({
  title: t.Nullable(t.String()),
  content: t.Nullable(t.String()),
})

export type Article = Static<typeof articleResponse>

const article = new Elysia({ prefix: 'article' }).get(
  '/',
  {
    response: {
      200: articleResponse,
    },
  },
  () => {
    return status(200, { title: 'aritle-1', content: 'hello world' })
  },
)

const app = new Elysia()
  .use(
    cron({
      name: 'heartbeat',
      pattern: Patterns.everyHours(24),
      run() {
        console.log('Heartbeat')
      },
    }),
  )
  .use(
    cors({
      origin: ['http://localhost:4016'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  )
  .use(article)
  .listen('3000', () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}\n`)
  })

export type App = typeof app
