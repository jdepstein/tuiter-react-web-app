import FollowItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";


const FollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <ul className="list-group wd-rounded">
            <li className="list-group-item wd-text-20px fw-bold text-black border-0 bg-transparent">
                <p className="float-start m-0 mt-1">Who to Follow</p>
            </li>
            {
                whoArray.map((follow, i) => {
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
    );

};
export default FollowList