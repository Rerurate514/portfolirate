import { MirrorStr } from "./mirrorStr";
import { Planet } from "./planet";
import { SectionNumber } from "./sectionNumber";

export const Constellation = () => {
    return (
        <div className="futura-font-light margin-32 flex center">
            <div className="def-margin-top width-side-tiny">
                <Planet />
            </div>
            <div className=" width-side">
                <div className="flex padding-16 justify-bw underLine">
                    <SectionNumber num={5} text={"Constellation"} />
                    <div className="center font-64 futura-font-bold">
                        <MirrorStr str="Idealist"/>
                    </div>
                    <div className="left-text padding-8 font-16">
                        <span className="font-32">S</span>
                        <span>ince high school,</span>
                        <p>game, program</p>
                        <p>I loved them</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
