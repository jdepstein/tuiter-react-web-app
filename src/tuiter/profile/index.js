import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);
    const profile = profileArray[0]
    return(
        <>
            <div className="row mt-2">
                <div className="col-1">
                    <Link to="../home" className="wd-no-underline">
                        <i className="wd-text-13px p-2 rounded-pill text-dark fa fa-arrow-left ms-2 mt-2 wd-focus"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <div className=" wd-text-20px text-dark wd-font-family-arial fw-bold" >
                        {profile.Name}
                    </div>
                    <div className="wd-text-13px text-secondary wd-font-family-arial " >
                        {profile.tuitCount} Tuits
                    </div>
                </div>
            </div>
                <img alt="" src={profile.bannerPicture} className="w-100"/>
                <div className="row position-relative mb-5">
                    <div className="col-8">
                        <img alt="" src={profile.profilePicture} className="wd-image_146_round wd-pos-profile position-absolute border border-5 border-white m-0 p-0"/>
                    </div>
                    <div className="col-4">
                        <Link to="../edit-profile" className="wd-no-underline">
                            <button className="float-end btn rounded-pill border bg-large bg-white fw-bold wd-text-15px mt-2 me-2"> Edit profile</button>
                        </Link>
                    </div>
                </div>
                <div className="ps-4 pb-4 mb-4">
                    <div className=" wd-text-20px text-dark wd-font-family-arial fw-bold" >
                        {profile.Name}
                    </div>
                    <div className="wd-text-15px text-secondary wd-font-family-arial mb-2" >
                        {profile.handle}
                    </div>
                    <div className="wd-text-15px text-secondary wd-font-family-arial mb-2 me-1" >
                        {profile.bio}
                    </div>
                    <div className="wd-text-15px text-secondary wd-font-family-arial mb-2">
                        <i className="wd-text-medium-gray bi bi-geo-alt me-1"></i>
                        {profile.location}
                        <i className="wd-text-medium-gray fa fa-birthday-cake ms-3 me-1"></i>
                        {profile.dateOfBirth}
                        <i className="wd-text-medium-gray bi bi-calendar3 ms-3 me-1"> </i>
                        {profile.dateJoined}
                    </div>
                    <div className="wd-text-15px text-secondary wd-font-family-arial mb-2">
                        <span className="text-dark fw-bold me-1">{profile.followingCount}</span>
                        Following
                        <span className="text-dark fw-bold me-1 ms-3">{profile.followersCount}</span>
                        Follwers
                    </div>

                </div>

            
        </>


    );
}
export default ProfileComponent;