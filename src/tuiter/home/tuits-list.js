import PostItemImage from "./post-item-image";
import PostItemRegular from "./post-item-regular";
import PostItemRetuit from "./post-item-retuit";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findTuitsThunk}
    from "../services/tuits-thunks";


function render_post_type(post) {
    switch (post.type) {
        case "image":
            return <PostItemImage post={post}/>;
        case "regular":
            return <PostItemRegular post={post}/>;
        case "retuit":
            return <PostItemRetuit post={post}/>;
        default:
            return "";
    }
}


const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <>
        {
            loading &&
        <li className="list-group-item">
            Loading...
        </li>
        }
            {
                tuits.map(post  =>
                    <div key={post._id} className="p-3 border-secondary border-bottom pb-4 pt-3">
                        {render_post_type(post)}
                    </div>)
            }
        </>

    );
}
export default TuitsList