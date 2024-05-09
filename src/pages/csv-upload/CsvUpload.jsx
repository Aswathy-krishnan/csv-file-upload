import React, { useState } from "react";
import "../csv-upload/csv.css";
import logo2 from "/images/logo2.png";
import { Link } from "react-router-dom";
import UploadingCsv from "./components/UploadingCsv";
import CsvTable from "./components/CsvTable";

function CsvUpload() {
  const [selectLink, setSelectLink] = useState("/csv-upload");
  const [tableData, setTableData] = useState([]);
  const dashboardButtons = [
    { name: "Dashboard", icon: "dash-square", link: "/dashboard" },
    { name: "Upload", icon: "file-arrow-up", link: "/csv-upload" },
    { name: "Invoice", icon: "receipt", link: "/invoice" },
    { name: "Schedule", icon: "receipt", link: "/schedule" },
    { name: "Calender", icon: "calendar-date-fill", link: "/calender" },
    { name: "Notification", icon: "bell", link: "/notification" },
    { name: "Settings", icon: "gear", link: "/settings" },
  ];
  return (
    <div>
      <div className="outer-container">
        <div className="dashboard">
          <div className="dashboard-base">
            <img src={logo2} alt="" className="dashboard-base-image" />
            <h4>Base</h4>
          </div>
          <div className="dashboard-buttons">
            <ul>
              {dashboardButtons.map((x, i) => (
                <Link
                  key={i}
                  to={x.link}
                  className={
                    x.link === selectLink
                      ? "link-select-text"
                      : "link-text-none"
                  }
                  onClick={() => setSelectLink(x.link)}
                >
                  <li>
                    <div className="mt-8">
                      <i className={`bi bi-${x.icon} mr-5`}></i>

                      {x.name}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="csv-homepage">
          <div className="homepage-sec-1">
            <h3 className="homepage-heading">UPLOAD CSV</h3>

            <div className="user-details">
              <i className="bi bi-bell "></i>
              <i className="bi bi-people"></i>
            </div>
          </div>
          <div className="homepage-sec-2">
            <UploadingCsv tableData={tableData} setTableData={setTableData} />
          </div>
          <div className="sub-head">Uploads</div>
          {!!tableData.length && <CsvTable tableData={tableData} setTableData={setTableData} />}
        </div>
      </div>
    </div>
  );
}

export default CsvUpload;
