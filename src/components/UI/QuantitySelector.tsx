import { GoPlus, GoDash } from "react-icons/go";
import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex relative flex-row items-center justify-between border border-tertiary bg-transparent w-full text-xs">
      <GoDash
        className={`text-sm cursor-pointer m-4 ${
          quantity === 0 && "text-tertiary"
        }`}
        onClick={() => handleDecrement()}
      />
      <p className="select-none">{quantity}</p>
      <GoPlus
        className="text-sm cursor-pointer m-4"
        onClick={() => handleIncrement()}
      />
    </div>
  );
};

export default QuantitySelector;
