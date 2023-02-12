const ExploreSearch = () => {
    return(`
        <div class="col-10 mt-3">
            <div class="border rounded-pill border-dark wd-bg-light-black border-0">
                <div class="input-group">
                    <span class="bg-transparent border-0 input-group-text" id="basic-addon1">
                    <img src="../../images/magnifying-glass-solid.svg" class="ps-1 wd-fill-gray" width="25" height="20" />
                    </span>
                    <input type="text" class="shadow-none border-0 bg-transparent form-control text-white" placeholder="Search Tuiter">
                </div>
            </div>
        </div>
        <div class="col-2 mt-2">
            <div class="ms-3 me-2 align-content-center">
                <a href="#" class="wd-font-family-arial wd-no-underline h3 text-white fw-normal">&#9881;</a>
            </div>
        </div>
    `);
}
export default ExploreSearch;