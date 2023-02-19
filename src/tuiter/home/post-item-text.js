const PostItemText = (
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
            <div className="row">
                <div className="col-1">
                    <img alt="" className=" wd-image_round_55 float-start" src={post.profile_pic}/>
                </div>

                <div className="col-10">
                    <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3 p fw-bold wd-font-family-arial text-dark text-wrap d-inline">
                        {post.name}
                    </p>
                    <p className="p-0 m-0 ps-1 wd-font-family-arial text-secondary text-nowrap d-inline">
                        {post.handle}  &#xb7; {post.post_date}
                    </p>
                    <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3  mt-1 wd-font-family-arial text-dark text-wrap">
                        {post.post_text}
                    </p>
                </div>

                <div className="col-1">
                    <i className="fa fa-ellipsis-h float-end wd-margin-right-16px text-secondary"></i>
                </div>
            </div>
        </>

    );
}
export default PostItemText;