import React, { useContext } from "react";
import ProductsLoadContext from "../../Context/ProductsLoadContext/ProductsLoadContext";
import noContentImg from "../../assets/undraw_file-searching_2ne8.svg";

const Blogs = () => {
  const { blogs } = useContext(ProductsLoadContext);

  return (
    <div className="mt-20">
      {blogs.length === 0 ? (
        <div className="w-11/12 mx-auto bg-gray-200 flex flex-col justify-center items-center space-y-10 text-center p-10 my-10 rounded-xl">
            <h2 className="text-6xl font-semibold text-red-500">Ooooops..</h2>
          <h2 className="text-5xl font-semibold">There are <span className="text-red-500">No</span> Blogs</h2>
          <div className="h-99 ">
            <img className="h-full" src={noContentImg} alt="" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Blogs;
