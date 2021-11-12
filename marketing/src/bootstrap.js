import React from 'react'
import { render } from 'react-dom'
import App from './App'

const mount = (el) => {
  render(<App />, el)
}

if(process.env.NODE_ENV === 'development'){
  const el = document.querySelector('#_dev-marketing')

  if(el) mount(el)
}

export { mount }