import { useState } from "react";

const ProductCounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex gap-20">
      <div className="bg-gray-200 flex justify-around items-center rounded-full">
        <button className="bg-gray-300 px-4 py-1 rounded-l-2xl" onClick={handleDecrement} >
          −
        </button>
        <span className="px-3">{count}</span>
        <button className="bg-gray-300 px-4 py-1 rounded-r-2xl" onClick={handleIncrement} >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCounter;
