import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import HomeScreen from './routes/homeScreen'

export type ImageFeed = {
  title?: string
  link?: string
  media?: {m: string}
  description?: string
  tag?: boolean
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeScreen />} />
    </>
  )
)

const App: React.FunctionComponent = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
