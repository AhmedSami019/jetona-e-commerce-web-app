import { Star } from "lucide-react";
import { NavLink } from "react-router";

const Product = ({ product }) => {
  const { id, name, price, rating, description, image } = product;
  return (
    <NavLink to={`/productDetails/${id}`} className="card bg-base-100 shadow-sm">
      <figure className="w-full h-60">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <p className="font-medium flex justify-between">Ratting: <span className="flex items-center gap-2">{rating} <Star size={18} stroke="gold" fill="gold"></Star></span></p>
        <div className="card-actions justify-end">
          <p className="text-xl font-semibold">${price}</p>
          <button className="btn btn-main">Buy Now</button>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
