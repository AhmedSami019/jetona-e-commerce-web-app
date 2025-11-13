import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsDetails = () => {
  // this is id form loader of route
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  //   this is product counter section
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

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

  const { name, category, currency, price, stoke, rating, description, image } = product;

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-10 mt-20 w-11/12 mx-auto min-h-screen">
      <div className="md:w-6/12 ">
        <img className="rounded-xl w-full" src={image} alt="" />
      </div>
      {/* details section of product */}
      <div className="md:w-6/12 space-y-5">
        <h2 className="text-4xl font-bold">{name}</h2>
        <div className="flex items-center text-lg font-medium gap-10">
          <p className="">Ratting:</p>
          <p className="flex items-center text-lg font-medium">
            {rating} <Star stroke="0" fill="gold"></Star>
          </p>
        </div>
        {/* price */}
        <h2 className="text-2xl font-medium">${price}  {currency}</h2>
        <p className="text-xl">{description}</p>
        {/* this is counter section */}
        <div className="flex gap-5 items-center">
          <div className="flex gap-20 h-8">
            <div className="bg-gray-200 flex justify-around items-center rounded-full">
              <button
                className="bg-gray-300 px-4 py-1 rounded-l-2xl"
                onClick={handleDecrement}
              >
                −
              </button>
              <span className="px-3">{count}</span>
              <button
                className="bg-gray-300 px-4 py-1 rounded-r-2xl"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        <button className="btn btn-outline-main border-[">Add to cart</button>
        <button className="btn btn-main">Buy now</button>
        </div>
      </div>
      {/* similar product section */}
      <div></div>
    </div>
  );
};

export default ProductsDetails;
