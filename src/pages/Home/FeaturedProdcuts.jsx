import { ProductsGrid } from "../../components/products";
import { SectionTitle } from "../../components/ui";

const FeaturedProdcuts = () => {
  return (
    <section className="mt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProdcuts;
