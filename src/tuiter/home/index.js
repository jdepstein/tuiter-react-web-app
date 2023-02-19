import posts from "./posts.json";
import PostItem from "./post-item";

const HomeComponent = () => {
    return(


        posts.map((post, i)  => {
            return(
                <div key={i} className="p-3 border-secondary border-bottom pb-4 pt-3">
                    <PostItem post={post}/>
                </div>);
        })



    );
}
export default HomeComponent;