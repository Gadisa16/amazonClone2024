import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx';
import CarouselEffect from './Components/Carousol/Carousel.jsx';
import Category from './Components/Catagories/Category.jsx';
import Product from './Components/Product/Product.jsx';
import Routing from './Router.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routing/>
     
      </>
  )
}

export default App
