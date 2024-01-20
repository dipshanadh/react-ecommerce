import { ProductsGrid } from "../../components/products";
import { SectionTitle } from "../../components/ui";

const FeaturedProdcuts = () => {
  return (
    <section>
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProdcuts;
