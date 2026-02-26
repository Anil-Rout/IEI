import { motion } from 'framer-motion';
import './AdminDashboard.css';
import { useClerk } from "@clerk/clerk-react";
import { useState } from 'react';
import CreateEvent from './CreateEvent';
import EditEvent from './EditEvent';
import PostEvent from './PostEvent';
import HistoryYouMade from './HistoryYouMade';
import AdminUsers from './user';

function AdminDashboard() {
  // Modal states
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEditEventOpen, setIsEditEventOpen] = useState(false);
  const [isPostEventOpen, setIsPostEventOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Navigation tabs
  const [activeTab, setActiveTab] = useState('dashboard');
  const [eventsView, setEventsView] = useState('list');

  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="/administrator.png" alt="IEI Logo" className="logo" />
          <h2>IEI Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`sidebar-link ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`sidebar-link ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button
            className={`sidebar-link ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button className="sidebar-link" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </nav>
      </aside>

      {/* Main Content */}
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
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              <motion.div
                className="action-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <h3>Create Event</h3>
                <p>Schedule a new event for the IEI community.</p>
                <button onClick={() => setIsCreateEventOpen(true)}>Create</button>
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
                <button onClick={() => setIsEditEventOpen(true)}>Edit</button>
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
                <button onClick={() => setIsPostEventOpen(true)}>Post</button>
              </motion.div>

              <motion.div
                className="action-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <h3>History you made</h3>
                <p>You can find history here</p>
                <button onClick={() => setIsHistoryOpen(true)}>History</button>
              </motion.div>
            </>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="tab-content">
              <div className="events-sub-nav">
                <button onClick={() => setEventsView('list')} className={eventsView === 'list' ? 'active' : ''}>
                  All Events
                </button>
                <button onClick={() => setEventsView('create')} className={eventsView === 'create' ? 'active' : ''}>
                  Create Event
                </button>
                <button onClick={() => setEventsView('drafts')} className={eventsView === 'drafts' ? 'active' : ''}>
                  Drafts
                </button>
              </div>

              {eventsView === 'list' && (
                <div>
                  <h2>All Events</h2>
                  <p>[Table or list of events goes here]</p>
                </div>
              )}
              {eventsView === 'create' && (
                <div>
                  <h2>Create New Event</h2>
                  <p>[Event creation form goes here]</p>
                </div>
              )}
              {eventsView === 'drafts' && (
                <div>
                  <h2>Draft Events</h2>
                  <p>[List of drafts goes here]</p>
                </div>
              )}
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="tab-content">
              <h2>All Users</h2>
              <AdminUsers />
            </div>
          )}
        </section>
      </div>

      {/* Modals */}
      <CreateEvent isOpen={isCreateEventOpen} onClose={() => setIsCreateEventOpen(false)} />
      <EditEvent isOpen={isEditEventOpen} onClose={() => setIsEditEventOpen(false)} />
      <PostEvent isOpen={isPostEventOpen} onClose={() => setIsPostEventOpen(false)} />
      <HistoryYouMade isOpen={isHistoryOpen} onClose={() => setIsHistoryOpen(false)} />
    </div>
  );
}

export default AdminDashboard;
