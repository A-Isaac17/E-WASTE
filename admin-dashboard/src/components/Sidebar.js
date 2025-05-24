import { NavLink } from "react-router-dom";
import { FaHome, FaList } from "react-icons/fa";

const Sidebar = ({ isOpen, title }) => {
  return (
    <div className={`sidebar bg-dark text-white ${isOpen ? "w-25" : "w-15"}`}>
      <div className="p-4 fs-4 fw-bold text-center">{isOpen ? title : "EWA"}</div>
      <nav className="nav flex-column">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link text-white d-flex align-items-center p-3 ${isActive ? "active" : ""}`
          }
        >
          <FaHome className="me-2" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `nav-link text-white d-flex align-items-center p-3 ${isActive ? "active" : ""}`
          }
        >
          <FaList className="me-2" />
          <span>Collection Requests</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;