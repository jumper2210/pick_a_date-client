import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
        border: 0;
        margin: 0;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        outline: 0 !important;
    }
     button, button:focus {
         outline: 0 !important;
     }

      html {
        font-size: 62.5%;
  }
  b {
     font-weight: 500
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
  }`
