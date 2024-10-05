import { MirrorStr } from "./mirrorStr";
import { Planet } from "./planet";
import { SectionNumber } from "./sectionNumber";

export const Constellation = () => {
    return <div className="futura-font-light margin-32 flex center">
        <div className="def-margin-top width-side-tiny">
            <Planet />
        </div>
        <div className=" width-side">
            <div className="flex padding-16 justify-bw underLine">
                <SectionNumber num={5} text={"Constellation"} />
                <div className="center font-64 futura-font-bold">
                    <MirrorStr str="Idealist" />
                </div>
                <div className="left-text padding-8 font-16">
                    <span className="font-32">S</span>
                    <span>ince high school,</span>
                    <p>Game, Program</p>
                    <p>I loved them</p>
                </div>
            </div>
            <div className="flex margin-16 left-text">
                <div>
                    <p>I through this.</p>
                    <p>"Program is like game."</p>
                    <p>"and Game is like program."</p>
                    <p>Why not coding?</p>
                </div>
                <div className="left-margin-10 width-max margin-16">
                    <div className="back-black ">　</div>
                    <div className="back-black width-side def-margin-top">　</div>
                    <div className="flex def-margin-top font-8">
                        <div className="left-text">
                            This site was created for coolness only.<br />
                            This text is very small because For coolness.<br />
                            and I'm not good at English.<br />
                            Squint and enjoy the mystery. <br/>
                            This site defies logic, embracing quirkiness over clarity.
                        </div>
                        <div className="left-margin-5">
                            TSWCFCO<br />
                            TTIVSBFC<br />
                            AINGAE<br />
                            SAETM<br />
                            TSDLEQOC
                        </div>
                        <div className="left-text left-margin-20">
                            and I like rock music.<br />
                            Especially, It is "starset".<br />
                            I was influenced by ArkKnights.<br />
                            In First, I listen to "Infected".<br />
                        </div>
                        <div className="left-margin-5">
                            WAT<br />
                            EISS<br />
                            IWIBAK<br />
                            IFILTI<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
