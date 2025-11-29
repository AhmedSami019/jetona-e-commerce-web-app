import { Star } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";
import ProductCard from "../../Components/Product/Product"; // renamed so it doesn't conflict

interface Product {
  id: number;
  name: string;
  category: string;
  currency: string;
  price: number;
  stock: number;
  rating: number;
  description: string;
  image: string;
}

const ProductsDetails = () => {
  const { handleAddToCart, products } = useContext(ProductsLoadContext);

  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  // product quantity counter
  const [count, setCount] = useState(1);

  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [product]);

  const handleScroll = (p: Product) => {
    setProduct(p);
  };

  // Load selected product
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const id = parseInt(productId ?? "0", 10);
        const item = data.find((p) => p.id === id);
        if (item) setProduct(item);
      });
  }, [productId]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  const { name, category, currency, price, stock, rating, description, image } =
    product;

  const similarProducts = products.filter(
    (p) => p.category === category && p.id !== product.id
  );

  return (
    <div className="w-11/12 mx-auto">
      {/* Entire detail block wrapped with ref */}
      <div
        ref={detailsRef}
        className="flex flex-col md:flex-row gap-10 md:gap-20 py-10 mt-20"
      >
        <div className="md:w-6/12">
          <img className="rounded-xl w-full" src={image} alt={name} />
        </div>

        <div className="md:w-6/12 space-y-5">
          <h2 className="text-4xl font-bold">{name}</h2>

          <div className="flex items-center gap-10">
            <p className="text-lg font-medium">Rating:</p>
            <p className="flex items-center gap-1 text-lg font-medium">
              {rating} <Star stroke="0" fill="gold" />
            </p>
          </div>

          <h2 className="text-2xl font-medium">
            ${price} {currency}
          </h2>

          <p className="text-xl">Remain : {stock}</p>

          <p className="text-xl">{description}</p>

          <div className="flex gap-5 items-center">
            {/* Counter */}
            <div className="bg-gray-200 flex items-center rounded-full">
              <button
                className="bg-gray-300 px-4 py-1 rounded-l-2xl"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
              >
                −
              </button>
              <span className="px-3">{count}</span>
              <button
                className="bg-gray-300 px-4 py-1 rounded-r-2xl"
                onClick={() => setCount((c) => c + 1)}
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline-main"
            >
              Add to cart
            </button>
            <button className="btn btn-main">Buy now</button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="space-y-5 pb-20">
        <h2 className="text-4xl text-center font-semibold">
          Some similar category products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => handleScroll(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
