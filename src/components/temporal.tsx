import { SectionNumber } from "./sectionNumber"
import "../css/temporal.scss"
import { TepoIcons } from "./tepoIcon"

export const Temporal = () => {
    return <div className="futura-font-light margin-32 flex left-margin-10">
        <div className="width-side">
            <div className="flex padding-16 justify-bw underLine font-64">
                <SectionNumber num={6} text={"Temporal frontier"} />
                <div className="helvetica-font left-text padding-8">
                    <p className="accent-first no-margin">MOBILE</p>
                    <p className="no-margin">ENGINEER</p>
                </div>
            </div>
            <div className="flex def-margin-top ">

            </div>
        </div>
        <div className="def-margin-top width-side-tiny left-margin-5">
            <TepoIcons />
        </div>
    </div>
}
