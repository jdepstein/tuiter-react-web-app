import summaries  from "./summaries.json"
import SummaryItem from "./post-summary-item";
const PostSummaryList = (
) => {
    return (
        <div>
            {
                summaries.map((summary, i)  => {
                    return(
                        <div key={i} className="wd-margin-top-12px wd-padding-bottom-12px">
                            <SummaryItem summary={summary}/>
                        </div>);
                })
            }
        </div>
    );

};
export default PostSummaryList