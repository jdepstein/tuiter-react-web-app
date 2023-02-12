import NavigationSidebar from "./NavigationSidebar/NavBarList.js";
import PostSummaryList from "./PostList/PostSummaryList/PostSummaryList.js";
import postItems from "./PostList/PostItems.js";

function exploreComponent() {
    $('#wd-home').append(`
      <div class="row mt-2">
        <div class="container-fluid col-2 col-sm-2 col-md-2 col-lg-1 col-xl-3">
            <!--<h3>Navigation Sidebar</h3>-->
            ${NavigationSidebar()}
        </div>
        
        <div class="container-fluid col-10 col-sm-10 col-md-10 col-lg-7 col-xl-5
                border-secondary border p-0 mb-5">
            ${postItems()}          
        </div>
        
        <div class="container-fluid d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4" >
             ${PostSummaryList()}
        </div>
    </div>
   `);
}
$(exploreComponent);