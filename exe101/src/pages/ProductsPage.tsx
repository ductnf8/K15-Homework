import {useState, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Filter, X, ArrowUpDown} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import {products} from '../data/products';
import type {Region} from '../types/product';
import {REGION_LABELS} from '../types/product';

type SortOption = 'default' | 'price-asc' | 'price-desc';

export default function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [sortBy, setSortBy] = useState<SortOption>('default');

    // Get unique categories
    const categories = useMemo(() => {
        const cats = new Set(products.map((p) => p.category));
        return Array.from(cats);
    }, []);

    // Get filter states from URL params
    const selectedRegions = useMemo(() => {
        const regions = searchParams.get('region');
        return regions ? regions.split(',') : [];
    }, [searchParams]);

    const selectedCategories = useMemo(() => {
        const cats = searchParams.get('category');
        return cats ? cats.split(',') : [];
    }, [searchParams]);

    const priceRange = useMemo(() => {
        const min = searchParams.get('minPrice');
        const max = searchParams.get('maxPrice');
        return {
            min: min ? parseInt(min) : 0,
            max: max ? parseInt(max) : 500000,
        };
    }, [searchParams]);

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by region
        if (selectedRegions.length > 0) {
            filtered = filtered.filter((p) => selectedRegions.includes(p.region));
        }

        // Filter by category
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((p) => selectedCategories.includes(p.category));
        }

        // Filter by price range
        filtered = filtered.filter(
            (p) => p.price >= priceRange.min && p.price <= priceRange.max
        );

        // Sort
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [selectedRegions, selectedCategories, priceRange, sortBy]);

    // Toggle filter handlers
    const toggleRegion = (region: string) => {
        const newRegions = selectedRegions.includes(region)
            ? selectedRegions.filter((r) => r !== region)
            : [...selectedRegions, region];

        if (newRegions.length > 0) {
            searchParams.set('region', newRegions.join(','));
        } else {
            searchParams.delete('region');
        }
        setSearchParams(searchParams);
    };

    const toggleCategory = (category: string) => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((c) => c !== category)
            : [...selectedCategories, category];

        if (newCategories.length > 0) {
            searchParams.set('category', newCategories.join(','));
        } else {
            searchParams.delete('category');
        }
        setSearchParams(searchParams);
    };

    const updatePriceRange = (min: number, max: number) => {
        if (min > 0) {
            searchParams.set('minPrice', min.toString());
        } else {
            searchParams.delete('minPrice');
        }

        if (max < 500000) {
            searchParams.set('maxPrice', max.toString());
        } else {
            searchParams.delete('maxPrice');
        }

        setSearchParams(searchParams);
    };

    const clearFilters = () => {
        setSearchParams({});
        setSortBy('default');
    };

    const hasActiveFilters =
        selectedRegions.length > 0 ||
        selectedCategories.length > 0 ||
        priceRange.min > 0 ||
        priceRange.max < 500000;

    // Filter Panel Component
    const FilterPanel = () => (
        <div className="space-y-6">
            {/* Region Filter */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-3">Vùng miền</h3>
                <div className="space-y-2">
                    {(Object.keys(REGION_LABELS) as Region[]).map((region) => (
                        <label key={region} className="flex items-center cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedRegions.includes(region)}
                                onChange={() => toggleRegion(region)}
                                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-emerald-600 transition-colors">
                {REGION_LABELS[region]}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Category Filter */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-3">Loại sản phẩm</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleCategory(category)}
                                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-emerald-600 transition-colors">
                {category}
              </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range Filter */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-3">Khoảng giá</h3>
                <div className="space-y-3">
                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">
                            Từ: {priceRange.min.toLocaleString('vi-VN')}đ
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="500000"
                            step="10000"
                            value={priceRange.min}
                            onChange={(e) => updatePriceRange(parseInt(e.target.value), priceRange.max)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">
                            Đến: {priceRange.max.toLocaleString('vi-VN')}đ
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="500000"
                            step="10000"
                            value={priceRange.max}
                            onChange={(e) => updatePriceRange(priceRange.min, parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                        />
                    </div>
                </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    onClick={clearFilters}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                    Xóa bộ lọc
                </button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header with Sort */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sản Phẩm Đặc Sản</h1>
                        <p className="text-gray-600">
                            Tìm thấy {filteredAndSortedProducts.length} sản phẩm
                        </p>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                        <ArrowUpDown className="w-5 h-5 text-gray-600"/>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                            <option value="default">Mặc định</option>
                            <option value="price-asc">Giá: Thấp đến cao</option>
                            <option value="price-desc">Giá: Cao đến thấp</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Desktop Filters */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-bold text-lg text-gray-900 flex items-center">
                                    <Filter className="w-5 h-5 mr-2 text-emerald-600"/>
                                    Bộ lọc
                                </h2>
                            </div>
                            <FilterPanel/>
                        </div>
                    </aside>

                    {/* Mobile Filter Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setShowMobileFilters(true)}
                            className="w-full bg-white border-2 border-emerald-600 text-emerald-600 px-4 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-emerald-50 transition-colors"
                        >
                            <Filter className="w-5 h-5 mr-2"/>
                            Bộ
                            lọc {hasActiveFilters && `(${selectedRegions.length + selectedCategories.length + (priceRange.min > 0 ? 1 : 0) + (priceRange.max < 500000 ? 1 : 0)})`}
                        </button>
                    </div>

                    {/* Mobile Filter Modal */}
                    {showMobileFilters && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="font-bold text-lg text-gray-900">Bộ lọc</h2>
                                        <button
                                            onClick={() => setShowMobileFilters(false)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        >
                                            <X className="w-6 h-6"/>
                                        </button>
                                    </div>
                                    <FilterPanel/>
                                    <button
                                        onClick={() => setShowMobileFilters(false)}
                                        className="w-full mt-6 bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                                    >
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredAndSortedProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredAndSortedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product}/>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-md p-12 text-center">
                                <p className="text-gray-600 text-lg mb-4">
                                    Không tìm thấy sản phẩm phù hợp
                                </p>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-emerald-600 font-semibold hover:text-emerald-700"
                                    >
                                        Xóa bộ lọc
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
