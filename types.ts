export interface NutrientInfo {
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
}

export interface Product {
  barcode: string;
  name: string;
  manufacturer: string;
  category: string;
  imageUrl: string;
  ingredients: string;
  additives: string[];
  nutrients: NutrientInfo;
}
