import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RouterProvider} from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"

import {router} from './routes/routes.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" >
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

export default App
