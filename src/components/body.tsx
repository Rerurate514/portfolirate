import { Section } from "./section";

export const Body = () => {
    return <div className="center">
        <h1 className="futura-font-bold back-black padding-16">
            Into 
            The 
            <span className="accent"> U</span>
            nknown 
            <span className="accent"> F</span>
            amiliar 
            <span className="accent"> W</span>
            orld
        </h1>
        <div className="futura-font-light back-black padding-8">
            <span className="padding-4">
                Rerurate Pioneer Project
            </span>
        </div>
        <Section />
    </div>;
}