import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '/iei_Logo.jpg';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { fetchUser } from '../admin/fetchUser';




function  Navbar() {
const { user } = useUser();
const [userType, setUserType] = useState(null);

useEffect(() => {
const getUserType = async () => {
    if (user?.id) {
    try {
        const data = await fetchUser(user.id);
        console.log(" userType from DynamoDB:", data.type);
        setUserType(data.type);
    } catch (error) {
        console.error('Error fetching user type:', error);
    }
    }
};

getUserType();
}, [user]);

            return (
                <div>
                    <div className="navbar">
                        <div className="logo-container">
        <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : '')}
            >
                        <img
            src={logo}
            alt="IEI Logo"
            className="logo"
            />
        </NavLink>
            </div>
                        <nav className="nav-menu">
                            <ul className="nav-links">
                                <li>
                                    <a className="btn btn-primary" href="IEI-RegistrationForMembApp.aspx" target="_self">
                                        <i className="fas fa-user-plus"></i> Be a Member
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-secondary" href="IEI-Advertisement.aspx?v20230110.1" target="_self">
                                        <i className="fa fa-id-card"></i> Attorney / CA
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-election" href="https://www.ieielections.in/" target="_blank">
                                        <i className="fa fa-dropbox"></i> IEI Election
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-result" href="https://www.ieindia.org/AdminUI/ResultsUI/IEI_Results.html?v20250623.1" target="_self">
                                        <i className="fa fa-mortar-board"></i> View Result
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-custom" data-toggle="modal" data-target="#enggtalks">
                                        <i className="fa fa-gear"></i> ENGGtalks
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-custom" href="ajax/Downloads/PresidentDesk/PresidentDesk_24-25.html?v20241223.1" data-ajax-on-modal="">
                                        <i className="fa fa-user"></i> President
                                    </a>
                                </li>
                                <li>
                                    <a className="btn btn-custom" href="ajax/Downloads/SDG_Desk/Secretary_DG_2021.html?v20221223.1" data-ajax-on-modal="">
                                        <i className="fa fa-user"></i> Secretary & DG
                                    </a>
                                </li>
                                <li>  
                            <div className="sign-in-container">
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                    <SignedOut>
                                        <SignInButton mode="modal" afterSignInUrl="/">
                                            <NavLink 
                                            className={({ isActive }) => (isActive ? 'active' : '')}>
                                                    Sign In
                                            </NavLink>
                                        </SignInButton>
                    </SignedOut>
                            </div>
                            </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="secondary-nav">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-home"></i>Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Academics"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-graduation-cap"></i>
                                    Academics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-cogs"></i>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/events"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-calendar"></i>
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-envelope"></i>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/MemberShip"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-users"></i>
                                    MemberShip
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Certification"
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                ><i className="fa fa-certificate"></i>
                                    Certification
                                </NavLink>
                            </li>
                        { userType === 'ADMIN' && (
                            <li>
                                <NavLink to="/AdminDashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                                <i className="fa fa-tools"></i> Admin Dashboard
                                </NavLink>
                            </li>
                                )}

                        </ul>
                    </div>
                </div>
            );
        };
export default Navbar;