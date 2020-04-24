import React from 'react';
import './App.css';
import './TopDashboard'
import TopDashboard from './TopDashboard';
import BigContainer from './BigContainer';

import FacebookIcon from './images/icon-facebook.svg';
import Up from './images/icon-up.svg';
import Down from './images/icon-down.svg';
import Twitter from './images/icon-twitter.svg';
import Instagram from './images/icon-instagram.svg';
import YouTube from './images/icon-youtube.svg';

/* function App() {
  return (
   <TopDashboard />
   <TopDashboard />
   <TopDashboard />
   <BigContainer />
  );
}; */


const App = () => {
  return (
    <div className="TopPart">
   <TopDashboard />
   <div className="BCont">
   <BigContainer image={FacebookIcon} user="@nathanf" number="1987" fallsub="followers"  Up={Up} numberToday="12"/>
   <BigContainer image={Twitter} user="@nathanf" number="1044" fallsub="followers" Up={Up} numberToday="12"/>
   <BigContainer image={Instagram} user="@realnathanf" number="11k" fallsub="followers" Up={Up} numberToday="1099"/>
   <BigContainer image={YouTube} user="Nathan F." number="8239" fallsub="subscribers" Up={Down} numberToday="144" />
   </div>
    </div>
  )
}


export default App;
