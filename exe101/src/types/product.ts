export type Region = 'mien-bac' | 'mien-trung' | 'mien-nam';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[]; // Multiple product images
    region: Region;
    category: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    detailedDescription?: string; // Long form description
    origin?: string; // Product origin/source
    story?: string; // Product story/background
}

export interface CartItem extends Product {
    quantity: number;
}

export const REGION_LABELS: Record<Region, string> = {
    'mien-bac': 'Miền Bắc',
    'mien-trung': 'Miền Trung',
    'mien-nam': 'Miền Nam'
};
