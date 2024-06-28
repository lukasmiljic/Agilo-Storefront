"use client";

import products from "../../data/products";
import ProductCard from "./ProductCard";

const ProductsGrid = ({ productFilter }: { productFilter: string[] }) => {
  const filterProducts = () => {
    if (!productFilter[0]) {
      return products;
    }
    return products.filter((product) =>
      productFilter.includes(product.category),
    );
  };

  return (
    <>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
        {filterProducts().map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
