import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import FollowList from "./who-to-follow-list";
import SummaryList from "./post-summary-list";
import ExploreComponent from "./explore";


function Tuiter() {
    return (
        <div>
            <Nav/>
            <div className="row mt-2">

                <div className="container-fluid col-1 col-sm-2 col-md-2 col-lg-1 col-xl-3">
                    <NavigationSidebar/>
                </div>

                <div className="container-fluid col-11 col-sm-10 col-md-10 col-lg-7 col-xl-6 border-secondary border-start border-end">
                    <ExploreComponent/>
                    <SummaryList/>
                </div>

                <div className="container-fluid d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-3">
                    <FollowList/>
                </div>
            </div>
        </div>
    )
}
export default Tuiter