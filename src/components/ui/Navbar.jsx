import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Bars3CenterLeft, Moon, ShoppingBag, Sun } from "../icons";

import NavLinks from "./Navlinks";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:block text-primary text-3xl font-semibold"
          >
            MK <span className="text-base-content">Store</span>
          </NavLink>

          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Bars3CenterLeft />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 mt-3 rounded-box p-2 gap-1 z-[1]"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {/* Theme icons */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <span className="swap-on">
              <Moon />
            </span>
            <span className="swap-off">
              <Sun />
            </span>
          </label>

          {/* Cart Link */}
          <NavLink to="/cart">
            <div className="indicator">
              <ShoppingBag />
              <span className="badge badge-sm badge-primary indicator-item indicator-bottom">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
