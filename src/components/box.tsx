export const Box = (props: {text: string, number: number}) => {
    return <div className="back-black padding-16">
        <div className="back-white padding-8">
            <span className="font-64">{props.number}</span>
            <span className="font-32">{props.text}</span>
            <div 
                className="back-white relative futura-font-bold horizontal-padding" 
                style={{"top": "26px", "left": "35px", "width": "45%"}}>Sector</div>
        </div>
    </div>
}