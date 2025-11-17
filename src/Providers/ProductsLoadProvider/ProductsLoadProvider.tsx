import { useEffect, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";


const ProductsLoadProvider = ({children}) => {

    const [products, setProduct] = useState([])

    // this is for price section
    const [totalPrice, setTotalPrice] = useState(0)
    // this is for cart item
    const [cartItem, setCartItem] = useState([])
    // this is for 

    useEffect(()=>{
        fetch("/product.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const value = {products, totalPrice, setProduct}

    return (
        <ProductsLoadContext value={value}>
            {children}
        </ProductsLoadContext>
    );
};

export default ProductsLoadProvider;