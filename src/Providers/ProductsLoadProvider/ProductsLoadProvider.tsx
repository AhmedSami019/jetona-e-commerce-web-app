import { useEffect, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";


const ProductsLoadProvider = ({children}) => {

    const [products, setProduct] = useState([])

    useEffect(()=>{
        fetch("/product.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const value = {products}

    return (
        <ProductsLoadContext value={value}>
            {children}
        </ProductsLoadContext>
    );
};

export default ProductsLoadProvider;