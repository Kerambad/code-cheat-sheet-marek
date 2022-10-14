import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useCheat from "./hooks/useCheat";

function App() {

    const{cheat, addCommand} = useCheat();

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage commands={cheat} addCommand={addCommand}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
