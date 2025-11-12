import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductsDetails = () => {
    // this is id form loader of route
    const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetch("/product.json")
        .then(res => res.json())
        .then(data => {
            if (!productId) return;
            const id = parseInt(productId, 10);
            const item = data.find((item: any) => item.id === id)
            setProduct(item)
        })
    }, [productId])

    const {name, category, price, stoke, ratting, description, image} = product

    return (
        <div className='mt-20'>
            <img src={image} alt="" />
            <h2 className='text-4xl'>{name}</h2>
        </div>
    );
};

export default ProductsDetails;