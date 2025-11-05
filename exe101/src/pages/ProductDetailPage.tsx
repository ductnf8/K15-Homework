import {useParams, Link, useNavigate} from 'react-router-dom';
import {ArrowLeft, ShoppingCart, Star, Plus, Minus, Package, Truck, ChevronLeft, ChevronRight} from 'lucide-react';
import {products} from '../data/products';
import {REGION_LABELS} from '../types/product';
import {useCartStore} from '../store/cartStore';
import {useState, useEffect} from 'react';

export default function ProductDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);
    const addItem = useCartStore((state) => state.addItem);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Không tìm thấy sản phẩm
                    </h2>
                    <Link
                        to="/products"
                        className="text-emerald-600 hover:text-emerald-700 font-semibold"
                    >
                        Quay lại trang sản phẩm
                    </Link>
                </div>
            </div>
        );
    }

    const images = product.images || [product.image];

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    const handleBuyNow = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
        navigate('/cart');
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const relatedProducts = products
        .filter((p) => p.region === product.region && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    to="/products"
                    className="inline-flex items-center text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2"/>
                    Quay lại
                </Link>

                {/* Product Details */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 mb-4">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                {product.originalPrice && (
                                    <div
                                        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                    </div>
                                )}

                                {/* Navigation Arrows */}
                                {images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-700"/>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-700"/>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Images */}
                            {images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                                                currentImageIndex === index
                                                    ? 'border-emerald-600 ring-2 ring-emerald-200'
                                                    : 'border-gray-200 hover:border-emerald-400'
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${product.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            <div className="mb-4">
                <span
                    className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {REGION_LABELS[product.region]}
                </span>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${
                                                i < Math.floor(product.rating)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-emerald-600">
                    {product.price.toLocaleString('vi-VN')}đ
                  </span>
                                    {product.originalPrice && (
                                        <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}đ
                    </span>
                                    )}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Số lượng
                                </label>
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                    >
                                        <Minus className="w-5 h-5"/>
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-20 text-center border-2 border-gray-300 rounded-lg py-2 font-semibold focus:border-emerald-600 focus:outline-none"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                    >
                                        <Plus className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!product.inStock}
                                    className={`flex-1 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all transform ${
                                        product.inStock
                                            ? addedToCart
                                                ? 'bg-green-600 text-white'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    <ShoppingCart className="w-6 h-6"/>
                                    <span>{addedToCart ? 'Đã thêm vào giỏ!' : 'Thêm vào giỏ'}</span>
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    disabled={!product.inStock}
                                    className={`flex-1 py-4 rounded-xl font-semibold text-lg transition-all transform ${
                                        product.inStock
                                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    Mua ngay
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 text-gray-600">
                                    <Package className="w-5 h-5 text-emerald-600 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Đóng gói cẩn thận</p>
                                        <p className="text-sm">Đảm bảo sản phẩm đến tay bạn trong tình trạng tốt
                                            nhất</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 text-gray-600">
                                    <Truck className="w-5 h-5 text-emerald-600 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Giao hàng toàn quốc</p>
                                        <p className="text-sm">Miễn phí vận chuyển cho đơn hàng trên 500.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Description Section */}
                    <div className="border-t border-gray-200 p-8">
                        <div className="max-w-4xl">
                            {/* Detailed Description */}
                            {product.detailedDescription && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Mô tả chi tiết</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {product.detailedDescription}
                                    </p>
                                </div>
                            )}

                            {/* Origin */}
                            {product.origin && (
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Xuất xứ</h3>
                                    <p className="text-gray-700 flex items-center">
                                        <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                                        {product.origin}
                                    </p>
                                </div>
                            )}

                            {/* Story */}
                            {product.story && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Câu chuyện sản phẩm</h3>
                                    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                                        <p className="text-gray-700 leading-relaxed italic">
                                            {product.story}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Sản phẩm cùng vùng miền
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/products/${p.id}`}
                                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="relative h-48 overflow-hidden bg-gray-200">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                            {p.name}
                                        </h3>
                                        <p className="text-emerald-600 font-bold">
                                            {p.price.toLocaleString('vi-VN')}đ
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
