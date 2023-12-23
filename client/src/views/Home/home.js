import React, {useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';

function Home() {
    const [ products , setProduct] = useState([]);

    const loadproducts = async () => {
        const response = await axios.get("/products");
        setProduct(response?.data?.data);
    }

    useEffect (() => {
        loadproducts();
    }, []);

  return (
    <div>
        <h1 className='text-center'>All Products</h1>
        {
          products?.map((product, index)=>{
            const {_id, name, price, description, image} = product;
            return(<productcard key={index} id={_id} name={name} description={description} price={price} image={image}/>)
          })        
        }
    </div>
  )
}

export default Home ;