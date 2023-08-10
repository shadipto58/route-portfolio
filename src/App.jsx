
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Hero from './components/Hero section/Hero'
import Exprience from './components/Exprience/Exprience'
import Main from './components/Main/Main'
import About from './components/About/About'
import Service from './components/Service/Service'
import Review from './components/Review/Review'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Hero></Hero>
        },

        {
          path: '/exprience',
          element: <Exprience></Exprience>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/service',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Service></Service>
        },
        {
          path: '/review',
          element: <Review></Review>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
