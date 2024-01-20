import Breadcumbs from "./Breadcumbs";
import Description from "./Description";

import { customFetch } from "../../utils";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  const result = response.data;

  return { product: result.data };
};

const Product = () => {
  return (
    <>
      <Breadcumbs />
      <Description />
    </>
  );
};

export default Product;
