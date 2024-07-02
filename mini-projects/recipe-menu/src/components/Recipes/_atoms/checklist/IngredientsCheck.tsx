import { Recipe } from '@/types/recipe';
import { useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';

const IngredientsButton: React.FC<Recipe> = (recipe): React.JSX.Element => {
    const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
        []
    );

    const toggleIngredient = (ingredient: string) => {
        setSelectedIngredients((prevSelected) =>
            prevSelected.includes(ingredient)
                ? prevSelected.filter((item) => item !== ingredient)
                : [...prevSelected, ingredient]
        );
    };

    return (
        <div className="flex flex-col gap-[0.5rem]">
            <h4 className="lora flex flex-row items-center gap-[0.5rem]">
                Ingredients{' '}
                {`(${selectedIngredients.length}/${recipe.ingredients.length})`}{' '}
                <FaCheckCircle
                    className={`${selectedIngredients.length === recipe.ingredients.length ? `text-[#ff6b1c]` : `text-[#ff6b1c00]`}`}
                />
            </h4>
            <div className="flex flex-wrap gap-x-[0.5rem] gap-y-[0.5rem]">
                {recipe.ingredients.map((ingredient) => (
                    <p
                        key={ingredient}
                        className={`flex cursor-pointer flex-row items-center justify-center rounded-full border border-[#7272723e] px-[1rem] py-[0.1rem] hover:bg-[#d3b8b839] ${
                            selectedIngredients.includes(ingredient)
                                ? 'bg-[#ffdac9]'
                                : 'bg-[#ffffff00]'
                        }`}
                        onClick={() => toggleIngredient(ingredient)}
                    >
                        {ingredient}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default IngredientsButton;
