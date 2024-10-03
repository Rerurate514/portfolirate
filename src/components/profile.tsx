import Icon from "../extra/skadi_ico.png";
import { Box } from "./box";
import { SectionNumber } from "./sectionNumber";

export const Profile = () => {
    return <div className="flex justify-center">
        <img src={Icon} className="circle size-fix center" alt="Rerurate-Icon"/>
        <div className=" left-margin-5">
            <h2 className="futura-font-bold font-64">
                ' 
                <span className="accent"> R</span>
                erurate_514 '
            </h2>
            <div className="left-text futura-font-light flex">
                <div className="relative" style={{"width": "90%", "top":"64px"}}>
                    <SectionNumber num={2} text={"Introduction"} />
                </div>
                <div className="vertical-margin">
                    <span className="font-32">B</span>
                    elong to Sendai's Univ.<br/>
                    Mobile Engineer.<br/>
                    I'm not good at the Web Tech.<br/>
                    <br/>
                </div>
                <span className="font-32 green-accent">&gt;</span>
                <span className="font-32 yellow-accent">&gt;</span>
                <span className="font-32 red-accent">&gt;</span>
                <div className="left-margin-5">
                    <Box text="year" number={2}/>
                </div>
            </div>
            <div className="underLine"/>
            <div className="shadow vertical-margin flex justify-sa back-black">
                <span className="font-32 padding-2">
                    //　　　//<br/>
                    //　　　//
                </span>
            </div>
        </div>
    </div>;
}
