import React from "react";
import './App.css';
import Birthday from "./Birthday";
import {Route, Routes} from 'react-router-dom'
import FormBirthday from "./FormBirthday";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/birthday/:name/:day/:month" element={<Birthday />}/>
            <Route path="" element={<FormBirthday/>} />
        </Routes>
    </div>
  );
}

export default App;
