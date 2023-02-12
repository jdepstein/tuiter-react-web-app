import items from "./post.js";
import postItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(
        `${
            items.map(item => {
                return(postItem(item));
            }).join('')
            }
    `)



}


export default PostSummaryList;