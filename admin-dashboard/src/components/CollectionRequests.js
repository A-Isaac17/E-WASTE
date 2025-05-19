const CollectionRequests = () => {
    const requests = [
      {
        id: 1,
        user: "John Doe",
        item: "Old Laptop",
        status: "Pending",
        date: "2025-05-01",
      },
      {
        id: 2,
        user: "Jane Smith",
        item: "CRT Monitor",
        status: "Collected",
        date: "2025-04-28",
      },
      {
        id: 3,
        user: "Mike Johnson",
        item: "Smartphone",
        status: "Pending",
        date: "2025-05-03",
      },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Collection Requests</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Item</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="p-3">{request.id}</td>
                  <td className="p-3">{request.user}</td>
                  <td className="p-3">{request.item}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded ${
                        request.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="p-3">{request.date}</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default CollectionRequests;