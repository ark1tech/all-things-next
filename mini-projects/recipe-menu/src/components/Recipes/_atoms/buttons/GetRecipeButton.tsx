import Link from 'next/link';

import { FaRegHandPointer } from 'react-icons/fa';
import { Recipe } from '@/types/recipe';

const GetRecipeButton: React.FC<Recipe> = (recipe:Recipe): React.JSX.Element => {
    return (
        <div className="flex w-full flex-row justify-end">
            <div className="w-fit cursor-pointer overflow-clip rounded-lg border border-[#ff5e01] duration-300 hover:shadow-[0_0_5px_0_#ffab81]">
                <Link
                    className="flex flex-row items-center gap-[0.3rem] bg-[#ff5e01] px-[0.75rem] py-[0.15rem] font-[500] text-white shadow-[inset_0_-5px_10px_#ffab81] transition-all duration-300 ease-in-out"
                    href={{
                        pathname: (recipe.id && recipe.name) ? `${recipe.id}/${recipe.name}` : `/`,
                    }}
                >
                    <FaRegHandPointer className="w-[10px]" />
                    Get recipe
                </Link>
            </div>
        </div>
    );
};

export default GetRecipeButton;
