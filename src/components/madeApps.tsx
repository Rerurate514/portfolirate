import Oshiage from "../extra/oshiage.png";
import Oretier from "../extra/oretier.png";
import Remusicalization from "../extra/remusicalization.png";
import Router from "../extra/router_unlocker.png";
import Tekupo from "../extra/tekuponoti.png";
import fJutteS from "../extra/fjuttes-official-logo.svg";
import fiperes from "../extra/logo.png";
import { MadeAppCard } from "./madeAppCard";
import { SectionNumber } from "./sectionNumber";
import { LangThreeDbox } from "./3dBox";

import "../css/image.scss";
import { DeliverablesCard } from "./deliverablesCard";

const oshiageText = "This is Flutter Application. It is the winning entry in a certain bisiness contest.";
const oreText = "This is Flutter Application. ";
const remusicalizationText = "This is Flutter Application. ";
const routerText = "This is Flutter Application. ";
const tekupoText = "This is Flutter Application. ";

export const MadeApps = () => {
    return <div>
        <div className="futura-font-light margin-64">
            <div className="flex left-margin-5">
                <div className="flex justify-bw font-50 width-side underLine">
                    <div className="center">
                        <SectionNumber num={4} text={"Production"} />
                    </div>
                    <div className="left-text padding-8 center">
                        <i>
                        Made<br/>
                        <span className="accent"> A</span>
                            pplications
                        </i>
                    </div>
                </div>
                <div className="left-margin-5">
                    <p className="left-text">
                        <span className="font-32">I </span>
                        made many applications.
                    </p>
                    <p className="left-text bottom-margin">
                        Here is an example of applications I created.
                    </p>
                    <p className="left-text bottom-margin">
                        All apps is in My Github repositry.
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
        </div>
        <DeliverablesCard
            title="fJutteS"
            descrpption="fJutteS is a lightweight, declarative JavaScript UI framework enabling Flutter-like component development in restricted environments, featuring built-in components and a dedicated state management library, Jiperes."
            imagePath={fJutteS}
            url="https://rerurate514.github.io/fJutteS/"
        />
        <DeliverablesCard
            title="Fiperes"
            descrpption="A modern Flutter package with state management and dependency tracking, providing an easy-to-use API like React Hooks, but with powerful debugging capabilities."
            imagePath={fiperes}
            url="https://github.com/Rerurate514/Fiperes"
        />
        <DeliverablesCard
            title="Reluxidian"
            descrpption="Rust tutorial OS."
            url="https://github.com/Rerurate514/Reluxidian"
        />
        <DeliverablesCard
            title="Portfolirate"
            descrpption="Portfolirate is a portfolio site I created. It is created in React and SCSS."
            url="https://github.com/Rerurate514/Portfolirate"
        />
    </div>
}
