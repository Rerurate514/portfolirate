export const MirrorStr = (prop: {str: string}) => {
    return <div className="mirror-str">
        <div>
            <strong>{prop.str}</strong>
        </div>
        <div className="mirror">
            <strong>{prop.str}</strong>
        </div>
    </div>
}
