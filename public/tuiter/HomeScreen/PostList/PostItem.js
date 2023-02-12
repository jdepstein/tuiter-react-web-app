const postItem = (item) => {
    return (`
         <div class="p-3 border-secondary border-bottom pb-4 pt-3">
            <div class="row">
                <div class="col-1">
                    <img class="wd-image_round_60 float-start" src="${item.profile_pic}">
                </div>
                
                <div class="col-9">
                    <scan class=" ms-3 fw-bold wd-font-family-arial text-white text-wrap">
                      ${item.name}
                    </scan>
                    <scan class="wd-font-family-arial text-secondary text-nowrap">
                      ${item.handle}  &#xb7; ${item.post_date}
                    </scan></br>
        
                    <scan class="ms-3 mt-1 pt-0 wd-font-family-arial text-white text-wrap">
                      ${item.post_text}
                    </scan>
                </div>
             
                
                <div class="col-2">
                    <i class="fa fa-ellipsis-h float-end wd-margin-right-16px text-secondary"></i>
                </div>
                
            </div>
            
            

            <div class="wd-margin-left-60px card bg-transparent border-secondary">
                <img class="w-100 wd-height-300 card-img" src=" ${item.post_image}">
                ${item.post_image_text ? `
                <div class="card-footer bg-transparent">
                  <p class="text-white wd-font-family-arial">
                     ${item.post_image_text}
                  </p>
                  <p class="mb-0 text-secondary wd-text-color-white  wd-font-family-arial">
                    <i class="fa fa-link"></i>
                    rt.com
                  </p>
                </div>`
        : ''} 
            </div>
          
            <div class="wd-margin-left-60px wd-font-family-arial mt-2">
                <ul class="w-100 nav p-0">
                    <li class="wd-text-color-gray list-group-item m-auto ms-0 bg-transparent">
                        <i class="fw-normal fa fa-comment"></i>
                        ${item.comment}
                    </li>
                    <li class="wd-text-color-gray list-group-item m-auto bg-transparent">
                        <i class="fa fa-retweet"></i>
                        ${item.retuit}
                    </li>
                    <li class="wd-text-color-gray list-group-item m-auto bg-transparent">
                        <i class="fw-normal fa fa-heart"></i>
                        ${item.like}
                    </li>
                    <li class="wd-text-color-gray list-group-item m-auto bg-transparent">
                        <i class="fw-normal fa fa-share-square"></i>
                    </li>
                </ul>
            </div>
        </div>
    
    `)

}

    export default postItem