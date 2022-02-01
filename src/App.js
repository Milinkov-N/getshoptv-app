import React from 'react'
import { Content } from './components'
import { AppContextProvider } from './contexts/AppContext'
import { PromoContextProvider } from './contexts/PromoContext'

export default function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <PromoContextProvider>
          <Content />
        </PromoContextProvider>
      </AppContextProvider>
    </React.StrictMode>
  )
}