const FollowItem = (item) => {
    return(`
             <li class="list-group-item pt-0 border-0 bg-transparent">
                    <div class="row">
                        <div class="ps-1 col-2">
                            <img class="mt-2 wd-image_round_48" src="${item.profile_pic}" />
                        </div>
                        <div class="col-2 mt-2 text-nowrap">
                            <div class="float-start fw-bold text-white">
                                ${item.name}
                               ${item.verification ?  
                                    `<img class='wd-image_20_square' src=${item.verification} />` : ''}
                            </div><br>
                            <div class="float-start fw-normal text-secondary">
                                ${item.handle}
                            </div><br>
                        </div>
                        <div class="col-8">
                            <button class="wd-padding-left-16px wd-padding-right-16px float-end btn btn-sm bg-white mt-2 rounded-pill text-black fw-bold" > 
                            Follow
                            </button>
                        </div>
                    </div>
                </li>
            `);
}
export default FollowItem