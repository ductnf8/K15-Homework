import React from 'react';
import Header from "./components/Header/index.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import News from "./pages/News/index.jsx";
import About from "./pages/About/index.jsx";
import Footer from "./components/Footer/index.jsx";

const App = () => {
    return (
        <div className='min-h-screen flex flex-col bg-gray-50 text-gray-800'>
            <Header/>
            <main className='flex-grow container mx-auto px-4 py-8'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
