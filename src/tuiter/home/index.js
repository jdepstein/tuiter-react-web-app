import posts from "./posts.json";
import PostItemImage from "./post-item-image";
import PostItemRegular from "./post-item-regular";
import PostItemRetuit from "./post-item-retuit";

function render_post_type(post) {
    switch (post.type) {
        case "image":
            return <PostItemImage post={post}/>;
        case "regular":
            return <PostItemRegular post={post}/>;
        case "retuit":
            return <PostItemRetuit post={post}/>;
        default:
            return "";
    }
}


const HomeComponent = () => {
    return(


        posts.map((post, i)  => {
            return(
                <div key={i} className="p-3 border-secondary border-bottom pb-4 pt-3">
                    {render_post_type(post)}
                </div>);
        })



    );
}
export default HomeComponent;