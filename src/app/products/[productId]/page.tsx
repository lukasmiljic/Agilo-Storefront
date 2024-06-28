"use client";

import ProductInfo from "@/components/products/ProductInfo/ProductInfo";
import products from "@/data/products";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams<{ productId: string }>();

  const product = products.find(
    (product) => product.id === parseInt(params.productId),
  );

  return (
    <div className="flex flex-col gap-y-8 w-full md:flex-row md:gap-8 max-w-7xl mx-auto">
      {product ? (
        <ProductInfo  {...product} />
      ): (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
