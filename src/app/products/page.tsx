"use client";

import Sidebar from "@/components/UI/Sidebar";
import ProductsGrid from "@/components/products/ProductsGrid";
import { useState } from "react";

const ProductsPage = () => {
  const [productFilter, setProductFilter] = useState([] as string[]);

  return (
    <div>
      <Sidebar
        productFilter={productFilter}
        setProductFilter={setProductFilter}
      />
      <ProductsGrid productFilter={productFilter} />
    </div>
  );
};

export default ProductsPage;
