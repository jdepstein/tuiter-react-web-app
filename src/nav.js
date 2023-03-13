import {Link} from "react-router-dom";
function Nav() {
    return (
        <div>
            <Link to="/labs">Labs</Link> |
            <Link to="/labs/a6">Assignment 6</Link> |
            <Link to="/labs/a7">Assignment 7</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    );
}

export default Nav;