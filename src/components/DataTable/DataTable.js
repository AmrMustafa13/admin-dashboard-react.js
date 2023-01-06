import React from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";

const DataTable = () => {
  const { pathname } = useLocation();

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-btn">View</div>
            </Link>
            <div className="delete-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  const dataTableHeader =
    pathname === "/users" ? (
      <div className="data-table-title">
        Add New Users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
    ) : (
      <div className="data-table-title">
        Add New Products
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
    );

  return (
    <div className="data-table">
      {dataTableHeader}
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
