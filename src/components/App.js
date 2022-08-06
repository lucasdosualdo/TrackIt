import GlobalStyle from "../styles/globalStyles"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import UserContext from "../contexts/UserContext";
import { useState } from 'react';
import Today from "./Today";

export default function App() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [name, setName]=useState('');
    const [image, setImage]=useState('');

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
            setImage
        }}>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>}/>
            <Route path='/hoje' element={<Today/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </>
    )
}