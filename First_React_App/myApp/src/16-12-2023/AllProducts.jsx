import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AllProducts = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            
            const res = await axios.get('https://fakestoreapi.com/products')
            console.log(res.data)
            setData(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div>
                <h1>All Products</h1>
                {
                    data.map(({ category, description, image, price, title, id, rating }) => {
                        return (
                            <>
                                <div key={id}>
                                    <h1>{category}</h1>
                                    <h3>{description}</h3>
                                    <img src={image} style={{ height: '200px', width: '200px' }} alt="img" />
                                    <p>{price}</p>
                                    <p>{rating.rate}</p>
                                    <p>{title}</p>
                                    <hr></hr>
                                </div>
                            </>
                        )
                    })
                    }
            </div>
        </>
    )
}

export default AllProducts