import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 vh-100 d-none d-md-block"
        style={{ width: "250px" }}
      >
        <h4 className="text-center mb-4">Admin Panel</h4>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Users
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Reports
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">

        {/* Navbar */}
        <nav className="navbar navbar-light bg-light shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">Admin Dashboard</span>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        {/* Dashboard Content */}
        <div className="container-fluid p-4">

          {/* Cards */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6>Total Users</h6>
                  <h3>120</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6>Total Orders</h6>
                  <h3>75</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6>Revenue</h6>
                  <h3>Rs 5,400</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">Users List</h5>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ali</td>
                      <td>ali@email.com</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ahmed</td>
                      <td>ahmed@email.com</td>
                      <td>
                        <span className="badge bg-danger">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sara</td>
                      <td>sara@email.com</td>
                      <td>
                        <span className="badge bg-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
