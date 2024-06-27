"use client";

import products from "@/data/products";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams<{ productId: string }>();

  const product = products.find(
    (product) => product.id === parseInt(params.productId),
  );
  console.log(params.productId);

  return (
    <>
      {product ? (
        <p>{product.title}</p>
      ): (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ProductPage;
