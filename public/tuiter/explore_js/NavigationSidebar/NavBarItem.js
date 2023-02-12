const NavigationSidebarItem = (item) => {
    return(`
            <li class="list-group-item mt-3 border-0 rounded-pill bg-transparent">
                <a href=${item.link} class="wd-no-underline">
                    <i class="${item.active ? 'wd-text-blue fw-bold' : 'text-white'} float-start me-2 pt-1 ${item.icon}"></i>
                    <scan class="
                          ${item.text ? 'd-none d-xl-block' : 'd-none'} 
                          ${item.active ? 'wd-text-blue fw-bold' : 'text-white'} 
                                float-start"/> ${item.text}</scan>
                </a>
            </li>
            `);
}
export default NavigationSidebarItem