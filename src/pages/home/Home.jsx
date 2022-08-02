import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetsm/WidgetSm';
import WidgetLg from '../../components/widgetlg/WidgetLg';



export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo></FeaturedInfo>
        <Chart data={userData} title="User Analytics" dataKey={"Active User"} grid></Chart>
        <div className='homeWidgets'>
          <WidgetSm></WidgetSm>
          <WidgetLg></WidgetLg>
        </div>
    </div>
  )
}


