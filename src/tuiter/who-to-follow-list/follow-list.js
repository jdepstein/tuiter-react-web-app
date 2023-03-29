import FollowItem from "./who-to-follow-list-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findWhoThunk}
    from "../services/who-thunks";


const FollowList = () => {
    const {who, loading} = useSelector(
        state => state.whoData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findWhoThunk())
    }, [])

    return(
        <ul className="list-group wd-rounded">
            <li className="list-group-item wd-text-20px fw-bold text-black border-0 bg-transparent">
                <p className="float-start m-0 mt-1">Who to Follow</p>
            </li>

            {
                who.map((follow, i) => {
                    return(
                        <li key={i} className ="list-group-item pt-0 border-0 bg-transparent">
                            <FollowItem follow={follow}/>
                        </li>

                    );
                })
            }
            <li className="list-group-item border-0 bg-transparent">
                <p className="float-start wd-text-blue m-0">Show More</p>
            </li>
        </ul>
    );

};
export default FollowList