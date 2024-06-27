import products from "../../data/products";
import ProductCard from "./ProductsCard";

const ProductsGrid = () => {
  return (
    <>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
