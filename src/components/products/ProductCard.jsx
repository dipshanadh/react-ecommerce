import { Link } from "react-router-dom";

import { ShoppingCart } from "../icons";

const ProductCard = ({ id, title, price, image, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-neutral">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-t-xl h-64 md:h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {title}
          <span className="badge badge-secondary ml-auto">${price}</span>
        </h2>
        <p className="my-4">{description.slice(0, 100)}...</p>

        <div className="card-actions justify-between items-center">
          <Link to={`/products/${id}`} className="link link-accent">
            Learn more
          </Link>
          <button className="btn btn-sm btn-ghost">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
