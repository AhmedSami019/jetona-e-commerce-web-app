import { useContext, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";

const Categories = () => {
const { products } = useContext(ProductsLoadContext);

interface Product {
    category?: string | number | null;
    [key: string]: any;
}

interface ProductsLoadContextType {
    products: Product[];
}

const uniqueCategories: string[] = [
    "All",
    ...Array.from(
        new Set(
            (products as Product[]).map((product: Product) => String(product.category))
        )
    ),
];
const [isActive, setIsActive] = useState<string>("All");

  return (
    <div className="mt-20 w-11/12 mx-auto">
      {/* this is categories navbar */}
      <div>
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setIsActive(cat)}
            className={`btn ${isActive === cat ? "btn-main" : "btn-base-main"} mr-4 mt-2`}
          >
            {cat}
          </button>
        ))}

        
      </div>

    </div>
  );
};

export default Categories;
