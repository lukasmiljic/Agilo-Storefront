import Dropdown from "@/components/UI/Dropdown";
import QuantitySelector from "@/components/UI/QuantitySelector";
import { GoPlus } from "react-icons/go";

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
  return (
    <>
      <div className="grid w-full bg-[#F7F7FA] md:w-1/2">
        <img src={image} className="h-auto w-4/5 place-self-center" />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-full flex-col content-center justify-center p-8">
            <h1 className="text-primary mb-4 text-3xl font-semibold">
              {title}
            </h1>
            <p className="mb-8 font-normal">{price}</p>
            <p className="font-sm text-secondary mb-5 leading-5">
              {description}
            </p>
            <div className="mb-4 flex flex-col gap-2">
              {sizes && <Dropdown title="Size" list={sizes} />}
              {colors && <Dropdown title="Colors" list={colors} />}
              <QuantitySelector />
              <button className="flex w-full items-center justify-center bg-primary p-4 uppercase leading-3 text-white">
                add to cart
                <GoPlus className="ml-2 mt-0.5" />
              </button>
            </div>
            {details && (
              <>
                <p className="mb-2 text-sm font-semibold">Product details</p>
                <p className="mb-1 text-sm font-semibold">{details.title}</p>
                <p className="text-secondary text-xs">{details.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
