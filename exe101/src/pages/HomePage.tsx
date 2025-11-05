import {Link} from 'react-router-dom';
import {ArrowRight, MapPin, TrendingUp} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {products} from '../data/products';
import {REGION_LABELS} from '../types/product';

export default function HomePage() {
    const featuredProducts = products.slice(0, 6);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyVjMwem0wLTEyaC0xMnYxMmgxMlYxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Đặc Sản Việt Nam
                            <br/>
                            <span className="text-yellow-300">Ba Miền Hội Tụ</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
                            Khám phá hương vị truyền thống từ Bắc - Trung - Nam,
                            mang đến những món ăn đặc sản thuần khiết của quê hương
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                            >
                                Khám phá ngay
                                <ArrowRight className="ml-2 w-5 h-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regions Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Khám Phá Theo Vùng Miền
                        </h2>
                        <p className="text-gray-600">
                            Mỗi vùng miền có những hương vị đặc trưng riêng
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {(Object.keys(REGION_LABELS) as Array<keyof typeof REGION_LABELS>).map((region) => (
                            <Link
                                key={region}
                                to={`/products?region=${region}`}
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div
                                    className="h-48 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                                    <MapPin className="w-20 h-20 text-white opacity-80"/>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                        {REGION_LABELS[region]}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Khám phá {products.filter(p => p.region === region).length} sản phẩm đặc biệt
                                    </p>
                                    <div
                                        className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                                        Xem thêm
                                        <ArrowRight className="ml-2 w-4 h-4"/>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                                <TrendingUp className="w-8 h-8 text-emerald-600 mr-3"/>
                                Sản Phẩm Nổi Bật
                            </h2>
                            <p className="text-gray-600">
                                Những món ăn được yêu thích nhất
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="hidden sm:flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                        >
                            Xem tất cả
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            to="/products"
                            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                        >
                            Xem tất cả sản phẩm
                            <ArrowRight className="ml-2 w-5 h-5"/>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Bạn Đã Sẵn Sàng Khám Phá?
                    </h2>
                    <p className="text-lg mb-8 text-emerald-50">
                        Hàng trăm sản phẩm đặc sản từ khắp ba miền đang chờ bạn
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                    >
                        Mua sắm ngay
                        <ArrowRight className="ml-2 w-5 h-5"/>
                    </Link>
                </div>
            </section>
        </div>
    );
}
