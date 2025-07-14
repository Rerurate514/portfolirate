import React, { useState, useEffect } from 'react';
import { Hexes } from './hexes';

import "../css/background.scss";
import "../css/orbit.scss";

interface Point {
    x: number;
    y: number;
}

export const BackGround = () => {
    return <div className='width-max relative'>
        {/* <div className='absolute'>
            <Orbit />
        </div> */}
        <div className='stars absolute'>
            <Star r={4} angle={195 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={5} angle={200 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={2} angle={205 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={3} angle={210 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={5} angle={215 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={3} angle={220 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={2} angle={225 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
            <Star r={4} angle={230 + (Math.random() * 10) - (Math.random() * 10)} speedFactor={Math.random()}/>
        </div>
        <div className='absolute'>
            <Hexes />
        </div>
    </div>
}

const Star = (props: {r: number, angle: number, speedFactor: number}) => {
    const r = props.r;
    const angle = (props.angle) * Math.PI / 180;
    const speed = props.speedFactor + 3.5;

    const X_BASE = window.innerWidth + 10;
    const Y_BASE = 0;

    const X_LIMIT = -window.innerWidth * 1.3;
    const Y_LIMIT = -window.innerHeight * 1.3;

    const SVG_COLOR = '#20191986'

    const INIT_POINT = {x: X_BASE, y: Y_BASE}

    const [point, setPoint] = useState<Point>(INIT_POINT);
    const [i, inc] = useState<number>(0);

    const [lineBase, setLineBase] = useState<Point>(INIT_POINT);

    useEffect(() => {
        const interval = setInterval(() => {
            const x = Math.cos(angle) * (r + i);
            const y = Math.sin(angle) * (r + i);

            setPoint({x: X_BASE + x, y: -y});
            inc(i + speed)

            if(i > 256) {
                const linex = Math.cos(angle) * (r + (i - 256));
                const liney = Math.sin(angle) * (r + (i - 256));
                setLineBase({x: X_BASE + linex, y: -liney})
            }
            
            if(x <= X_LIMIT || y <= Y_LIMIT) {
                inc(0)
                setPoint(INIT_POINT)
                setLineBase(INIT_POINT)
                
            }

        }, 16); // 60fpsのアニメーションを実現するため、16msごとに更新 256, 1300
        return () => clearInterval(interval);
    }, [point]);

    return <div className='star absolute'>
        <svg width={window.innerWidth * 0.95 } height={window.innerHeight}>
            <circle cx={point.x} cy={point.y} r={r} fill={SVG_COLOR}/>
            <line x1={lineBase.x} y1={lineBase.y} x2={point.x} y2={point.y} stroke={SVG_COLOR} strokeWidth={1}></line>
        </svg>
    </div>
}

const Orbit = () => {
    const SVG_COLOR = '#AEB833';
    const SVG_COLOR_BL = '#20191946';

    return (
        <div className="relative">
            <svg width={"2000px"} height={"2000px"} fill='transparent'>
                <circle className="orbit-cir-1" stroke={SVG_COLOR_BL} strokeWidth={"6px"} cx={100} cy={1400} r={1700}/>
                <circle className="orbit-cir-2" stroke={SVG_COLOR_BL} strokeWidth={"5px"} cx={100} cy={1400} r={1675}/>
                <circle className="orbit-cir-3" stroke={SVG_COLOR_BL} strokeWidth={"4px"} cx={100} cy={1400} r={1650}/>
                <circle className="orbit-cir-4" stroke={SVG_COLOR_BL} strokeWidth={"3px"} cx={100} cy={1400} r={1625}/>
                <circle className="orbit-cir-5" stroke={SVG_COLOR_BL} strokeWidth={"2px"} cx={100} cy={1400} r={1600}/>
                
                <circle className="orbit-cir-6" stroke={SVG_COLOR} strokeWidth={"32px"} cx={200} cy={200} r={1530} />
                <circle className="orbit-cir-7" stroke={SVG_COLOR} strokeWidth={"16px"} cx={200} cy={200} r={1400} />
                <circle className="orbit-cir-8" stroke={SVG_COLOR} strokeWidth={"8px"} cx={200} cy={200} r={1300} />
                <circle className="orbit-cir-9" stroke={SVG_COLOR} strokeWidth={"4px"} cx={200} cy={200} r={1200} />
                <circle className="orbit-cir-10" stroke={SVG_COLOR} strokeWidth={"2px"} cx={200} cy={200} r={1100} />
                <circle className="orbit-cir-11" stroke={SVG_COLOR} strokeWidth={"1px"} cx={200} cy={200} r={1000} />
            </svg>
        </div>
    );
};
