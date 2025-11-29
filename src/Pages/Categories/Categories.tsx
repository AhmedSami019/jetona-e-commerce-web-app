import { useContext, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";
import Product from "../../Components/Product/Product";
import { TypeAnimation } from "react-type-animation";

const Categories = () => {
  const { products } = useContext(ProductsLoadContext);

  const uniqueCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const [isActive, setIsActive] = useState<string>("All");
  const filterProducts: object =
    isActive === "All"
      ? products
      : products.filter((p) => p.category == isActive);
  return (
    <div className="mt-20 w-11/12 mx-auto">

      {/* this is categories navbar */}
      <div>
        <h4 className="text-3xl font-semibold">Categories</h4>
        <div className="divider my-0"></div>
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setIsActive(cat)}
            className={`btn mr-4 mt-2 ${
              isActive === cat ? "btn-main" : "btn-base-main"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* this is categories card section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {filterProducts.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Categories;
