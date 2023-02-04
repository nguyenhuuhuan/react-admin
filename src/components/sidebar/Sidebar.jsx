import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import AddCardIcon from "@mui/icons-material/AddCard";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>DashBoard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CategorySharpIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <AddCardIcon className="icon" />
            <span>Orders</span>
          </li>

          <p className="title">USERFUL</p>

          <li>
            <LocalShippingSharpIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsSharpIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <CloudCircleIcon className="icon" />
            <span>System health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>

          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AssignmentIndIcon className="icon" />
            <span>Profiles</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
