import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex items-center">
        <p className="mr-auto hidden sm:block">
          Buy Genuine Computer Parts at Best Price in Nepal
        </p>

        <div className="space-x-6">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
