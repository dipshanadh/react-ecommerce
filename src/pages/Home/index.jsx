import FeaturedProdcuts from "./FeaturedProdcuts";
import Hero from "./Hero";

import { customFetch } from "@/utils";

export const loader = async () => {
	const response = await customFetch("/products?featured=true");
	const result = response.data;

	return { products: result.data };
};

const Home = () => {
	return (
		<>
			<Hero />
			<FeaturedProdcuts />
		</>
	);
};

export default Home;
