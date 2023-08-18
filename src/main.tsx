import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'
import FrontofficeStyle from './components/FrontofficeStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FrontofficeStyle />
    <AppRouter />
  </React.StrictMode>,
)
