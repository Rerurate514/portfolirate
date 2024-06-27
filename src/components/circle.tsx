import "../css/circle.css";
import  CountUp  from "react-countup"

export const Circle = (prop: {per: number}) => {
    return <div className="back-white percent absolute">
        <svg className="graph">
            <circle className={"line-" + prop.per} cx="75" cy="75" r="70"></circle>
            <div></div>
        </svg>
        <div className="str absolute">
            <div className="margin-svg-top">
                <CountUp className="font-32" end={prop.per} />
                <span>%</span>
            </div>
        </div>
    </div>
}