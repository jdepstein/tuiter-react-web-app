const SummaryItem = (
    {
        summary = {
            trending_tag: "Cordyceps &#xb7; Trending",
            title: "New Fungus Virus",
            tuits: "20.5M Tuits",
            with: null,
            promotion: null
        }
    }) => {
    return(
        <div className="row" >
            <div className="col-10 mt-2 text-nowrap">
                {summary.trending_tag ?
                    <div className={`ps-2 float-start ${summary.promotion ? 'fw-bold text-dark' : "text-secondary"} text-nowrap`}>
                        {summary.trending_tag}
                     </div>
                    : ''}
                <br/>

                <div className={`ps-2 float-start  ${summary.promotion ? "text-secondary" : "fw-bold text-dark"} text-nowrap`}>
                    {summary.title}
                </div>
                <br/>

                {summary.tuits ?
                    <div className="ps-2 float-start text-secondary text-nowrap">
                        {summary.tuits}
                     </div>
                    : ''
                }

                {summary.with ?
                    <div className="ps-2 wd-text-medium-gray d-inline">
                        Trending With
                        {summary.with.map((item, i) => {
                        return (
                            <div key={i} className="text-primary  d-inline"> {item.name}, </div>
                            );
                        })
                        }
                    </div>
                    : ''
                }


                {summary.promotion ?
                    <div className="ps-2 float-start wd-text-medium-gray text-wrap">
                        <img alt="" className="wd-image_15_square" src="../../images/extern_link.png" />
                        {summary.promotion}
                    </div>
                    : ''
                }
            </div>

            <div className="mt-2 col-2">
                <i className="fa fa-ellipsis-h float-end wd-margin-right-16px text-secondary"></i>
            </div>

        </div>

    );
}
export default SummaryItem