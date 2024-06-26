import { Hexes } from "./hexes";
import { Profile } from "./profile";
import { Section } from "./section";

export const Body = () => {
    return <div className="center justify-center">
        <h1 className="futura-font-bold back-black padding-16">
            Into 
            <span className="accent"> T</span>
            he 
            <span className="accent"> U</span>
            nknown 
            <span className="accent"> F</span>
            amiliar 
            <span className="accent"> W</span>
            orld
        </h1>
        <div className="futura-font-light padding-8">
            <span className="padding-4">
                <i>Rerurate Pioneer Project</i>
            </span>
        </div>
        <div className="flex justify-sa">
            <Section />
            <Hexes />
        </div>
        <Profile />
    </div>
}