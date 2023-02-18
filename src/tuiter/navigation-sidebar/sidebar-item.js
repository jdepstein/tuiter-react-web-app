import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const SidebarItem = (
    {
        nav = {
            icon: 'fab fa-twitter',
            link: '#',
            text: 'null'
        }
    }) => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
            <Link to={nav.link} className="wd-no-underline">
                <i className=
                       {`float-start me-2 pt-1 ${nav.icon}
                       ${active === nav.text || active === "" && nav.text === "Explore" ? 'wd-text-blue':'text-dark'}
                       `}>
                </i>
                <p className=
                          {`${nav.text ? 'd-none d-xl-block ' : 'd-none'} 
                            ${active === nav.text || active === "" && nav.text === "Explore" ? 'wd-text-blue':'text-dark'}
                          float-start`}>
                    {nav.text}
                </p>
            </Link>
    );
}
export default SidebarItem;
