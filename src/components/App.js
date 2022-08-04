import GlobalStyle from "../styles/globalStyles"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";

export default function App() {
    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}