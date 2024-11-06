import React, { useState, useEffect } from 'react';
import { Hexes } from './hexes';

import "../css/background.scss";

interface Point {
    x: number;
    y: number;
}

export const BackGround = () => {
    return <div className='width-max relative'>
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
