import React from 'react'
import '../../styles/Navbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const Navbar = () => {
    return (
        <div className='topbar' >
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge" >2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <img src="https://images.pexels.com/photos/7537817/pexels-photo-7537817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
