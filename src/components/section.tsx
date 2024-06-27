import "../css/section.css"
import { SectionNumber } from "./sectionNumber";

export const Section = () => {
    return (
        <div className="futura-font-light margin-32 width-side">
            <div className="flex padding-16 justify-bw underLine font-64">
                <SectionNumber num={"01"} text={"Section"} />
                <div className="left-text padding-8">
                    Project<br/>
                    <strong>
                    <span className="accent"> P</span>
                        ortfolirate
                    </strong>
                </div>
            </div>
            <div className="flex def-margin-top ">
                <div>
                    <span className="flex font-16">
                        solve Inteligence, Think Different
                    </span>
                    <div className="flex def-margin-top font-16">
                        <span className="right-text left-margin-5 font-32">
                            from<br/> 
                            <strong className="font-32">Rerurate_514</strong>
                        </span>
                    </div>
                </div>
                <div className="left-margin-20 left-text">
                    slow but steady wins the race
                    <br/><br/><br/>
                    Institute Of Tohoku Univ.
                </div>
            </div>
        </div>
    );
}