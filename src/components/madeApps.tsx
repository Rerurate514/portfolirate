import Oshiage from "../extra/oshiage.png";
import Oretier from "../extra/oretier.png";
import Obsidian from "../extra/obsiidna-plugin.png";
import Remusicalization from "../extra/remusicalization.png";
import Router from "../extra/router_unlocker.png";
import Tekupo from "../extra/tekuponoti.png";
import { MadeAppCard } from "./madeAppCard";
import { SectionNumber } from "./sectionNumber";
import { Typewriter } from "react-simple-typewriter";
import { LangThreeDbox } from "./3dBox";

const oshiageText = "This is Flutter Application. It is the winning entry in a certain bisiness contest.";
const oreText = "This is Flutter Application. ";
const remusicalizationText = "This is Flutter Application. ";
const routerText = "This is Flutter Application. ";
const tekupoText = "This is Flutter Application. ";

export const MadeApps = () => {
    return <div>
        <div className="futura-font-light margin-64">
            <div className="flex left-margin-5">
                <div className="flex padding-16 justify-bw underLine font-64 width-side">
                    <SectionNumber num={4} text={"Production"} />
                    <div className="left-text padding-8">
                        <i>
                        Made<br/>
                        <span className="accent"> A</span>
                            pplications
                        </i>
                    </div>
                </div>
                <div className="left-margin-10 right-margin-5">
                    <p className="align-left">
                        <span className="font-32">I </span>
                        made many applications.
                    </p>
                    <p className="bottom-margin">
                        Here is an example of applications I created.
                    </p>
                </div>
                <LangThreeDbox />
            </div>
        </div>
        <div className="flex def-margin-top">
            <MadeAppCard 
                imagePath={Oshiage} 
                title="Oshiage" 
                text={oshiageText}/>
            <MadeAppCard 
                imagePath={Oretier}
                title="Ore-tier" 
                text={oreText}/>
            <MadeAppCard 
                imagePath={Remusicalization} 
                title="Remusicalization" 
                text={remusicalizationText}/>
            <MadeAppCard 
                imagePath={Router} 
                title="Router-Unlocker" 
                text={routerText}/>
            <MadeAppCard 
                imagePath={Tekupo} 
                title="てくぽnotify"
                text={tekupoText}/>
            {/* <MadeAppCard imagePath={Obsidian} title="URM-ob-plugin" text=""/> */}
        </div>  
    </div>
}
