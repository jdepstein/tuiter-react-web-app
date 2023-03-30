import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profileArray = useSelector(
        (state) => state.profile);
    const [profile, setProfile] = useState(profileArray[0])
    const [edit_b_day, setBday] = useState(false)
    const editBday = () => {
       setBday(!edit_b_day)
    }

    const updateProfileHandler = () => {
        dispatch(updateProfile(profile))
    }

    const updateProfileLocationHandler = (target) => {
        setProfile({...profile, location: target})
    }

    const updateProfileBioHandler = (target) => {
        setProfile({...profile, bio: target})
    }

    const updateProfileNameHandler = (target) => {
        setProfile({...profile, Name: target})
    }

    const updateProfileWebsiteHandler = (target) => {
        setProfile({...profile, website: target})
    }

    const updateProfileBdayHandler = (target) => {
        setProfile({...profile, dateOfBirth: target})
    }


    return(
        <>
            <div className="row mt-2 mb-1">
                <div className="col-2">
                    <Link to="../profile" className="wd-no-underline">
                        <i className="wd-text-20px p-2 rounded-pill text-dark ms-3 mt-1 wd-focus fa fa-x"></i>
                    </Link>
                </div>
                <div className="col-6">
                    <div className="mt-2 wd-text-20px text-dark wd-font-family-arial fw-bold" >
                        Edit Profile
                    </div>
                </div>
                <div className="col-4">
                    <Link to="../profile" onClick={window.location.reload}} className="wd-no-underline">
                        <button onClick={() => updateProfileHandler()} className="mt-2 float-end btn rounded-pill border bg-large bg-dark text-white fw-bold wd-text-15px mt-2 me-3">
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="wd-filter-dark position-relative">
                <img alt="" src={profile.bannerPicture} className="opacity-50 w-100"/>
                <div className="position-absolute wd-banner-icon-shift wd_round_80 bg-opacity-75 bg-dark">
                    <i className="fa position-absolute fa-camera text-white wd-icon-shift-2 h4"></i>
                </div>
                <div className="position-absolute wd-banner-icon-shift-2 wd_round_80 bg-opacity-75 bg-dark">
                    <i className="fa position-absolute fa-x text-white wd-icon-shift h4"></i>
                </div>

                <div>
                    <i></i>
                </div>
            </div>
            <div className="row position-relative mb-5">
                <div className="col-8">
                    <div className="wd-filter-dark position-absolute wd-pos-profile wd-image_146_round">
                        <img alt="" src={profile.profilePicture} className="wd-filter-dark opacity-50 wd-image_146_round  border border-5 border-white m-0 p-0"/>
                        <div className="position-absolute wd-profile-icon-shift wd_round_80 bg-opacity-75 bg-dark">
                            <i className="fa position-absolute fa-camera text-white wd-icon-shift-2 h4"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <Link to="../edit-profile" className="wd-no-underline">
                        <button className="float-end btn rounded-pill border bg-large bg-white fw-bold wd-text-15px mt-2 me-2 text-white border-0 disabled"> Edit profile</button>
                    </Link>
                </div>
            </div>

            <div className="ps-4 pb-4 mb-4 mt-5">
                <form className="form-floating mb-3">
                    <input className="form-control wd-text-13px text-dark wd-font-family-arial w-75"
                     value={profile.Name}
                     id="name"
                     onChange={(e) => updateProfileNameHandler(e.target.value)}>
                    </input>
                    <label className="floatingInputValue" htmlFor="name"> name</label>
                </form>

                <form className="form-floating mb-3">
                    <textarea className="form-control wd-text-13px text-dark wd-font-family-arial w-75"
                              value={profile.bio}
                              id="bio"
                              onChange={(e) => updateProfileBioHandler(e.target.value)}>
                    </textarea>
                    <label className="floatingInputValue" htmlFor="bio"> Bio</label>
                </form>

                <form className="form-floating mb-3">
                    <input className="form-control wd-text-13px text-dark wd-font-family-arial w-75"
                              value={profile.location}
                              id="location"
                              onChange={(e) => updateProfileLocationHandler(e.target.value)}>
                    </input>
                    <label className="floatingInputValue" htmlFor="location"> Location</label>
                </form>

                <form className="form-floating mb-3">
                    <input className="form-control wd-text-13px text-dark wd-font-family-arial w-75"
                           value={profile.website}
                           id="website"
                           onChange={(e) => updateProfileWebsiteHandler(e.target.value)}>

                    </input>
                    <label className="floatingInputValue" htmlFor="website">Website</label>
                </form>

                {edit_b_day ?
                    <>
                        <div className="mb-2">
                            Birth date
                            <span onClick={editBday} className="wd-text-blue mb-1"> Cancel</span> <br/>
                            <div className="mb-1">This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.</div>
                            <div>
                                Tuiter uses your age to customize your experience, including ads, as explained in our
                                <span className="wd-text-blue"> Privacy Policy.</span>
                            </div>
                        </div>
                        <form className="form-floating mb-3">
                            <input type="date" className="form-control wd-text-13px text-dar wd-font-family-arial w-75"
                                   value={profile.dateOfBirth}
                                   onChange={(e) => updateProfileBdayHandler(e.target.value)}>
                            </input>
                        </form>
                    </>
                    :
                    <div>
                        Birth date
                        <span onClick={editBday} className="wd-text-blue mb-1"> edit</span> <br/>
                        {profile.dateOfBirth}
                    </div>
                }
                <div className="text-dark wd-font-family-arial mt-3">
                    Switch to Professional
                    <i className="ps-2 fa fa-chevron-right"></i>
                </div>
            </div>

        </>

    );
}
export default EditProfileComponent;