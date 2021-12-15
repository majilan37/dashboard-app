import React from 'react'
import { LineStyle, Timeline, TrendingUp, PersonOutline, 
        Storefront, AttachMoney, Equalizer, MailOutline,
        ChatBubbleOutline, Tab, WorkOutline, Report } 
        from '@material-ui/icons';
import '../../styles/Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar' >
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sideBarTitle' >Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem active">
                            <Link className="link" to='/' >
                                <LineStyle className="sidebarIcon" />
                                Home
                            </Link>
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sideBarTitle' >Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <Link className="link" to='/users' >
                                <PersonOutline className="sidebarIcon" />
                                Users
                            </Link>
                        </li>
                        <li className="sidebarItem">
                            <Link className="link" to='/products' >
                                <Storefront className="sidebarIcon" />
                                Products
                            </Link>
                        </li>
                        <li className="sidebarItem">
                            <AttachMoney className="sidebarIcon" />
                            Transaction
                        </li>
                        <li className="sidebarItem">
                            <Equalizer className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sideBarTitle' >Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarItem">
                            <Tab className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sideBarTitle' >Stuff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarItem">
                            <Report className="sidebarIcon" />
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
