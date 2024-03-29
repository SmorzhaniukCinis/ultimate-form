import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Header} from "./Componnents/Header";
import {Step1} from "./Componnents/Step1";
import {Step2} from "./Componnents/Step2";
import {Step3} from "./Componnents/Step3";
import {Result} from "./Componnents/Result";



function App() {

    const [formData, setFormData] = useState()

    const getFormData = (data) => {
        setFormData(prevState => {
            return {...prevState, ...data }
        })
    }
    return (
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path='/' element={<Step1 formData={formData} getFormData={getFormData}/>} />
                    <Route path='/step2' element={<Step2 formData={formData} getFormData={getFormData}/>} />
                    <Route path='/step3' element={<Step3 formData={formData} getFormData={getFormData}/>} />
                    <Route path='/result' element={<Result formData={formData}/>} />
                </Routes>
            </Router>
        </>
    );
}


export default App;
