import { NavLink } from "react-router";
import errorImage from "../../assets/products-image/error-image.png"
import { ArrowLeft } from "lucide-react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-10 md:gap-20">
     <div className="text-center">
         <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-6xl font-medium">This Page Not Found</h2>
     </div>
     {/* bottom section */}
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-6/12 text-center md:text-start space-y-10">
          <h3 className="text-3xl font-semibold">ooho....</h3>
          <p className="text-2xl w-9/12 mx-auto md:mx-0">
            Search was found according to your error. Nothing was found
            according to the algorithm.
          </p>
          <NavLink className="btn btn-main text-white text-xl p-6" to={"/"}><ArrowLeft></ArrowLeft>Go Home</NavLink>
        </div>
        <div className="md:w-6/12 mx-auto p-5">
            <img src={errorImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Error;
