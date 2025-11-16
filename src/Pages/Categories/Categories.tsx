import { useContext, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";
import { NavLink } from "react-router";

const Categories = () => {
  const { products } = useContext(ProductsLoadContext);

  const uniqueCategories = ["All",
    ...new Set(products.map((product) => product.category)),
  ];
  
  const [isActive, setIsActive] = useState('all')


  return (
    <div className="mt-20">
      {/* this is categories nabvar */}
      <div>
        {uniqueCategories.map(cat => <button key={cat.id} onClick={()=> setIsActive(cat)} className={`btn ${isActive === cat? "btn-main":'.btn-outline-main'}`}>{cat}</button>)}
      </div>
    </div>
  );
};

export default Categories;
