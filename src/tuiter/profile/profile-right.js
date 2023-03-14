import PostSummaryList from "../post-summary-list";
import EndLinks from "../who-to-follow-list/endlinks";
import FollowList from "../who-to-follow-list/follow-list";

const ProfileComponentRight = () => {
    return(
        <>
            <FollowList/>
            <div className="wd-bg-off-white rounded mt-3">
                <div className="pt-3 ms-3 text-dark wd-text-20px fw-bold wd-font-family-arial">What’s happening</div>
                <PostSummaryList/>
            </div>

            <EndLinks/>
        </>


    );
}
export default ProfileComponentRight;