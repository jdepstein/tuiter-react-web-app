import follows  from "./follows.json"
import FollowItem from "./who-to-follow-list-item";
import {Link} from "react-router-dom";

const FollowList = (
    {
        active = 'explore'
    }

) => {
    return (
        <div className="pe-1 ps-1">
            <ul className="text-center list-group wd-rounded" role="group">
                <li className=" list-group-item bg-transparent wd-text-20px fw-bold text-black border-0">
                    <p className="float-start m-0 mt-1">Who to Follow</p>
                </li>
                {
                    follows.map((follow, i) => {
                        return(
                            <li key={i} className ="list-group-item pt-0 border-0 bg-transparent">
                                <FollowItem follow={follow}/>
                            </li>

                        );
                    })
                }
                <li className="list-group-item border-0 bg-transparent">
                    <p className="float-start wd-text-blue m-0">Show More</p>
                </li>
            </ul>
            <div className="wd-text-medium-gray mt-1 float-start">
                <Link to="#" className="wd-text-medium-gray wd-no-underline">Terms of Service </Link>
                <Link to="#" className="wd-text-medium-gray wd-no-underline">Privacy Policy </Link>
                <Link to="#" className="wd-text-medium-gray wd-no-underline">Cookie Policy </Link><br/>
                <Link to="#" className="wd-text-medium-gray wd-no-underline">Accessibility </Link>
                <Link to="#" className="wd-text-medium-gray wd-no-underline">Ads info </Link>
                <Link to="#" className="wd-text-medium-gray wd-no-underline">More ... </Link><br/>
                <span> © 2023 Tuiter, Inc. </span>
            </div>
        </div>
    );

};
export default FollowList