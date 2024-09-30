import React, { useState, useEffect } from 'react';

interface Point {
    x: number;
    y: number;
}

export const BackGround = () => {
    return <div className='stars relative'>
        <Star r={3} angle={13/10 * Math.PI}/>
        <Star r={5} angle={7/6 * Math.PI}/>
        <Star r={3} angle={5/4 * Math.PI}/>
        <Star r={2} angle={13/12 * Math.PI}/>
        <Star r={4} angle={19/14 * Math.PI}/>
    </div>
}

const Star = (props: {r: number, angle: number}) => {
    const r = props.r;
    const angle = props.angle;

    const X_BASE = window.innerWidth + 10;
    const Y_BASE = -10;

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
            inc(i + 1)

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
