import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AdminDashboard.css';
import { useClerk } from "@clerk/clerk-react";


function AdminDashboard() {




  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };
  const handleButtonClick = (action) => {
    console.log(`${action} button clicked`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="/administrator.png" alt="IEI Logo" className="logo" />
          <h2>IEI Admin</h2>
        </div>
        <nav className="sidebar-nav">
            <NavLink
              to="/AdminDashboard"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/Events"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              Events
            </NavLink>

            <NavLink
              to="/AdminDashboard/users"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              Users
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              Back to Home
            </NavLink>

        </nav>
      </aside>
      <div className="main-content">
        <header className="dashboard-header">
          <h1 className="welcome-text">Welcome Admin</h1>
          <div className="user-info">
            <span>Admin User</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>
        <section className="dashboard-actions">
          <motion.div
            className="action-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3>Create Event</h3>
            <p>Schedule a new event for the IEI community.</p>
                <NavLink
                  to="/CreateEvent"
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                <button aria-label="Create a new event">
                  Create
                </button>
              </NavLink>
          </motion.div>
          <motion.div
            className="action-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3>Edit Event</h3>
            <p>Modify existing events to keep them up-to-date.</p>
              <NavLink
                  to="/EditEvent"
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                <button aria-label=" a new event">
                  Edit
                </button>
              </NavLink>
          </motion.div>
          <motion.div
            className="action-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3>Post Event</h3>
            <p>Share event details with members and the public.</p>
              <NavLink
                  to="/PostEvent"
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                <button aria-label=" a new event">
                  Post
                </button>
              </NavLink>
          </motion.div>
          <motion.div
            className="action-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h3>History you made</h3>
            <p>you can find history here</p>
            <NavLink
                  to="/HistoryYouMade"
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                >
                <button aria-label=" a new event">
                  History
                </button>
              </NavLink>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;