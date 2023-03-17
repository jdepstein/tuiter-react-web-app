import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "./nav";
import Assignment6 from "./labs/a6";






function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Nav/>
                <Routes>
                    <Route index element={<Assignment6/>}/>
                    <Route path="/labs/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}
export default App;