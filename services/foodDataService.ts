import { Product, NutrientInfo } from '../types';

// A few real barcodes for the "Simulate Scan" feature
const REAL_BARCODES_FOR_SIMULATION = [
    '3017620422003', // Nutella
    '7622210449283', // Oreo Cookies
    '049000042566',  // Coca-Cola Classic
];

const NOT_FOUND_PRODUCT: Product = {
    barcode: '',
    name: 'Product Not Found',
    manufacturer: 'N/A',
    category: 'N/A',
    imageUrl: 'https://picsum.photos/seed/notfound/400/400',
    ingredients: 'No ingredients information available.',
    additives: [],
    nutrients: {
        calories: 'N/A',
        fat: 'N/A',
        carbs: 'N/A',
        protein: 'N/A',
    },
};

export const fetchProductByBarcode = async (barcode: string): Promise<Product> => {
  try {
    // Request specific fields for efficiency
    const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=product_name,brands,categories,image_url,ingredients_text,additives_tags,nutriments`);
    
    if (!response.ok) {
      console.error('API request failed with status:', response.status);
      return { ...NOT_FOUND_PRODUCT, barcode };
    }

    const data = await response.json();
    
    if (data.status === 0 || !data.product) {
      return { ...NOT_FOUND_PRODUCT, barcode };
    }

    const productData = data.product;
    const nutriments = productData.nutriments || {};

    const nutrients: NutrientInfo = {
        calories: nutriments['energy-kcal_100g'] ? `${Math.round(nutriments['energy-kcal_100g'])} kcal` : 'N/A',
        fat: nutriments.fat_100g !== undefined ? `${nutriments.fat_100g.toFixed(1)}g` : 'N/A',
        carbs: nutriments.carbohydrates_100g !== undefined ? `${nutriments.carbohydrates_100g.toFixed(1)}g` : 'N/A',
        protein: nutriments.proteins_100g !== undefined ? `${nutriments.proteins_100g.toFixed(1)}g` : 'N/A',
    };

    const product: Product = {
      barcode: barcode,
      name: productData.product_name || 'Name not available',
      manufacturer: productData.brands || 'Brand not available',
      category: productData.categories?.split(',')[0].trim() || 'Uncategorized',
      imageUrl: productData.image_url || `https://picsum.photos/seed/${barcode}/400/400`,
      ingredients: productData.ingredients_text || 'No ingredients list available.',
      // Clean up additive tags (e.g., 'en:e322' -> 'E322')
      additives: (productData.additives_tags || []).map((tag: string) => tag.replace('en:', '').toUpperCase()),
      nutrients: nutrients,
    };

    return product;

  } catch (error) {
    console.error("Failed to fetch from Open Food Facts API:", error);
    return { ...NOT_FOUND_PRODUCT, barcode };
  }
};

export const getRandomBarcode = (): string => {
    const randomIndex = Math.floor(Math.random() * REAL_BARCODES_FOR_SIMULATION.length);
    return REAL_BARCODES_FOR_SIMULATION[randomIndex];
}
