export const TepoIcons = () => {
    return <div className="flex justify-sa">
        <div className="relative">
            <div className="card-ab-1"><TepoPhone /></div>
            <div className="card-ab-2"><TepoPhone /></div>
            <div className="card-ab-3"><TepoPhone /></div>
            <div className="card-ab-4"><TepoPhone isPull/></div>
            <div className="card-ab-5"><TepoPhone /></div>
            <div className="card-ab-6"><TepoPhone /></div>
            <div className="card-ab-7"><TepoPhone /></div>
            <div className="card-ab-8"><TepoPhone /></div>
            <div className="card-ab-9"><TepoPhone /></div>
            <div className="card-ab-10"><TepoPhone /></div>
        </div>
        <div className="relative">
            <div className="card-ab-1"><TepoFlutter /></div>
            <div className="card-ab-2"><TepoFlutter /></div>
            <div className="card-ab-3"><TepoFlutter /></div>
            <div className="card-ab-4"><TepoFlutter /></div>
            <div className="card-ab-5"><TepoFlutter /></div>
            <div className="card-ab-6"><TepoFlutter /></div>
            <div className="card-ab-7"><TepoFlutter /></div>
            <div className="card-ab-8"><TepoFlutter isPull /></div>
            <div className="card-ab-9"><TepoFlutter /></div>
            <div className="card-ab-10"><TepoFlutter /></div>
        </div>
    </div>
}

const TepoPhone = ({ isPull }: { isPull?: boolean }) => {
    var cl = "back-black padding-8 card";
    var pu = "phone"

    if(isPull){
        pu += " card-ac-phone";
        cl += " card-pull";
    }

    return <svg className={cl} width="128px" height="128px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={pu} d="M12 19.01L12.01 18.9989" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
        <path className={pu} d="M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" stroke-width="1" stroke-linecap="round"></path>
        <path className={pu} d="M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" stroke-width="1" stroke-linecap="round"></path>
        <path className={pu} d="M15.5 8.5L19 12L15.5 15.5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
        <path className={pu} d="M8.5 8.5L5 12L8.5 15.5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
}

const TepoFlutter = ({ isPull }: { isPull?: boolean }) => {
    var cl = "back-black padding-8 card";
    var pu = "flutter"

    if(isPull){
        pu += " card-ac-flutter";
        cl += " card-pull";
    }

    return <svg className={cl} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="128px" height="128px" viewBox="0 0 24 24">
        <path className={pu} d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z"></path>
    </svg>
}
