import PostItemStats from "./post-item-stats";
import PostItemText from "./post-item-text";

const PostItemReTuit = (
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
            <PostItemText post={post} />
            <div className="wd-margin-left-60px me-2 mt-3">
                <div className="border rounded row pb-2 pt-2" >
                    <div className="col-1">
                        <img alt="" className=" wd-image_round_48 float-start" src={post.retuit_info.profile_pic}/>
                    </div>

                    <div className="col-10">
                        <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3 p fw-bold wd-font-family-arial text-dark text-wrap d-inline">
                            {post.retuit_info.name}
                        </p>
                        <p className="p-0 m-0 ps-1 wd-font-family-arial text-secondary text-nowrap d-inline">
                            {post.retuit_info.handle}  &#xb7; {post.retuit_info.post_date}
                        </p>
                        <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3  mt-1 wd-font-family-arial text-dark text-wrap">
                            {post.retuit_info.post_text}
                        </p>
                    </div>
                </div>
            </div>
            <PostItemStats post={post} />

        </>

    );
}
export default PostItemReTuit;