import {Link} from "react-router-dom";

const EndLinks = () => {
    return(
        <div className="wd-text-medium-gray mt-1 float-start">
            <Link to="#" className="wd-text-medium-gray wd-no-underline">Terms of Service </Link>
            <Link to="#" className="wd-text-medium-gray wd-no-underline">Privacy Policy </Link>
            <Link to="#" className="wd-text-medium-gray wd-no-underline">Cookie Policy </Link><br/>
            <Link to="#" className="wd-text-medium-gray wd-no-underline">Accessibility </Link>
            <Link to="#" className="wd-text-medium-gray wd-no-underline">Ads info </Link>
            <Link to="#" className="wd-text-medium-gray wd-no-underline">More ... </Link><br/>
            <span> © 2023 Tuiter, Inc. </span>
        </div>


    );
}
export default EndLinks;