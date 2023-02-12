import items from "./who.js";
import FollowItem from "./whoToFollowListItem.js";

const WhoToFollow = () => {
    return(`
        <div class="pe-3 ps-3">
            <ul class="text-center list-group wd-rounded wd-bg-light-black" role="group">
                <lh class="float-start list-group-item bg-transparent wd-text-20px fw-bold text-white border-0">
                    <p class="float-start m-0 mt-1">Who to Follow</p>
                </lh>
                ${
                items.map(item => {
                    return(FollowItem(item));
                }).join('')
                }
                <li class="list-group-item border-0 wd-text-blue bg-transparent">
                    <p class="float-start m-0">Show More</p>
                </li>
            </ul>
            <br>
            <div class="wd-text-medium-gray mt-1 float-start" >
                <a href="#" class="wd-text-medium-gray wd-no-underline">Terms of Service</a>
                <a href="#"  class="wd-text-medium-gray wd-no-underline">Privacy Policy</a>
                <a href="#"  class="wd-text-medium-gray wd-no-underline">Cookie Policy</a><br>
                <a href="#"  class="wd-text-medium-gray wd-no-underline">Accessibility</a>
                <a href="#"  class="wd-text-medium-gray wd-no-underline">Ads info</a>
                <a href="#"  class="wd-text-medium-gray wd-no-underline">More ...</a><br>
                <span> © 2023 Tuiter, Inc. </span>
            </div>
        </div>
        `);
}
export default WhoToFollow;