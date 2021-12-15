import React from 'react'
import '../../../styles/pages/Home.css'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import {userData} from '../../../dummyData'
import WidgetSmall from '../../widgetSmall/WidgetSmall'
import WidgetLarge from '../../widgetLarge/WidgetLarge'


const Home = () => {
    return (
        <div className='home' >
            <FeaturedInfo />
            <Chart data={userData} title={'User Analytics'} grid dataKey={'Active User'} />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
