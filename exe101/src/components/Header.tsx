import {Link} from 'react-router-dom';
import {ShoppingCart, Menu, X, User} from 'lucide-react';
import {useCartStore} from '../store/cartStore';
import {useState} from 'react';

export default function Header() {
    const totalItems = useCartStore((state) => state.getTotalItems());
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">ĐS</span>
                        </div>
                        <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Đặc Sản Việt
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to="/products"
                            className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Sản phẩm
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                        >
                            Giới thiệu
                        </Link>
                    </nav>

                    {/* Cart, Avatar & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors"
                        >
                            <ShoppingCart className="w-6 h-6"/>
                            {totalItems > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                            )}
                        </Link>

                        {/* Avatar Icon */}
                        <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors">
                            <User className="w-6 h-6"/>
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
                        >
                            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                to="/products"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                            >
                                Sản phẩm
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                            >
                                Giới thiệu
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
