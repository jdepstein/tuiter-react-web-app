import navs  from "./navs.json"
import SidebarItem from "./sidebar-item";
const NavigationSidebar = (
) => {

    return (
        <div>
            <ul className="ps-3 mb-1 wd-text-20px list-group" role="group">
                {
                    navs.map((nav, i) => {
                        return(
                            <li key={i} className="list-group-item mt-3 border-0 rounded-pill">
                                < SidebarItem nav={nav}/>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="w-100 mb-1 ps-3 wd-text-20px text-center">
                <div className="w-100 mt-3 pt-1 pb-1 wd-bg-blue btn-lg rounded-pill">
                    <i className="ps-1 text-white fw-bold d-xl-none fa fa-feather d-inline"></i>
                    <p className="p-0 m-0 text-white fw-bold d-none d-xl-block d-inline"> Tuit </p>
                </div>
            </div>
        </div>
        );

};
export default NavigationSidebar