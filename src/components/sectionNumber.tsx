import  CountUp  from "react-countup"

export const SectionNumber = (props: {num: number, text: string}) => {
    return <div className="futura-font-light">
        <strong className="number">
            0
            <CountUp end={props.num} duration={2.75}/>
        </strong>
        <span className="font-64">/</span>
        <span className="font-16">::: {props.text}</span>
    </div>
}