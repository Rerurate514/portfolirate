export const SectionNumber = (props: {num: string, text: string}) => {
    return <div className="futura-font-light">
        <strong className="number">{props.num}</strong>
        <span className="font-64">/</span>
        <span className="font-16">::: {props.text}</span>
    </div>
}