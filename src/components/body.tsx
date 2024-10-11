import { Typewriter } from "react-simple-typewriter";
import { Profile } from "./profile";
import { Section } from "./section";
import { TechStack } from "./techStack";
import { MadeApps } from "./madeApps";
import { BackGround } from "./background";
import logo from "../extra/portfolirate-logo.svg"
import { Constellation } from "./constellation";
import { ColorChangeLetters } from "./colorChangeLetters";
import { Temporal } from "./temporal";
import { LangIcons } from "./langIcons";
import { Contact } from "./contact";
import { RightsAndThanks } from "./rightsAndThanks";
 
export const Body = () => {
    return <div className="center justify-center relative">
        <div className="absolute width-max fixed">
            <BackGround />
        </div>
        <div className="absolute">
            <h1 className="futura-font-bold back-black padding-16">
                <span className="accent"> I</span>
                <Typewriter words={["nto "]}/>
                <span className="accent"> T</span>
                <Typewriter words={["he "]}/>
                <span className="accent"> U</span>
                <Typewriter words={["nknown "]}/>
                <span className="accent"> F</span>
                <Typewriter words={["amiliar "]}/>
                <span className="accent"> W</span>
                <Typewriter words={["orld"]}/>
            </h1>
            <div className="futura-font-light padding-8">
                <span className="padding-4">
                    <i>Rerurate Pioneer Project</i>
                </span>
            </div>
            <div className="flex justify-sa">
                <Section />
                <div className="center width-side-tiny">
                    <img src={logo} className="App-logo" alt="logo" width={512}/>
                </div>
            </div>
            <div className="vertical-margin">
                <Profile />
            </div>
            <div className="vertical-margin">
                <TechStack />
            </div>
            <div className="vertical-margin">
                <LangIcons />
            </div>
            <div className="vertical-margin">
                <MadeApps />
            </div>
            <div className="vertical-margin">
                <Constellation />
            </div>
            <div className="vertical-margin">
                <ColorChangeLetters />
            </div>
            <div className="vertical-margin">
                <Temporal />
            </div>
            <div className="vertical-margin">
                <Contact />
            </div>
            <div className="top-margin-5">
               <RightsAndThanks /> 
            </div>
        </div>
    </div>
}
