import {Link, useNavigate} from 'react-router-dom';
import {ShoppingCart, Star, Heart, Eye} from 'lucide-react';
import type {Product} from '../types/product';
import {REGION_LABELS} from '../types/product';
import {useCartStore} from '../store/cartStore';
import {useWishlistStore} from '../store/wishlistStore';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({product}: ProductCardProps) {
    const navigate = useNavigate();
    const addItem = useCartStore((state) => state.addItem);
    const {isInWishlist, toggleItem} = useWishlistStore();
    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    };

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(product);
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
        navigate('/cart');
    };

    return (
        <div className="group relative">
            <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Wishlist Heart Icon */}
                <button
                    onClick={handleToggleWishlist}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                >
                    <Heart
                        className={`w-5 h-5 ${
                            inWishlist
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400 hover:text-red-500'
                        } transition-colors`}
                    />
                </button>

                {/* Image */}
                <Link to={`/products/${product.id}`} className="block">
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.originalPrice && (
                            <div
                                className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                            </div>
                        )}
                        <div
                            className="absolute bottom-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {REGION_LABELS[product.region]}
                        </div>
                    </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                    <Link to={`/products/${product.id}`}>
                        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                            {product.name}
                        </h3>
                    </Link>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                        <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                            <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews} đánh giá)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-emerald-600">
                {product.price.toLocaleString('vi-VN')}đ
              </span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice.toLocaleString('vi-VN')}đ
                </span>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Link
                            to={`/products/${product.id}`}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors flex items-center justify-center text-sm font-medium"
                        >
                            <Eye className="w-4 h-4 mr-1"/>
                            Xem
                        </Link>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center text-sm font-medium"
                        >
                            <ShoppingCart className="w-4 h-4 mr-1"/>
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
