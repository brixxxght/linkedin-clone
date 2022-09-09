import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import logo from './linkedin.svg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import me from './avatar.jpeg';

function Header() {
  return (
    <header className='header'>
        <div className="header__left">
            <img src={logo} alt="linkedin logo" />

            <div className="header__search">
                {/* icon */}
                <SearchIcon />
                <input type="text" name="" id="" />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption icon={<HomeIcon />} title="Home"/>
            <HeaderOption icon={<SupervisorAccountIcon />} title="My Network"/>
            <HeaderOption icon={<BusinessCenterIcon />} title="Jobs"/>
            <HeaderOption icon={<ChatIcon />} title="Messaging"/>
            <HeaderOption icon={<NotificationsIcon />} title="Notifications"/>
            <HeaderOption avatar={me} title="Brixxxght"/>


        </div>
    </header>
  )
}

export default Header