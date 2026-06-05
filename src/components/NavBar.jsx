import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {

const navigate = useNavigate();

function handleSignOut() {
     navigate("/signin");
}

function handleProfile(){
    navigate("/profile");
}

return (
<header className="dashboard-header">
        <div className="dashboard-left">
          <div className="dashboard-brand">TenantTrails</div>

          <div className="dashboard-searchbar">
            <input
              type="text"
              placeholder="🔍 Search apartments by address or neighbourhood..."
            />
          </div>
        </div>

        <div className="dashboard-profile">
          <button className="profile-avatar" onClick={handleProfile}>
            AM
          </button>
          <span className="profile-name" onClick={handleProfile}>
            Alex
          </span>

          <button className="profile-signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
</header>
    );
}

export default NavBar;