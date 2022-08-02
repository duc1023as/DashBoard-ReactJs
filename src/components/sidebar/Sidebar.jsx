import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">DashBoard</h3>
                <ul className='sidebarList'>
                    <Link to={"/"} className="link">
                        <li className='sidebarListItem'>
                            <LineStyleIcon className='sidebarIcon'></LineStyleIcon>
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarIcon'></TimelineIcon>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <TrendingUpIcon className='sidebarIcon'></TrendingUpIcon>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to="./users" className='link'>
                        <li className='sidebarListItem'>
                            <PersonIcon className='sidebarIcon'></PersonIcon>
                            User
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className='sidebarListItem'>
                            <Inventory2Icon className='sidebarIcon'></Inventory2Icon>
                            Products
                        </li>
                    </Link>
                    
                    <li className='sidebarListItem'>
                        <PaidIcon className='sidebarIcon'></PaidIcon>
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <AssessmentIcon className='sidebarIcon'></AssessmentIcon>
                        Report
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <MailIcon className='sidebarIcon'></MailIcon>
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <FeedbackIcon className='sidebarIcon'></FeedbackIcon>
                        FeedBack
                    </li>
                    <li className='sidebarListItem'>
                        <MessageIcon className='sidebarIcon'></MessageIcon>
                        Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <WorkIcon className='sidebarIcon'></WorkIcon>
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <TimelineIcon className='sidebarIcon'></TimelineIcon>
                        Analytics
                    </li>
                    <li className='sidebarListItem'> 
                        <ReportIcon className='sidebarIcon'></ReportIcon>
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
