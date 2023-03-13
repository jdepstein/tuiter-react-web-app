import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            post_text: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }

    return(
        <div className="row">
            <div className="col-auto">
                <img src="/images/bob.jpg" className="wd-image_round_48 pt-2 ps-2"/>
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
                        <i className="fa fa-image me-3 h4"></i>
                        <i className="bi bi-filetype-gif me-3 h4"></i>
                        <i className="bi bi-bar-chart me-3 h4"></i>
                        <i className="bi bi-emoji-smile me-3 h4"></i>
                        <i className="fa fa-calendar me-3 h4"></i>
                        <i className="bi bi-geo-alt h4"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>

    );
}
export default WhatsHappening;