import React, {useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';

function Home() {
    const [ product , setProduct] = useState([]);

    const loadproduct = async () => {
        const response = await axios.get("/products");
        setProduct(response?.data?.data);
    }

    useEffect (() => {
        loadproduct();
    }, []);

  return (
    <div>
        <h1 className='text-center'>All Products</h1>
        {
          product?.map((product, index)=>{
            return(<div className ='product-card'>
              <h1>{product.name}</h1>)
              <h2>{product.price}</h2>
              <p>{product.description}</p>
              </div>)
          })        
        }
    </div>
  )
}

export default Home ;