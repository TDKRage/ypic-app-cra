import React from 'react';

import MenuIcon from 'react-icons/lib/md/menu';
import './index.css';

const Home = () => (
  <div className="home-page">
    <h1>Welcome</h1>
    <h2>to the Young People in Christ App</h2>
    <div>
      <p>
        Please press the <MenuIcon /> icon in top left to begin.
      </p>
    </div>
  </div>
);

export default Home;
