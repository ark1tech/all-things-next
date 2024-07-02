// Recipe Typing

export type Recipe = {
    id: number;
    image: string;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    rating: number;
    reviewCount: number;
    caloriesPerServing: number;
    mealType: string[];
};

// export type RecipeCard = Pick<
//     Recipe,
//     | 'image'
//     | 'name'
//     | 'description'
//     | 'mealType'
//     | 'prepTimeMinutes'
//     | 'cookTimeMinutes'
// >;