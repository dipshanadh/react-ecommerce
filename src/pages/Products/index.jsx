import Filters from "./Filters";
import PaginationContainer from "./PaginationContainer";
import ProductsContainer from "./ProductsContainer";

import { customFetch } from "../../utils";

export const loader = async ({ params }) => {
  const response = await customFetch("/products");
  const result = response.data;

  return { product: result.data };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
