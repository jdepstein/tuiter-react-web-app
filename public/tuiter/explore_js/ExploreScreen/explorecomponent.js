import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import ExploreSearch from "./exploresearch.js";
import ExploreTabs from "./exploretabs.js";
import ExploreImage from "./exploreImage.js";
const ExploreComponent = () => {
    return(`
            <div class="row">
               ${ExploreSearch()}      
           </div>
           <div class="row border-bottom">
                ${ExploreTabs()}  
           </div>     
            ${ExploreImage()} 
           
           
          ${PostSummaryList()}
    `);
}
export default ExploreComponent;
