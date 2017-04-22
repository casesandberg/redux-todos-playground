import React from 'react'
import { render } from 'react-dom'
import { ProvideStore } from 'react-next'
import App from './components/App'

render(
  <ProvideStore>
    <App />
  </ProvideStore>,
  document.getElementById('root')
)
