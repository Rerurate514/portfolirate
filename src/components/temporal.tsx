import { SectionNumber } from "./sectionNumber"
import "../css/temporal.scss"
import { TepoIcons } from "./tepoIcon"
import { MirrorStr } from "./mirrorStr"

export const Temporal = () => {
    return <div className="futura-font-light margin-32 flex left-margin-10">
        <div className="width-side">
            <div className="flex justify-bw underLine font-64">
                <SectionNumber num={6} text={"Temporal frontier"} />
                <div className="helvetica-font left-text padding-8">
                    <p className="accent-first no-margin">MOBILE</p>
                    <p className="no-margin">ENGINEER</p>
                </div>
            </div>
            <div className="flex def-margin-top">
                <div className="font-64 margin-32">
                    <MirrorStr str="I want"/>
                </div>
                <div className="left-text margin-32 left-margin-20">
                    <p className="no-margin">my dream is mobile engineer</p>
                    <p className="no-margin">I study mobile engineering languages</p>
                    <p className="no-margin">not released yet, but I wanna release immediately.</p>
                    <p className="no-margin">by the way I hate apple.</p>
                    <p className="no-margin">because developping iPhone App need double developers.</p>
                </div>
            </div>
        </div>
        <div className="top-margin-5 width-side-tiny left-margin-5">
            <TepoIcons />
        </div>
    </div>
}
