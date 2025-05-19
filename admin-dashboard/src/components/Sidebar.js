import { NavLink } from "react-router-dom";
import { FaHome, FaList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">E-Waste Admin</div>
      <nav className="flex-1">
        <NavLink
          to="/"
          className="flex items-center p-4 hover:bg-blue-700"
          activeClassName="bg-blue-900"
        >
          <FaHome className="mr-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/requests"
          className="flex items-center p-4 hover:bg-blue-700"
          activeClassName="bg-blue-900"
        >
          <FaList className="mr-2" /> Collection Requests
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;