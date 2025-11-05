import {MapPin, Heart, Award, Users} from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Về Đặc Sản Việt
                    </h1>
                    <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
                        Sứ mệnh của chúng tôi là kết nối hương vị truyền thống từ ba miền Bắc - Trung - Nam,
                        mang đến cho bạn những sản phẩm đặc sản chất lượng nhất
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Câu chuyện của chúng tôi
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">
                                Đặc Sản Việt ra đời từ niềm đam mê bảo tồn và quảng bá những giá trị ẩm thực
                                truyền thống của Việt Nam. Chúng tôi tin rằng mỗi món ăn đặc sản không chỉ là
                                thực phẩm, mà còn là câu chuyện văn hóa, là tình yêu quê hương được gửi gắm
                                qua từng hương vị.
                            </p>
                            <p className="mb-4">
                                Với mạng lưới kết nối rộng khắp ba miền, chúng tôi hợp tác trực tiếp với các
                                nghệ nhân, làng nghề truyền thống để mang đến những sản phẩm chất lượng nhất,
                                giữ nguyên hương vị đặc trưng của từng vùng miền.
                            </p>
                            <p>
                                Mỗi sản phẩm trên Đặc Sản Việt đều được tuyển chọn kỹ lưỡng, đảm bảo nguồn gốc
                                rõ ràng và chất lượng cao nhất. Chúng tôi tự hào là cầu nối đưa hương vị quê hương
                                đến gần hơn với mọi người.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Giá trị cốt lõi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-emerald-600"/>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Tâm huyết</h3>
                            <p className="text-gray-600">
                                Đam mê bảo tồn và phát triển ẩm thực truyền thống Việt Nam
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-emerald-600"/>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Chất lượng</h3>
                            <p className="text-gray-600">
                                Cam kết mang đến những sản phẩm đặc sản chất lượng cao nhất
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-emerald-600"/>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Nguồn gốc</h3>
                            <p className="text-gray-600">
                                Minh bạch về nguồn gốc xuất xứ và quy trình sản xuất
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-emerald-600"/>
                            </div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Cộng đồng</h3>
                            <p className="text-gray-600">
                                Hỗ trợ và phát triển cộng đồng làng nghề truyền thống
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                            Sứ mệnh của chúng tôi
                        </h2>
                        <p className="text-lg text-gray-700 text-center leading-relaxed">
                            Đặc Sản Việt không chỉ là nơi mua sắm, mà còn là không gian văn hóa,
                            nơi bạn có thể khám phá và trải nghiệm tinh hoa ẩm thực của ba miền.
                            Chúng tôi mong muốn mỗi sản phẩm đến tay bạn đều mang theo câu chuyện,
                            tình cảm và hương vị đích thực của quê hương.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Cùng chúng tôi lan tỏa hương vị Việt
                    </h2>
                    <p className="text-lg text-emerald-50 mb-8">
                        Hãy liên hệ với chúng tôi để hợp tác hoặc tìm hiểu thêm về các sản phẩm
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:0123456789"
                            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
                        >
                            Gọi ngay: 0123 456 789
                        </a>
                        <a
                            href="mailto:contact@dacsanviet.vn"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            Email: contact@dacsanviet.vn
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
