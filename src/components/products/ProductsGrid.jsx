import { useLoaderData } from "react-router-dom";

import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.id} id={product.id} {...product.attributes} />
      ))}
    </div>
  );
};

export default ProductsGrid;
