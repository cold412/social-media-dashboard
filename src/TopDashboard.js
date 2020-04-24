import React from 'react';
import ReactDom from 'react-dom';
import './TopDashboard.css';
import ToggleSwitch from './ToggleSwitch';

const TopDashboard = () => {
    return (
        <div className="mediaContainer">
            <div className="left">
                <h1>Social Media Dashboard</h1>
                <h3>Total Followers: 23,004</h3>
            </div>
            <div className="switch">
                <h3>Dark Mode</h3>
            </div>
        </div>
    );
};


export default TopDashboard;