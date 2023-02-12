const postItem = (item) => {
    return (
        `<div class=" row wd-margin-top-12px wd-padding-bottom-12px">
            <div class="col-10 mt-2 text-nowrap">
            
            ${item.trending_tag ?`
               <div class="float-start 
                ${item.promotion ? 'fw-bold text-white' : "text-secondary" } text-nowrap">
               ${item.trending_tag}
               </div><br>` : ''
            }
 
            <div class="float-start  ${item.promotion ? 'text-secondary' : "fw-bold text-white" }  text-nowrap">
                ${item.title}
            </div><br>
            
           ${item.tuits ?`
               <div class="float-start text-secondary text-nowrap">
                ${item.tuits}
               </div><br>` : ''
            }
           
           ${item.with ?`
               <div class="float-start wd-text-medium-gray text-nowrap">
                    Trending With
                           ${
                            item.with.map(item => {
                            return(
                                "<span class=\"wd-text-blue\">" +
                                    item +
                                "</span>");
                             }).join(', ')
                            }
                    </div>` : ''
            }
           
           
           ${item.promotion ?`
                <div class="float-start wd-text-medium-gray text-wrap">
                    <img class="wd-image_15_square" src="../../images/extern_link.png" />
                   ${item.promotion}
                </div>` : ''
            }
           
            </div>
            <div class="col-2 mt-3">
                <i class="fa fa-ellipsis-h float-end wd-margin-right-16px text-secondary"></i>
            </div>
        </div>
  
    `)






}



export default postItem