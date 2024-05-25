import React, {useEffect, useState} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../API/endPoints' 
import classes from './Results.module.css'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function Results() {
  const [results,setResults]=useState([])
  const {categoryName}=useParams()
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    // setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
      setResults(res.data)
      // console.log(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  },[])
 
  return (

    <LayOut>
    <>
    {
    isLoading ? (<Loader/>):(<section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
      </section>)
    }
   </>
  </LayOut>
    
  )
}

export default Results
