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
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [name, setName]=useState('');
    const [image, setImage]=useState('');
    const [day, setDay]=useState('');
    const [date, setDate]=useState('');
    const [clicked, setClicked]=useState(false);
    const [habit, setHabit] = useState({
        habitName: "",
        weekDays: [],
    })

    return (
        <>
        <GlobalStyle/>
        <UserContext.Provider value={{
            email,
            setEmail,
            password,
            setPassword,
            name,
            setName,
            image,
            setImage,
            day,
            setDay,
            clicked,
            setClicked,
            date,
            setDate,
            habit,
            setHabit
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