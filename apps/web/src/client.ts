import type { App } from '@server/index'

import { treaty } from '@elysia/eden'

export const client = treaty<App>('http://localhost:3000', {
  fetch: { credentials: 'include' },
})
