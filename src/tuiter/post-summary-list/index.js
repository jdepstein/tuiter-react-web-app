import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import SummaryItem from "./post-summary-item";

import {findSummariesThunk}
    from "../services/summaries-thunk";

const PostSummaryList = () => {
    let {summaries, loading} = useSelector(
        state => state.summariesData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findSummariesThunk())
    }, [])
    if (summaries === undefined) {
        summaries = []
    }
    return (
        <div>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                summaries.map((summary)  => {
                    return(
                        <div key={summary._id} className="wd-margin-top-12px wd-padding-bottom-12px">
                            <SummaryItem summary={summary}/>
                        </div>);
                })
            }
        </div>
    );

};
export default PostSummaryList