import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        try {
            fetch("../../../public/product.json")
            .then(res => res.json())
            .then(data => setProducts(data))
        } catch (error) {
            toast.error("the data not fetched");
            console.log(error);
        }
    }, [])
    console.log(products);


    return (
        <div>
            <h2>this is products section</h2>
        </div>
    );
};

export default Products;
