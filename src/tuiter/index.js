import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import PostSummaryList from "./post-summary-list";
import WhoToFollowList from "./who-to-follow-list";

import whoReducer from "./reducers/who-reducer";
import tuitsSumReducer from "./tuits/tuits-sum-reducer";
import tuitsReducer from "./tuits/tuits-reducer";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";


const store = configureStore(
    {reducer: {who: whoReducer, tuits_sum: tuitsSumReducer, tuits: tuitsReducer}});



function Tuiter() {
    return (
        <Provider store={store}>
        <Nav/>
            <div className="row mt-2">
                <div className="container-fluid col-2 col-sm-2 col-md-2 col-lg-1 col-xl-3">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="container-fluid p-0 col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 border-secondary border-start border-end border-top">
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route index element={<ExploreComponent/>}/>
                    </Routes>
                </div>

                <div className="container-fluid d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-3">
                    <Routes>
                        <Route path="home" element={<PostSummaryList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                        <Route index element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>

    )
}
export default Tuiter