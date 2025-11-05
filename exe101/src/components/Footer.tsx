import {MapPin, Phone, Mail} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Đặc Sản Việt</h3>
                        <p className="text-sm leading-relaxed">
                            Mang đến những sản phẩm đặc sản truyền thống từ ba miền Bắc - Trung - Nam,
                            giữ gìn hương vị thuần khiết của quê hương.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Liên hệ</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4 text-emerald-500"/>
                                <span>Hồ Tùng Mậu - Hà Nội</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-emerald-500"/>
                                <span>0123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-emerald-500"/>
                                <span>freshfood@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Thông tin</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Về chúng tôi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Chính sách giao hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Điều khoản sử dụng
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; 2025 Đặc Sản Việt. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
}
