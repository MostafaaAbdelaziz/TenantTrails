function NavBar() {

function handleSignOut() {
  navigate("/signin");
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
          <div className="profile-avatar">AM</div>
          <span className="profile-name">Alex</span>
          <button className="profile-signout" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
</header>
    );
}

export default NavBar;