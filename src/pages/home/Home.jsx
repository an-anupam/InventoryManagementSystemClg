import Charts from "../../components/charts/Charts"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import {userData} from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
       <FeaturedInfo/>
       <Charts data={userData} title="Sales Analytics" dataKey="Sales"/>
       <div className = "homeWidgets">
         <WidgetSm/>
         <WidgetLg/>
       </div>
    </div>
  )
}

export default Home