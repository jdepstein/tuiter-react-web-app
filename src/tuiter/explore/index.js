const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-10 mt-3">
                    <div className="border rounded-pill border-dark wd-bg-off-white border-0">
                        <div className="input-group">
                                <span className="bg-transparent border-0 input-group-text" id="basic-addon1">
                                <img src="../../images/magnifying-glass-solid.svg" className="ps-1 wd-fill-gray" width="25"
                                     height="20"/>
                                </span>
                            <input type="text" className="shadow-none border-0 bg-transparent form-control text-black"
                                   placeholder="Search Tuiter"/>
                        </div>
                    </div>
                </div>
                <div className="col-2 mt-2">
                    <div className="ms-3 me-2 align-content-center">
                        <a href="#" className="wd-font-family-arial wd-no-underline h3 text-black fw-normal">&#9881;</a>
                    </div>
                </div>
            </div>

            <div className="row border-bottom">
                <div className="mb-1 mt-2 pt-1 btn-group" role="group" aria-label="Basic example">
                    <ul className="w-100 nav bg-transparent">
                        <li className="text-center nav-item m-auto bg-transparent d-inline">
                            <a href="#" className="wd-padding-0 text-black fw-bold wd-no-underline under-line-blue">For You</a>
                        </li>
                        <li className="text-center nav-item  m-auto bg-transparent d-inline">
                            <a href="#" className="wd-padding-0 nav-link fw-bold disabled">Trending </a>
                        </li>
                        <li className="text-center nav-item m-auto bg-transparent d-inline">
                            <a href="#" className="wd-padding-0 nav-link fw-bold disabled">News</a>
                        </li>
                        <li className="text-center nav-item m-auto bg-transparent d-inline">
                            <a href="#" className="text-center wd-padding-0 nav-link fw-bold disabled">Sports</a>
                        </li>
                        <li className="text-center nav-item  m-auto bg-transparent d-inline">
                            <a href="#" className=" wd-padding-0 nav-link  d-none d-md-block fw-bold disabled">Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-100 p-0 mt-2 wd-imageContainer">
                <img className="w-100" src="../../images/boston_qz.jpg"/>
                <div className="wd-bottom-left-story text-white">
                    <div className="float-start wd-text-13px">
                        Cordyceps News &#xb7; LIVE
                    </div>
                    <div className="text-white fw-bold  h2">
                        Boston QZ
                    </div>
                </div>
            </div>
        </>
    );
    };
export default ExploreComponent;

