import Image from 'next/image';

import { FaStar } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { LuAlarmClock } from 'react-icons/lu';
import { BiBowlRice } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineFoodBank } from 'react-icons/md';

import { Recipe } from '@/types/recipe';

import HeartButton from '@components/Recipes/_atoms/buttons/HeartButton/HeartButton';
import GetRecipeButton from '@components/Recipes/_atoms/buttons/GetRecipeButton';

const RecipeOfTheDay: React.FC<Recipe> = (recipe): React.JSX.Element => {

    // Hardcoded "Recipe of the Day" for now (randomized)
    // TODO : Implement this

    return (
        <section
            key={recipe.name}
            className="opacity-card border-style relative flex h-full w-full flex-col overflow-clip rounded-lg bg-[#ffffff66]"
        >
            <div className="relative h-[30svh] w-full overflow-clip">
                <div className="absolute z-10 m-[1rem] flex flex-col items-start justify-start rounded-md border bg-[#ffffffef] p-[0.3rem] backdrop-blur-md">
                    <p className="small-text flex w-full flex-row items-center gap-[0.5rem] px-[0.4rem] pb-[0.3rem] text-left">
                        <LuAlarmClock />{' '}
                        {recipe.prepTimeMinutes + recipe.cookTimeMinutes}m
                    </p>
                    <p className="small-text flex w-full flex-row items-center gap-[0.5rem] border-b border-t border-dashed px-[0.4rem] py-[0.3rem] text-left">
                        <BiBowlRice /> {recipe.servings} servings
                    </p>
                    <p className="small-text flex w-full flex-row items-center gap-[0.5rem] border-b border-dashed px-[0.4rem] py-[0.3rem] text-left">
                        <AiOutlineFire /> {recipe.caloriesPerServing} cal
                    </p>
                    <p className="small-text flex w-full flex-row items-center gap-[0.5rem] px-[0.4rem] pt-[0.3rem] text-left">
                        <MdOutlineFoodBank />{' '}
                        {recipe.mealType ? recipe.mealType[0] : ``}
                    </p>
                </div>
                <HeartButton />
                <Image
                    src={recipe.image}
                    width={4000}
                    height={4000}
                    alt=""
                    className="absolute bottom-0 top-0 z-0 my-auto h-auto w-full"
                />
            </div>
            <div className="flex flex-grow flex-col gap-[1.7rem] p-[1.7rem]">
                <div className="flex flex-col gap-[1rem]">
                    <div className="flex flex-col gap-[0.5rem]">
                        <div className="flex flex-col">
                            <h4 className="graytext font-[300]">
                                RECIPE OF THE DAY
                            </h4>
                            <h3 className="text-balance">{recipe.name}</h3>
                        </div>
                        <p className="flex-grow lg:flex-grow-0">
                            {recipe.description}
                        </p>
                        <div className="mt-[0.5rem] flex flex-row gap-[1rem]">
                            <p className="sm-text graytext flex flex-row items-center gap-1">
                                <FaStar className="-mt-[0.1rem] scale-[0.9] text-sm" />{' '}
                                {recipe.rating} / 5.0
                            </p>
                            <p className="sm-text graytext flex flex-row items-center gap-1">
                                <IoPerson className="-mt-[0.1rem] scale-[0.9] text-sm" />{' '}
                                {recipe.reviewCount} reviews
                            </p>
                        </div>
                    </div>
                </div>
                <GetRecipeButton {...recipe} />
            </div>
            <Image
                src={recipe.image}
                alt=""
                width={100}
                height={100}
                className="spin_element absolute top-0 -z-20 h-full w-auto opacity-40 blur-[25px] brightness-[2] duration-500"
            />
        </section>
    );
};

export default RecipeOfTheDay;
