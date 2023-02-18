const FollowItem = (
    {
        follow = {
            name: "FEDRA",
            handle: "@fedra",
            profile_pic: "../../images/fedra.png",
            verification:"../../images/badge_gold.png"
        }
    }) => {
    return(
            <div className ="row">
                <div className ="ps-1 col-2">
                    <img className ="mt-2 wd-image_round_48" src={follow.profile_pic}/>
                </div>

                <div className ="col-2 mt-2 text-nowrap">
                    <div className ="float-start fw-bold text-black">
                        {follow.name}
                        {follow.verification ? <img className="wd-image_20_square" src={follow.verification} /> : ''}
                    </div>
                    <div className ="float-start fw-normal text-secondary">
                        {follow.handle}
                    </div>
                </div>
                <div className ="col-8">
                    <button className ="wd-padding-left-16px wd-padding-right-16px float-end btn btn-sm bg-black mt-2 rounded-pill text-white fw-bold" >
                        Follow
                    </button>
                </div>
            </div>
    );
}
export default FollowItem