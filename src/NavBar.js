
import React from 'react';
import './NavBar.scss';

const NavBar=()=>{
 return (
    <div className='navbarContainer'>
        <div className='navbarContainer__logo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 20">
          <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
          <path fill="#FFF" d="M16.67 10a1.46 1.46 0 0 0-2.47-1 7.12 7.12 0 0 0-3.85-1.23L11 4.65l2.14.45a1 1 0 1 0 .13-.61L10.82 4a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23 1.46 1.46 0 1 0-1.61 2.39 2.87 2.87 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 0 0 0-.44 1.46 1.46 0 0 0 .81-1.33Zm-10 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm5.81 2.75a3.84 3.84 0 0 1-2.47.77 3.84 3.84 0 0 1-2.47-.77.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 10 14a3.28 3.28 0 0 0 2.09-.61.27.27 0 1 1 .39.4Zm-.18-1.71a1 1 0 1 1 1-1 1 1 0 0 1-1.01 1.04Z"></path>
        </svg>
        <img width="70" height="50" alt="Download Reddit Logo in SVG Vector or PNG File Format - Logo.wine" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStub3GNLZKf1yvcvUxewsH0oWEfwac_aU9sg&amp;usqp=CAU"/>
        </div>

        <div className="navbarContainer__searchBar">
          <input type="search" name="s" value="" style={{width: "500px" }}placeholder=" 🔍 Search Reddit"/>
        </div>
        <div className="navbarContainer__buttons">
        <div className="navbarContainer__getApp">
              <span className="navbarContainer__icon">
                <svg rpl="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="24" width="24" icon-name="qr-code-outline" fill="currentColor">
                  <path d="M14.8 16h-3.7v-1.2h3.7v-3.7H16v3.7c0 .7-.5 1.2-1.2 1.2zM9 7.8V5.2C9 4.5 8.5 4 7.8 4H5.2C4.5 4 4 4.5 4 5.2v2.5C4 8.5 4.5 9 5.2 9h2.5C8.5 9 9 8.5 9 7.8zm-1.2 0H5.3V5.3h2.5v2.5zm8.2 0V5.2c0-.7-.5-1.2-1.2-1.2h-2.5c-.8 0-1.3.5-1.3 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2zm-1.2 0h-2.5V5.3h2.5v2.5zm-5.8 7v-2.5c0-.8-.5-1.3-1.2-1.3H5.2c-.7 0-1.2.5-1.2 1.2v2.5c0 .8.5 1.3 1.2 1.3h2.5c.8 0 1.3-.5 1.3-1.2zm-1.2 0H5.3v-2.5h2.5v2.5zm-.8 3H2.6c-.2 0-.4-.2-.4-.4V13H1v4.4c0 .9.7 1.6 1.6 1.6H7v-1.2zm12-.4V13h-1.2v4.4c0 .2-.2.4-.4.4H13V19h4.4c.9 0 1.6-.7 1.6-1.6zm0-14.8c0-.9-.7-1.6-1.6-1.6H13v1.2h4.4c.2 0 .4.2.4.4V7H19V2.6zm-16.8 0c0-.2.2-.4.4-.4H7V1H2.6C1.7 1 1 1.7 1 2.6V7h1.2V2.6z"></path>
                </svg>
              </span>
              <span className="navbarContainer__text"> GetApp</span>

        </div>

         <div className="navbarContainer__login">
            Log in
          </div>
        </div>
    </div>
 )

}   
export default NavBar;