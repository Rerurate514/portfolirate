import "../css/deliverables.scss";

import Default from "../extra/default_image.svg";

export const DeliverablesCard = (
    props: {
        title: string, 
        descrpption: string, 
        imagePath?: string, 
        url: string
    }
) => {
    const imageSource = props.imagePath || Default;

    return <div className="top-margin-5 center liberty-font">
        <div className="flex left-margin-15 right-margin-15">
            <img className="img-resize rd-img b-s" src={imageSource} alt="app-image"/>
            <div className="left-margin-5 flex-c flex-g-1">
                <h2 className="accent-first font-32 underline left">
                    {props.title}
                </h2>
                <p className="left futura-font-light f-font-32">
                    {props.descrpption}
                </p>
                <div className="left futura-font-light">
                    <a href={props.url}>
                        {props.url}
                    </a>
                </div>
            </div>
        </div>
    </div>
}
