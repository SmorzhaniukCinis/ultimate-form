import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Header} from "./Componnents/Header";
import {Step1} from "./Componnents/Step1";
import {Step2} from "./Componnents/Step2";



function App() {
    return (
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<Step1/>} />
                    <Route path='/step2' element={<Step2/>} />
                    <Route path='/step3' element={<Step3/>} />
                    <Route path='/result' element={<Result/>} />

                </Routes>
            </Router>
        </>
    );
}




const Step3 = () => {
    return (
        <div>
            step 3
        </div>
    )
}

const Result = () => {
    return (
        <div>

        </div>
    )
}

export default App;
