import { CgMenuRight } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/shipifyLogo2.png";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl bg-black navbar flex items-center justify-between px-4 lg:px-16 py-2 lg:py-6 pl-6 z-10">
      <NavLink to="/">
        <img className="w-36 lg:w-52" src={logo} alt="logo" />
      </NavLink>
      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <CgMenuRight className="text-3xl text-[#f70204]"></CgMenuRight>
        </label>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-[#f70204] border-t-2 border-t-[#f70204] flex items-center gap-3 font-bold text-lg uppercase`
                  : `text-white flex items-center gap-3 font-bold text-lg uppercase`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `text-[#f70204] border-t-2 border-t-[#f70204] flex items-center gap-3 font-bold text-lg uppercase`
                  : `text-white flex items-center gap-3 font-bold text-lg uppercase`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `text-[#f70204] border-t-2 border-t-[#f70204] flex items-center gap-3 font-bold text-lg uppercase`
                  : `text-white flex items-center gap-3 font-bold text-lg uppercase`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notification"
              className="text-3xl text-[#f70204] btn btn-circle btn-ghost flex items-center justify-center"
            >
              <FaBell></FaBell>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
