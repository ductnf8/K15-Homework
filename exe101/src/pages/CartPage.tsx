import {Link} from 'react-router-dom';
import {Trash2, Plus, Minus, ShoppingBag, ArrowRight} from 'lucide-react';
import {useCartStore} from '../store/cartStore';

export default function CartPage() {
    const {items, removeItem, updateQuantity, getTotalPrice} = useCartStore();

    const totalPrice = getTotalPrice();
    const shippingFee = totalPrice >= 500000 ? 0 : 30000;
    const finalTotal = totalPrice + shippingFee;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6"/>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Giỏ hàng trống
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Hãy khám phá các sản phẩm đặc sản tuyệt vời của chúng tôi
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                        Tiếp tục mua sắm
                        <ArrowRight className="ml-2 w-5 h-5"/>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="divide-y divide-gray-200">
                                {items.map((item) => (
                                    <div key={item.id} className="p-6">
                                        <div className="flex gap-4">
                                            {/* Image */}
                                            <Link
                                                to={`/products/${item.id}`}
                                                className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </Link>

                                            {/* Details */}
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-2">
                                                    <Link
                                                        to={`/products/${item.id}`}
                                                        className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-red-500 hover:text-red-700 transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5"/>
                                                    </button>
                                                </div>

                                                <p className="text-sm text-gray-600 mb-3 line-clamp-1">
                                                    {item.description}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4"/>
                                                        </button>
                                                        <span className="w-12 text-center font-semibold">
                              {item.quantity}
                            </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4"/>
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="text-right">
                                                        <p className="text-lg font-bold text-emerald-600">
                                                            {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {item.price.toLocaleString('vi-VN')}đ / món
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Tổng đơn hàng
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Tạm tính</span>
                                    <span className="font-medium">
                    {totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Phí vận chuyển</span>
                                    <span className="font-medium">
                    {shippingFee === 0 ? (
                        <span className="text-emerald-600">Miễn phí</span>
                    ) : (
                        `${shippingFee.toLocaleString('vi-VN')}đ`
                    )}
                  </span>
                                </div>
                                {totalPrice < 500000 && (
                                    <p className="text-xs text-gray-500 bg-yellow-50 p-2 rounded">
                                        Thêm {(500000 - totalPrice).toLocaleString('vi-VN')}đ để được miễn phí vận
                                        chuyển
                                    </p>
                                )}
                                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                                    <span>Tổng cộng</span>
                                    <span className="text-emerald-600">
                    {finalTotal.toLocaleString('vi-VN')}đ
                  </span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-colors mb-3">
                                Thanh toán
                            </button>

                            <Link
                                to="/products"
                                className="block text-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                            >
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
