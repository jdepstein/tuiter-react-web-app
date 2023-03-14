import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "./nav";
import {useState} from "react";
import Rew from "./TEST/Rew";
import Asd from "./TEST/Asd";





function App() {
        /*
             const [qwe, wer] = useState([123, 234, 345, 456, 567])
        const ert = (rty) => {
            const tyu = qwe.filter(yui => yui != 345)
            wer(tyu)
        }
                 */
    return (
    /*
        <div>
            <ul>
                {qwe.map(uio => <li>{uio}</li>)}
            </ul>
            <button onClick={() => ert(qwe)}>BUTTON</button>
        </div>

        <BrowserRouter>
            <Link to="/qwe/21/14/wer">LINK A</Link>
            <Routes>
                <Route path="/qwe/:qwe/:wer/wer" element={<Rew/>}/>
                <Route path="/asd/:zxc/:xcv" element={<Asd/>}/>
            </Routes>
        </BrowserRouter>
        */

        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Nav/>}/>
                    <Route path="/labs/*" element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}
export default App;