import React from 'react'
import Layout from "../../Components/Layout/LayOut"
import Carousel from "../../Components/Carousol/Carousel"
import Category from '../../Components/Catagories/Category';
import Product from "../../Components/Product/Product"
function Landing() {
  return (
    <Layout>

     <Carousel />
      <Category />
      <Product />
      
    </Layout>
  )
}

export default Landing
