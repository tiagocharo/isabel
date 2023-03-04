import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html,
body {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%; /* 62.5% of 16px = 10px */
    margin: 0;
    overflow-y: auto;
    padding: 0;
    height: 100vh;
    width: 100vw;
}

button,
a {
    cursor: pointer;
}

@media (max-width: 768px) {
  html {
    font-size: 50%;
  }
}

`
