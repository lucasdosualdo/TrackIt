import GlobalStyle from "../styles/globalStyles"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import UserContext from "../contexts/UserContext";
import { useState } from 'react';
import Today from "./Today";
import History from "./History";
import Habits from "./Habits";

export default function App() {
    const [name, setName]=useState('');
    const [user, setUser]=useState('');
    const [day, setDay]=useState('');
    const [date, setDate]=useState('');
    const [render, setRender]=useState(false);
    const [percentage, setPercentage]=useState(0);
    const [habit, setHabit] = useState({
        name: "",
        days: [],
    });
    const [config, setConfig]=useState({});

    return (
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{
            name,
            setName,
            user,
            setUser,
            day,
            setDay,
            date,
            setDate,
            habit,
            setHabit,
            render,
            setRender,
            config,
            setConfig,
            percentage,
            setPercentage
        }}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>}/>
            <Route path='/hoje' element={<Today/>}/>
            <Route path='/historico' element = {<History/>}/>
            <Route path='/habitos' element = {<Habits/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
}