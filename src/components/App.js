import GlobalStyle from "../styles/globalStyles"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

export default function App() {
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}