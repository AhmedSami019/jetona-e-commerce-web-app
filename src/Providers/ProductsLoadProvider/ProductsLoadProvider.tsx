import { useEffect, useState } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";

const ProductsLoadProvider = ({ children }) => {
  const [products, setProduct] = useState([]);

  // this is for price section
  const [totalPrice, setTotalPrice] = useState(0);
  // this is for cart item
  const [cartItem, setCartItem] = useState([]);
  // this is for j

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // for user login
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // function for login
  const correctEmail: string = "sami@gmail.com";
  const correctPass: string = "1234@27";
  // this is login function
  const login = (email: string, password: string) => {
    if (email === correctEmail && password === correctPass) {
      setUser({ email });
      setIsLogin(true)
      return { success: true };
    } else {
      return { success: false, massage: "invalid email & password" };
    }
  };
  // for user logout
  const logout = () => {
    setUser(null);
    setIsLogin(false)
  };

  const value = {
    products,
    totalPrice,
    setProduct,
    user,
    isLogin,
    setUser,
    login,
    logout,
  };

  return <ProductsLoadContext value={value}>{children}</ProductsLoadContext>;
};

export default ProductsLoadProvider;
