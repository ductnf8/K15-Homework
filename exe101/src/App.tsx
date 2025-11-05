import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChatButtons from './components/FloatingChatButtons';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/products" element={<ProductsPage/>}/>
                        <Route path="/products/:id" element={<ProductDetailPage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </main>
                <Footer/>
                <FloatingChatButtons/>
            </div>
        </BrowserRouter>
    );
}

export default App;
