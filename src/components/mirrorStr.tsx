import "../css/mirror.css";

export const MirrorStr = (prop: {str: string}) => {
    return <div className="mirror-str">
        <div className="str">
            <strong>{prop.str}</strong>
        </div>
        <div className="mirror">
            <strong>{prop.str}</strong>
        </div>
    </div>
}
