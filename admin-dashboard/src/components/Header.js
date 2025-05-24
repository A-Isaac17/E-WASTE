const Header = ({ toggleSidebar, handleLogout, setDarkMode, darkMode, title }) => {
  return (
    <header className="bg-light p-3 d-flex justify-content-between align-items-center shadow-sm">
      <div className="d-flex align-items-center">
        <button
          className="btn btn-outline-dark me-3"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <h1 className="h5 fw-semibold mb-0">{title}</h1>
      </div>
      <div className="d-flex align-items-center">
        <div className="form-check form-switch me-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Dark Mode
          </label>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-outline-dark dropdown-toggle d-flex align-items-center"
            type="button"
            id="adminDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              className="rounded-circle bg-dark me-2"
              style={{ width: "32px", height: "32px" }}
            ></div>
            Admin
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="adminDropdown">
            <li>
              <a className="dropdown-item" href="#">Profile</a>
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;