import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Topbar() {

  const { loginWithRedirect,isAuthenticated,logout } = useAuth0()

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">YourDashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
            <div>
            {isAuthenticated ? (
              
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
             </button>
             
            ) : ( <button onClick={() => loginWithRedirect()}>Log In</button>
           )}
             </div>
           </div>
      </div>
    </div>
  );
}
