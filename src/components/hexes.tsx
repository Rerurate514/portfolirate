import { Hex } from "./hex"

export const Hexes = () => {
    return <div 
            className="justify-sa flex font-32 futura-font-bold margin-32"
            style={{"marginLeft": "80px"}}
    >
        <div className="">
            <Hex content="Flutter"/>
            <Hex content="React"/>
        </div>
        <div 
            className="cross back-black rotate"
            style={{"marginTop": "32%", "marginLeft":"18%"}}
        />
        <div className="">
            <Hex content="JS"/>
            <Hex content="Kotlin"/>
        </div>
    </div>;
}