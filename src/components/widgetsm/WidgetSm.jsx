import React from 'react';
import "./widgetsm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitile">New Join Member</span>
      <ul className="widgetList">
        <li className="widgetListItem">
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="Employee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Duc Do Minh</span>
            <span className="widgetSmUserTitle">Intern</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="Employee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Duc Do Minh</span>
            <span className="widgetSmUserTitle">Intern</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="Employee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Duc Do Minh</span>
            <span className="widgetSmUserTitle">Intern</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="Employee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Duc Do Minh</span>
            <span className="widgetSmUserTitle">Intern</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'></VisibilityIcon>
            Display
          </button>
        </li>
        <li className="widgetListItem">
          <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png" alt="Employee" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Duc Do Minh</span>
            <span className="widgetSmUserTitle">Intern</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className='widgetSmIcon'></VisibilityIcon>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
