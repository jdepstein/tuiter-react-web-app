import postItem from "./postItem.js";
import items from "./Post.js"

const PostItems = () => {
    return(
        `${
            items.map(item => {
                return(postItem(item));
            }).join('')
        }
    `)



}


export default PostItems;


