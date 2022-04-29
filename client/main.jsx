import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider } from '@chakra-ui/provider'

import theme from './theme.js'
import store from './store'
import App from './App'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain='whai-2022-anna.au.auth0.com'
        clientId='7drE4mJaUyrfdQAL94UqUFKirXnc84AE'
        redirectUri={window.location.origin}
        audience='https://pets-n-pats/api'
      >
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
)
