import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/shipifyLogo1.png";

const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu px-10 py-4 w-80 min-h-full bg-base-200">
        {/* Sidebar content here */}
        <NavLink to="/">
          <img className="w-36 mx-auto mb-8" src={logo} alt="logo" />
        </NavLink>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `w-full rounded-md border border-[#f70204] bg-[#f70204] text-white flex items-center justify-center gap-3 font-bold text-lg uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
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
                ? `w-full rounded-md border border-[#f70204] bg-[#f70204] text-white flex items-center justify-center gap-3 font-bold text-lg uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
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
                ? `w-full rounded-md border border-[#f70204] bg-[#f70204] text-white flex items-center justify-center gap-3 font-bold text-lg uppercase`
                : `text-black nav-text flex items-center justify-center gap-3 font-bold text-lg uppercase`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
