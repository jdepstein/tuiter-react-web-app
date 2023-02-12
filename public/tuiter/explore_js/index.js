import NavigationSidebar from "./NavigationSidebar/NavBarList.js";
import WhoToFollow from "./WhoTofollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreScreen/explorecomponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
      <div class="row mt-2">
        <div class="container-fluid col-2 col-sm-2 col-md-2 col-lg-1 col-xl-3">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
        </div>
        
        <div class="container-fluid col-10 col-sm-10 col-md-10 col-lg-7 col-xl-5 border-secondary border-start border-end">
            ${ExploreComponent()}
        </div>
        
        <div class="container-fluid d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4" >
            ${WhoToFollow()}
        </div>
    </div>
   `);
}
$(exploreComponent);