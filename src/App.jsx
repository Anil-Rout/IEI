import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Services from './pages/Services';
import Events from './pages/Events';
import Contact from './pages/Contact';
import MemberShip from './pages/MemberShip';
import Certification from './pages/Certification';
import './App.css';
import SyncUser from './admin/SyncUser';
import CreateEvent from './admin/CreateEvent';
import AdminDashboard from './admin/AdminDashboard';
import EditEvent from './admin/EditEvent';
import PostEvent from './admin/PostEvent';
import HistoryYouMade from './admin/HistoryYouMade';
function App() {
  return(
    <div className="app-container">
       <SyncUser />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MemberShip" element={<MemberShip />} />
          <Route path="/Certification" element={<Certification />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/EditEvent" element={<EditEvent />} />
          <Route path="/PostEvent" element={<PostEvent />} />
          <Route path="/HistoryYouMade" element={<HistoryYouMade />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;