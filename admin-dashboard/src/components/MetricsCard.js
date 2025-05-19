const MetricsCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow flex items-center">
        <div className="text-3xl mr-4">{icon}</div>
        <div>
          <h3 className="text-gray-600">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default MetricsCard;
  