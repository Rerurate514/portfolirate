import CountUp from "react-countup"
import { SectionNumber } from "./sectionNumber"
import { MirrorStr } from "./mirrorStr"

export const Contact = () => {
    return <div className="futura-font-light margin-32 flex left-margin-10 right-margin-10 top-margin-5">
    <div className="width-max">
        <div className="flex center underLine font-64">
            <div className="back-black font-32 left-padding-5 right-padding-5">
                セクション 7
            </div>
            <div className="flex bottom-text left-margin-10 right-margin-10">
                <div className="futura-font-light">
                    <span className="font-16">connect :::</span>
                    <span className="font-64"> = </span>
                    <strong className="number">
                        0
                        <CountUp end={7} duration={2.75}/>
                    </strong>
                    <span className="font-64">= </span>
                    <span className="font-16">::: contact</span>
                </div>
            </div>
            <div className="back-black font-64 left-padding-5 right-padding-5">
                未着手
            </div>
        </div>
        <div className="flex def-margin-top">
            
        </div>
    </div>
</div>
}
