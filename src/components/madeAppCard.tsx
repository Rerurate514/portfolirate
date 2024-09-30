export const MadeAppCard = (prop: {imagePath: string, title: string, text: string}) => {
    return <div className="image-card futura-font-light">
        <div className="bg-card relative bottom-margin">
            <img className="resizeimage" src={prop.imagePath} alt="app-image"/>
            <div className="absolute white bg-text-wrapper">
                <div className="bg-text">
                    {prop.text}
                </div>
            </div>
            <strong className="absolute white bg-title-wrapper font-16 flex">
                <div className="bg-title margin-8">
                    {prop.title}
                </div>
            </strong>
        </div>
    </div>;
}
