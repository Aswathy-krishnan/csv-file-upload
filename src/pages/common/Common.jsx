import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../csv-upload/csv.css";
import sub from "/images/Subtract.png";
import logo2 from "/images/logo2.png"

function Common() {
  const location = useLocation();
  const [dashboardButton, setdashboardButton] = useState("");
  const [selectLink, setSelectLink] = useState("");
  useEffect(() => {
    console.log(location.pathname);
    let path = location.pathname;
    let data = path.replace("/", "");
    setdashboardButton(data?.toUpperCase());
    setSelectLink(path);
  }, [location.pathname]);
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
                  to={x.link}
                  className={
                    x.link === selectLink
                      ? "link-select-text"
                      : "link-text-none"
                  }
                  onClick={() => setSelectLink(x.link)}
                >
                  <li>
                    <div className="mt-8" key={i}>
                      <i key={i} className={`bi bi-${x.icon} mr-5`}></i>

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
              {" "}
              <h3 className="">{dashboardButton}</h3>
              <div className="user-details">
                <i className="bi bi-bell "></i>
                <i className="bi bi-people"></i>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
