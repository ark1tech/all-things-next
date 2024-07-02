import { Recipe } from '@/types/recipe';
import Link from 'next/link';

const RecentRecipes: React.FC<Recipe[]> = (recipes): React.JSX.Element => {

    // Convert array into an object since passing the prop wants me to destructure it and idk why... 
    const recipeArray = Object.values(recipes);
    return (
        <div className="border-style flex min-h-full flex-col overflow-clip rounded-md bg-[white] sm:min-w-[18svw]">
            <h4 className="graytext border-style-b w-full text-center text-sm font-[300]">
                Recent Recipes
            </h4>

            {/* 
                Hardcoded "Recent Recipes" for now
                TODO: Implement this 
            */}
            <div className="flex h-full flex-col justify-around bg-[#fffafa]">
                {recipeArray?.map((recipe, i) => (
                    <Link
                        key={recipe.name}
                        href={{
                            pathname:
                                recipe.id && recipe.name
                                    ? `${recipe.id}/${recipe.name}`
                                    : `/`
                        }}
                        className={
                            'flex h-full w-full flex-col justify-center border-t px-[1rem] py-[0.5rem] duration-200 hover:bg-[#ffffff] sm:py-0' +
                            (i === 0 ? 'border' : '')
                        }
                    >
                        {recipe.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentRecipes;
