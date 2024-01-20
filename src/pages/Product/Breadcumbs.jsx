import { Link } from "react-router-dom";

const Breadcumbs = () => {
  return (
    <section className="text-md breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </section>
  );
};

export default Breadcumbs;
