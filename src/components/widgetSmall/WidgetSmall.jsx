import React from 'react'
import '../../styles/WidgetSmall.css';
import { Visibility } from '@material-ui/icons';

const WidgetSmall = () => {
    return (
        <div className="WidgetSmall" >
             <h3 className="widgetSmTitle">New Join Members</h3>
             <ul className="widgetSmList">
                 <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.pexels.com/photos/3727690/pexels-photo-3727690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='widgetSmIcon'  />
                        display
                    </button>
                 </li>
                 <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.pexels.com/photos/3727690/pexels-photo-3727690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='widgetSmIcon' />
                        display
                    </button>
                 </li>
                 <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.pexels.com/photos/3727690/pexels-photo-3727690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='widgetSmIcon'  />
                        display
                    </button>
                 </li>
             </ul>
        </div>
    )
}

export default WidgetSmall
