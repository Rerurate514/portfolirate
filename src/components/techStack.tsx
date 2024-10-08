import { Typewriter } from "react-simple-typewriter"
import "../css/techStack.scss"
import { Box } from "./box"
import { AnimBox } from "./animBox";
import { SectionNumber } from "./sectionNumber";
import { Circle } from "./circle";
import { LangIcons } from "./langIcons";

export const TechStack = () => {
    return <div className="futura-font-light horizontal-padding">
        <h1>
            &gt;_
            <span className="accent font-64">U</span>
            <Typewriter words={["sable Languages."]} typeSpeed={200} loop={0} />
        </h1>
        <div className="flex justify-sa vertical-margin bottom-margin">
            <div className="flex box-tech flex-3">
                <div>
                    <Box text="y" number={2020} />
                    <Circle per={20} />
                    <div className="relative def-margin-top">
                        <span className="accent font-32">P</span>
                        rogramming Power
                    </div>
                </div>
                <span
                    className="font-64 relative horizontal-padding"
                    style={{ "top": "30px" }}>
                    /～/
                </span>
                <div>
                    <Box text="y" number={2024} />
                    <Circle per={75} />
                    <div className="relative def-margin-top">
                        <span className="accent font-32">P</span>
                        rogramming Power
                    </div>
                </div>
            </div>
            <div className="futura-font-light left-text justify-sa left-margin-5">
                <div className="flex flex-2">
                    <div className="relative" style={{ "width": "50%" }}>
                        <SectionNumber num={3} text={"Chronicle"} />
                    </div>
                    <div>
                        <span className="font-32">I </span>
                        started programming since high school.<br /><br />
                        In first, Learned C lang.<br /><br />
                        Next, Web Tech. It is too difficult.
                        Especially structured layout.<br /><br />
                        At the end of high school I learned Kotlin.<br /><br />
                    </div>
                </div>
                <div className="underLine" />
                <div className="margin-32">
                    <div className="back-black font-32 padding-4">
                        I'm Good at Flutter.<br />
                        Won contest with Flutter App
                    </div>
                    It's Crowd-Funding App.<br />
                    Then I can't get to sleep time lol.
                </div>
            </div>
        </div>
    </div>
}
