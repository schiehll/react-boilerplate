import React from 'react'
import { unstable_createRoot as createRoot } from 'react-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))

const render = Component => {
  root.render(<Component />)
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
