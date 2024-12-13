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
                    <p className="accent-first no-margin">
                        <strong>MOBILE</strong>
                    </p>
                    <p className="no-margin">
                        <strong>Engineer</strong>
                    </p>
                </div>
            </div>
            <div className="flex def-margin-top tempo-grid">
                <div className="font-64 def-margin-top iwanna-grid">
                    <MirrorStr str="I wanna"/>
                    <MirrorStr str="be a"/>
                </div>
                <div className="left-text left-margin-10">
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
