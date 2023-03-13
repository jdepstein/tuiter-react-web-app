import PostItemText from "./post-item-text";
import PostItemStats from "./post-item-stats";

const PostItemImage = (
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
            liked: false,
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
            <div className="wd-margin-left-60px card bg-transparent border-secondary">
                <img alt="" className="w-100 card-img" src={post.post_image}/>
                    {post.post_image_text ?
                        <div className="card-footer bg-transparent">
                          <p className="text-dark wd-font-family-arial">
                             {post.post_image_text}
                          </p>
                          <p className="mb-0 text-secondary wd-text-color-white  wd-font-family-arial">
                            <i className="fa fa-link"></i>
                            rt.com
                          </p>
                        </div>
                    : ''
                    }
            </div>
            <PostItemStats post={post}/>
            {post.post_image_text ?
                 "" :
                <div className="wd-margin-left-60px wd-text-blue mt-2">
                    Show this thread
                </div>
            }

        </>
    );
}
export default PostItemImage;