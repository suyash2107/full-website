import React, {useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';

function Home() {
    const [ product , setProduct] = useState([]);

    const loadProduct = async () => {
        const response = await axios.get("/products");
        console.log(response);
    }

    useEffect (() => {
        loadProduct();
    }, []);

  return (
    <div>
        <h1 className='text-center'>All Products</h1>
    </div>
  )
}

export default Home ;