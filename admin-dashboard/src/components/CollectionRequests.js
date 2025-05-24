import { useEffect, useState } from "react";

const CollectionRequests = ({ darkMode }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    fetch("https://mockapi.example.com/requests")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching requests:", err);
        setLoading(false);
      });
  }, []);

  const handleSort = (field) => {
    const newSortOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newSortOrder);

    const sortedRequests = [...requests].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a[field] > b[field] ? 1 : -1;
      }
      return a[field] < b[field] ? 1 : -1;
    });
    setRequests(sortedRequests);
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const filteredRequests = filterStatus
    ? requests.filter((request) => request.status === filterStatus)
    : requests;

  return (
    <div>
      <h2 className="h4 fw-bold mb-4 text-info">Collection Requests</h2>
      <div className="mb-3">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select w-auto d-inline-block ms-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Collected">Collected</option>
        </select>
      </div>
      <div className={`card shadow-sm border-0 ${darkMode ? "card-dark-mode" : ""}`}>
        <div className="card-body p-4">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="table-responsive">
              <table className={`table table-hover align-middle ${darkMode ? "table-dark table-dark-mode" : "table-light"}`}>
                <thead>
                  <tr>
                    <th scope="col" onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
                      ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th scope="col" onClick={() => handleSort("user")} style={{ cursor: "pointer" }}>
                      User {sortField === "user" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th scope="col" onClick={() => handleSort("item")} style={{ cursor: "pointer" }}>
                      Item {sortField === "item" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th scope="col" onClick={() => handleSort("status")} style={{ cursor: "pointer" }}>
                      Status {sortField === "status" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th scope="col" onClick={() => handleSort("date")} style={{ cursor: "pointer" }}>
                      Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                    </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{request.user}</td>
                      <td>{request.item}</td>
                      <td>
                        <span
                          className={`badge ${
                            request.status === "Pending"
                              ? "bg-warning text-dark"
                              : "bg-success text-white"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td>{request.date}</td>
                      <td>
                        <button
                          className="btn btn-outline-info btn-sm"
                          onClick={() => handleViewDetails(request)}
                          data-bs-toggle="modal"
                          data-bs-target="#detailsModal"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal for View Details */}
      <div className="modal fade" id="detailsModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content ${darkMode ? "bg-dark text-white" : ""}`}>
            <div className="modal-header">
              <h5 className="modal-title">Request Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedRequest ? (
                <div>
                  <p><strong>ID:</strong> {selectedRequest.id}</p>
                  <p><strong>User:</strong> {selectedRequest.user}</p>
                  <p><strong>Item:</strong> {selectedRequest.item}</p>
                  <p><strong>Status:</strong> {selectedRequest.status}</p>
                  <p><strong>Date:</strong> {selectedRequest.date}</p>
                </div>
              ) : (
                <p>No request selected.</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionRequests;