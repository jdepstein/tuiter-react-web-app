import NavigationSidebarItem from "./NavBarItem.js";
import items from "./navs.js"

const NavigationSidebar = () => {
    return(`
        <ul class="ps-3 mb-1 wd-text-20px list-group" role="group">
           ${
            items.map(item => {
                return(NavigationSidebarItem(item));
            }).join('')
            }
        </ul>
        <div class="w-100 mb-1 ps-3 wd-text-20px text-center">
            <a href ="../tuit.html" class="w-100 mt-3 pe-3 btn wd-bg-blue btn-block rounded-pill">
                <i class="me-2 text-white fw-bold pt-1  d-xl-none fa fa-feather"></i>
                <scan class="text-white d fw-bol d-none d-xl-block"> Tuit </scan>
            </a>
        </div>
        `);
}
export default NavigationSidebar;