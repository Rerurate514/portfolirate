export const Planet = () => {
    return <div className="pn-scene relative">
        <div className="pn-surface absolute">
            <svg width={"400px"} height={"400px"}>
                <circle cx={200} cy={200} r={100} fill="#F6EFE2" stroke="#201919" stroke-width="4px"></circle>
            </svg>
        </div>
        <div className="pn-surface-upon absolute">
            <svg width={"400px"} height={"400px"}>
                <circle cx={200} cy={200} r={100} fill="#F6EFE2" stroke="#201919" stroke-width="4px"></circle>
            </svg>
        </div>
        <div className="pn-rings-wrapper">
            <div className="pn-rings">
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={140}></circle>
                    </svg>
                </div>
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={150}></circle>
                    </svg>
                </div>
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={160}></circle>
                    </svg>
                </div>
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={170}></circle>
                    </svg>
                </div>
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={180}></circle>
                    </svg>
                </div>
                <div className="pn-ring absolute">
                    <svg width={"400px"} height={"400px"}>
                        <circle className="pn-circle" cx={200} cy={200} r={190}></circle>
                    </svg>
                </div>
            </div>
        </div>
    </div>
}
