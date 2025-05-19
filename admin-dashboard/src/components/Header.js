const Header = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">E-Waste Management</h1>
        <div className="flex items-center">
          <span className="mr-2">Admin</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </header>
    );
  };
  
  export default Header;
  