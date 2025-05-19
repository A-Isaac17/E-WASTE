import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CollectionRequests from "./components/CollectionRequests";
import MetricsCard from "./components/MetricsCard";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/requests" element={<CollectionRequests />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;