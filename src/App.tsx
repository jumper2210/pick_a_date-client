import React from 'react'
import { Home } from './containers/Home/Home'
import { GlobalStyle } from './theme/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}
