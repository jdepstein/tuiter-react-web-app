const PostItemStats = (
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

        <div className="wd-margin-left-60px wd-font-family-arial mt-2">
            <ul className="w-100 nav p-0">
                <li className="wd-text-color-gray list-group-post m-auto ms-0 bg-transparent">
                    <i className="pe-1 fw-normal fa fa-comment"></i>
                    {post.comment}
                </li>
                <li className="wd-text-color-gray list-group-post m-auto bg-transparent">
                    <i className="pe-1 fa fa-retweet"></i>
                    {post.retuit}
                </li>
                <li className="wd-text-color-gray list-group-post m-auto bg-transparent">
                    <i className="pe-1 fw-normal fa fa-heart"></i>
                    {post.like}
                </li>
                <li className="wd-text-color-gray list-group-post m-auto bg-transparent">
                    <i className="fw-normal fa fa-share-square"></i>
                </li>
            </ul>
        </div>

    );
}
export default PostItemStats;