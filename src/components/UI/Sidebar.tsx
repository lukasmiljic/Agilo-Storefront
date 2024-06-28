import { ChangeEvent, useEffect, useState } from "react";
import { GoFilter, GoX } from "react-icons/go";
import { categories } from "@/data/products";

type SidebarProps = {
  productFilter: string[];
  setProductFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const Sidebar = ({ productFilter, setProductFilter }: SidebarProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (productFilter.length === 0) {
      setProductFilter([e.target.name]);
    }
    if (productFilter.includes(e.target.name)) {
      setProductFilter(
        productFilter.filter((item: string) => item !== e.target.name),
      );
    } else {
      setProductFilter([...productFilter, e.target.name]);
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer flex-row items-center p-2 text-secondary"
        onClick={() => setIsOpened(true)}
      >
        <p className="mr-2">Filters </p>
        <GoFilter />
      </div>
      {isOpened && (
        <>
          <div
            className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpened(false)}
          ></div>
          <div
            className={
              "fixed left-0 top-0 z-20 flex h-full w-96 flex-col border-r border-r-tertiary bg-white bg-opacity-75 p-4"
            }
          >
            <div className="flex h-min w-full items-center">
              <p className="text-lg text-secondary">Filters</p>
              <div
                className="ml-auto cursor-pointer p-2"
                onClick={() => setIsOpened(false)}
              >
                <GoX />
              </div>
            </div>

            <div>
              <p className="mb-1 mt-4 text-sm text-secondary">Categories</p>
              <div className="ml-2">
                {categories.map((category) => (
                  <div className="text-red flex w-full justify-between">
                    <label className="pr-4 text-sm" htmlFor={category}>
                      {category}
                    </label>
                    <input
                      type="checkbox"
                      id={category}
                      name={category}
                      checked={productFilter.includes(category)}
                      onChange={(e) => handleFilterChange(e)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              className={`p-2 text-xs underline ${productFilter.length === 0 ? "text-gray-300" : "text-secondary"}`}
              onClick={() => setProductFilter([])}
            >
              Clear all filters
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
