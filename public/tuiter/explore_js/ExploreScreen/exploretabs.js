const ExploreTabs = () => {
    return(`
        <div class="mb-1 mt-2 pt-1 btn-group" role="group" aria-label="Basic example">
            <ul class="w-100 nav bg-transparent">
                <li class="text-center nav-item wd-padding-16 m-auto bg-transparent">
                    <a href="#" class="wd-padding-0 text-white fw-bold wd-no-underline under-line-blue">For You</a><br>
                </li>
                <li class="text-center nav-item wd-padding-16 m-auto bg-transparent">
                    <a href="#" class="wd-padding-0 nav-link fw-bold disabled">Trending </a>
                </li>
                <li class="text-center nav-item wd-padding-16 m-auto bg-transparent">
                    <a href="#" class="wd-padding-0 nav-link fw-bold disabled">News</a>
                </li>
                <li class="text-center nav-item wd-padding-16 m-auto bg-transparent">
                    <a href="#" class="text-center wd-padding-0 nav-link fw-bold disabled">Sports</a>
                </li>
                <li class="text-center nav-item wd-padding-16 m-auto bg-transparent">
                    <a href="#" class=" wd-padding-0 nav-link  d-none d-md-block fw-bold disabled">Entertainment</a>
                </li>
            </ul>
        </div>
        `);
}
export default ExploreTabs;