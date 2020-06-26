import React from 'react';

import classes from './Header.module.css';

const Header = () =>{
    return(
        <div className={classes.Header}>
          <ul className="container">
              <li><a href="#">Home</a></li>{" | "}
              <li>About</li>{" | "}
              <li>Contact Us</li>
        </ul>
        </div> 
    );
};

export default Header;