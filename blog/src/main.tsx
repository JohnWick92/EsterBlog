import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { client } from './lib/apollo'
import React from 'react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
