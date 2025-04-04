import { useState } from "react";
import { Hex, SpacerHex } from "./hex"

export const Hexes = () => {

    return <div className="hexes relative flex center justify-center">
        <div className="hex-col hex-left-10">
            <Hex />
            <Hex />
            <SpacerHex />
        </div>        
        <div className="hex-col hex-left-9">
            <Hex />
            <Hex />
            <Hex />
            <SpacerHex />
        </div>        
        <div className="hex-col hex-left-8">
            <Hex />
            <Hex />
            <SpacerHex />
        </div>        
        <div className="hex-col hex-left-7">
            <Hex />
            <Hex />
            <Hex />
            <SpacerHex />
        </div>        
        <div className="hex-col hex-left-6">
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-left-5">
            <Hex />
            <Hex />
            <Hex />
            <SpacerHex />
        </div>
        <div className="hex-col hex-left-4">
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-left-3">
            <Hex />
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-left-2">
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-left-1">
            <Hex />
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col">
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-right-1">
            <Hex />
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-right-2">
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-right-3">
            <Hex />
            <Hex />
            <Hex />
            <Hex />
        </div>
        <div className="hex-col hex-right-4">
            <Hex />
        </div>
    </div>;
}
