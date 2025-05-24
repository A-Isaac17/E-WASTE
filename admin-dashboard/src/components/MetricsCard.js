const MetricsCard = ({ title, value, icon, darkMode }) => {
  return (
    <div className={`card shadow-sm border-0 p-3 mb-3 d-flex align-items-center ${darkMode ? "card-dark-mode" : ""}`}>
      <div className="card-icon me-3">{icon}</div>
      <div>
        <h3 className="text-muted mb-1">{title}</h3>
        <p className="fs-4 fw-bold mb-0">{value}</p>
      </div>
    </div>
  );
};

export default MetricsCard;