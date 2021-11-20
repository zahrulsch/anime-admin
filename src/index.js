import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme.chakra'
import '@fontsource/open-sans'
import './index.css'

console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('mantra-root')
)
