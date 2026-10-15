import { createRoot } from 'react-dom/client'

import { App } from './App'

const appElement = document.getElementById('app')
if (!appElement) {
  throw new Error('未找到 #app 挂载节点')
}

createRoot(appElement).render(<App />)
