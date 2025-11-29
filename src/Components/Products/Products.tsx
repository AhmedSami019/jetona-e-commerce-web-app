import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Product from '../Product/Product';
import { ArrowDownToLine, ArrowUpToLine } from 'lucide-react';
import ProductsLoadContext from '../../Context/ProductsLoadContext/ProductsLoadContext';



const Products = () => {

    const {products} = useContext(ProductsLoadContext)
    const [showAll, setShowAll] = useState(false)
    const updatedProducts = showAll? products: products.slice(0, 8)
    // console.log(products);


    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    updatedProducts.map((product, index) => <Product key={index} product={product} />)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={()=> setShowAll(!showAll)} className='btn btn-main my-10'>{!showAll? "Show all": "Show less"} {!showAll?<ArrowDownToLine size={22}></ArrowDownToLine>: <ArrowUpToLine size={22}></ArrowUpToLine>}</button>
            </div>
            
        </div>
    );
};

export default Products;
