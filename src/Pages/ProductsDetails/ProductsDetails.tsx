import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCounter from "../../Components/ProductCounter/ProductCounter";

const ProductsDetails = () => {
  // this is id form loader of route
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (!productId) return;
        const id = parseInt(productId, 10);
        const item = data.find((item: any) => item.id === id);
        setProduct(item);
      });
  }, [productId]);

  const { name, category, price, stoke, rating, description, image } = product;

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 mt-20 w-11/12 mx-auto min-h-screen">
      <div className="">
        <img className="rounded-xl" src={image} alt="" />
      </div>
      {/* details section of product */}
      <div className="space-y-5">
        <h2 className="text-4xl font-bold">{name}</h2>
        <div className="flex items-center text-lg font-medium gap-10">
          <p className="">Ratting:</p>
          <p className="flex items-center text-lg font-medium">
            {rating} <Star stroke="0" fill="gold"></Star>
          </p>
        </div>
          <ProductCounter></ProductCounter>
      </div>
      {/* similar product section */}
      <div>

      </div>
    </div>
  );
};

export default ProductsDetails;
