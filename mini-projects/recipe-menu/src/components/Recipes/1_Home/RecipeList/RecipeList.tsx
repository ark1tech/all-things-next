'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './RecipeList.css';

import { FaStar } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { LuAlarmClock } from 'react-icons/lu';
import { BiBowlRice } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';
import { MdOutlineFoodBank } from 'react-icons/md';
import { MdSortByAlpha } from 'react-icons/md';

import { Recipe } from '@/types/recipe';

import HeartButton from '@components/Recipes/_atoms/buttons/HeartButton/HeartButton';
import RecipeOfTheDay from '@components/Recipes/1_Home/RecipeOfTheDay';
import RecentRecipes from '@components/Recipes/1_Home/RecentRecipes';

export default function RecipeList() {
    // Fetch recipes from /api/recipes route
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/recipes');
            const data: Recipe[] = await res.json();
            setRecipes(data);
        }
        fetchData();
    }, []);

    // RecipeOfTheDay and RecentRecipes are hardcoded for now
    const random_index = Math.floor(Math.random() * recipes.length);
    const random_recipe = recipes[random_index];
    const recent_recipes = recipes.slice(0, 7);

    return (
        <div className="flex flex-col gap-[2rem]">
            {/* Top Section */}
            <div className="flex h-full flex-col gap-[1rem] sm:flex-row">
                <RecipeOfTheDay {...random_recipe} />
                <RecentRecipes {...recent_recipes} />
            </div>
            <div className="flex flex-row items-center justify-between">
                <h1>All Recipes</h1>
                <p className="graytext flex flex-row items-center gap-[0.3rem] text-sm">
                    {' '}
                    <MdSortByAlpha />
                    Sort
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) => (
                    // Card styling
                    <section
                        key={recipe.name}
                        className="opacity-card border-style relative flex h-full w-full flex-col overflow-clip rounded-lg bg-[#ffffff66]"
                    >
                        <div className="relative h-[20svh] w-full overflow-clip">
                            <div className="backdrop-blur-md] absolute z-10 m-[1rem] flex flex-col items-start justify-start rounded-md border bg-[#ffffffef] p-[0.3rem]">
                                <p className="small-text flex w-full flex-row items-center gap-[0.5rem] px-[0.4rem] pb-[0.3rem] text-left">
                                    <LuAlarmClock />{' '}
                                    {recipe.prepTimeMinutes +
                                        recipe.cookTimeMinutes}
                                    m
                                </p>
                                <p className="small-text flex w-full flex-row items-center gap-[0.5rem] border-b border-t border-dashed px-[0.4rem] py-[0.3rem] text-left">
                                    <BiBowlRice /> {recipe.servings} servings
                                </p>
                                <p className="small-text flex w-full flex-row items-center gap-[0.5rem] border-b border-dashed px-[0.4rem] py-[0.3rem] text-left">
                                    <AiOutlineFire />{' '}
                                    {recipe.caloriesPerServing} cal
                                </p>
                                <p className="small-text flex w-full flex-row items-center gap-[0.5rem] px-[0.4rem] pt-[0.3rem] text-left">
                                    <MdOutlineFoodBank /> {recipe?.mealType[0]}
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
                        <Link
                            href={{
                                pathname:
                                    recipe.id && recipe.name
                                        ? `${recipe.id}/${recipe.name}`
                                        : `/`
                            }}
                            className="flex flex-grow flex-col gap-[1.7rem] p-[1.7rem]"
                        >
                            <div className="flex h-full flex-grow flex-col gap-[0.5rem]">
                                <h3 className="text-balance">{recipe.name}</h3>
                                <p className="flex-grow">
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
                        </Link>
                        <Image
                            src={recipe.image}
                            alt=""
                            width={100}
                            height={100}
                            className="spin_element hover-opacity absolute top-0 -z-20 h-full w-auto blur-[35px] brightness-[2] duration-500"
                        />
                    </section>
                ))}
            </div>
        </div>
    );
}
