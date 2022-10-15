import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import useCheat from "./hooks/useCheat";

function App() {

    const{cheat, addCommand, deleteCommand} = useCheat();

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage commands={cheat} addCommand={addCommand} delete={deleteCommand}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
