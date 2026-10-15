import type { Article } from '@server/index'

import { useEffect, useState } from 'react'

import { client } from './client'

export const App = () => {
  const [article, setArticle] = useState<Article>()

  useEffect(() => {
    void client.article.get().then(({ data }) => {
      setArticle(data ?? { title: '', content: '' })
    })
  }, [])

  return (
    <article>
      <h1>{article?.title}</h1>
      <p>{article?.content}</p>
    </article>
  )
}
