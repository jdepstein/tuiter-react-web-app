import {useSelector} from "react-redux";
import SummaryItem from "./post-summary-item";
const PostSummaryList = (
) => {
    const postsArray = useSelector(state => state.tuits_sum)
    return (
        <div>
            {
                postsArray.map((summary)  => {
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