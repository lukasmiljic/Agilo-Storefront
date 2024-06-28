import Dropdown from "@/components/UI/Dropdown";
import QuantitySelector from "@/components/UI/QuantitySelector";
import { GoPlus } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";

const ProductInfo = ({
  title,
  description,
  price,
  image,
  sizes,
  colors,
  details,
}: {
  title: string;
  description: string;
  price: string;
  image: string;
  sizes?: string[];
  colors?: string[];
  details?: { title: string; description: string };
}) => {
  const handleAddToCart = () => {
    toast.success("Added to cart", {
      style: {
        textTransform: "initial",
      },
    });
  };

  return (
    <>
      <div className="grid w-full bg-[#F7F7FA] md:w-1/2">
        <img src={image} className="h-auto w-4/5 place-self-center" />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-full flex-col content-center justify-center p-8">
            <h1 className="mb-4 text-3xl font-semibold text-primary">
              {title}
            </h1>
            <p className="mb-8 font-normal">{price}</p>
            <p className="font-sm mb-5 leading-5 text-secondary">
              {description}
            </p>
            <div className="mb-4 flex flex-col gap-2">
              {sizes && <Dropdown title="Size" list={sizes} />}
              {colors && <Dropdown title="Colors" list={colors} />}
              <QuantitySelector />
              <button
                onClick={() => handleAddToCart()}
                className="flex w-full items-center justify-center bg-primary p-4 uppercase leading-3 text-white transition-colors hover:bg-gray-800"
              >
                add to cart
                <GoPlus className="ml-2 mt-0.5" />
                <Toaster position="bottom-right" />
              </button>
            </div>
            {details && (
              <>
                <p className="mb-2 text-sm font-semibold">Product details</p>
                <p className="mb-1 text-sm font-semibold">{details.title}</p>
                <p className="text-xs text-secondary">{details.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
