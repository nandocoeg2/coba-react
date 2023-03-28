import React , { useState } from 'react';
import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';
import Navbar from './components/navigation';
import Footer from './components/footer';

function App() {

  // change navbar background using useState
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavBar = () => {
    setNavbarValue("My Contact");
  }

  return (
    <div>
      <Navbar navValue={getNavbarValue}/>
      <h1>React 17</h1>
      <p>React 17 is a major release of React with new features, bugfixes, and new deprecation warnings to help prepare for a future major release.</p>
      <Introduction name ="nando"/>
      <Profile name ="nando"/>
      <button onClick={changeNavBar}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
