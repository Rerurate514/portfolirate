import "../css/colorChangeLetters.scss";

export const ColorChangeLetters = () => {
    return <div>
        <div className="def-margin-top liberty-font">
            <div className="flex center box-wrapper center">
                <div className="mini-letters-wrapper flex center">
                    <b className="mini-letters deep font-32 letter-space-2 center"> DEEP</b>
                </div>
                <div className="mega-letters-wrapper flex">
                    <strong className="ditdea font-64 center mega-letters">Dive into the deep end alone</strong>
                </div>
                <div className="mini-letters-wrapper flex center">
                    <b className="mini-letters alone font-32 letter-space-2 center">ALONE</b>
                </div>
            </div>
        </div>
        <div className="width-max back-black stack-box"></div>
    </div>
}
