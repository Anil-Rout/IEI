import { motion } from 'framer-motion';
import './AdminDashboard.css';
import { useClerk } from "@clerk/clerk-react";
import { useState } from 'react';
import CreateEvent from '../api/CreateEvent';  // make sure this is a modal component
import EditEvent from '../api/EditEvent';
import PostEvent from '../api/PostEvent';
import HistoryYouMade from '../api/HistoryYouMade';

function AdminDashboard() {
  // Modal states for Create and Edit Events
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEditEventOpen, setIsEditEventOpen] = useState(false);
  const [isPostEventOpen, setIsPostEventOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  // Tab state for main navigation and events sub-navigation
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
                <button onClick={()=> setIsPostEventOpen(true)}>Post</button>
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
                <button onClick={()=>setIsHistoryOpen(true)}>History</button>
              </motion.div>
            </>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="tab-content">
              {/* Sub-tab buttons for Events */}
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

              {/* Sub-tab content for Events */}
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
                  {/* Example: If you want the modal style form inline, you could render it directly.
                      Alternatively, you could have a button that triggers the CreateEvent modal. */}
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
              <p>[User management content goes here]</p>
            </div>
          )}
        </section>
      </div>

      {/* Modals */}
      <CreateEvent
        isOpen={isCreateEventOpen}
        onClose={() => setIsCreateEventOpen(false)}
      />
      <EditEvent
        isOpen={isEditEventOpen}
        onClose={() => setIsEditEventOpen(false)}
      />
      <PostEvent
        isOpen={isPostEventOpen}
        onClose={()=> setIsPostEventOpen(false)}
        />
      <HistoryYouMade
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        />
    </div>
  );
}

export default AdminDashboard;
