const PostItem = (
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
        }

    }
) => {
    return(
        <>
            <div className="row">
                <div className="col-1">
                    <img className=" wd-image_round_60 float-start" src={post.profile_pic}/>
                </div>

                <div className="col-10">
                    <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3 p fw-bold wd-font-family-arial text-dark text-wrap">
                        {post.name}
                    </p>

                    <p className="p-0 m-0 ps-5 ps-sm-4 ps-md-3 wd-font-family-arial text-secondary text-nowrap">
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

            <div className="wd-margin-left-60px card bg-transparent border-secondary">
                <img className="w-100 wd-height-300 card-img" src={post.post_image}/>
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
        </>
    );
}
export default PostItem;