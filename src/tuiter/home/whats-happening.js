import React, {useEffect, useState} from "react";
import {createTuitThunk}
    from "../services/tuits-thunks";

import {findProfileThunk}
    from "../services/profile-thunks";

import {useDispatch, useSelector} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    let {profile, loading} = useSelector(
        state => state.profileData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findProfileThunk())
    }, [])


    const tuitClickHandler = () => {
        const newTuit = {
            post_text: whatsHappening,
            profile_pic: profile.profilePicture,
            name: profile.Name,
            handle: profile.handle,
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening("");
    }

    return(
        <div className="row">
            <div className="col-auto">
                <img alt="" src={profile.profilePicture} className="wd-image_round_48 pt-2 ps-2"/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0 mt-2 "
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill border-0 wd-bg-blue text-white float-end mt-2 ps-4 pe-4 pt-2 pb-2 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="wd-text-blue mt-2 pt-2">
                        <i className="fa fw-normal fa-image me-3 h5"></i>
                        <i className="bi bi-filetype-gif me-3 h5"></i>
                        <i className="fa  fa-list me-3 h5"></i>
                        <i className="fa fw-normal fa-face-smile me-3 h5"></i>
                        <i className="fa fw-normal fa-calendar me-3 h5"></i>
                        <i className="fa fa-location-dot h5"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>

    );
}
export default WhatsHappening;