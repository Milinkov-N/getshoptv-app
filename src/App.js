import React from 'react'
import Content from './components/Content'
import { AppContextProvider } from './contexts/AppContext'

export default function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    </React.StrictMode>
  )
}