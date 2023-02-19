import PostItemText from "./post-item-text";
import PostItemStats from "./post-item-stats";

const PostItemRegular = (
    {
        post = {
            profile_pic: "",
            name: "",
            handle: "",
            post_date: "",
            post_image: "",
            post_image_text:  "",
            post_text: "",
            comment: "",
            like: "",
            retuit: "",
            type: "",
            retuit_info: ""
        }

    }
) => {
    return(
        <>
            <PostItemText post={post}/>
            <PostItemStats post={post}/>
        </>

    );
}
export default PostItemRegular;