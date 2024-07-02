import { RECIPE_FILEPATH } from '@/constants/filepath/recipe_json';
import { NextRequest, NextResponse } from 'next/server';
import { Recipe } from '@/types/recipe';
import fs from 'fs';

export async function GET(req: NextRequest) {
    try {
        const id = req.url.split('/')[5];
        const jsonData = fs.readFileSync(RECIPE_FILEPATH, 'utf-8');
        const recipes = JSON.parse(jsonData);
        const recipe = recipes.filter(
            (recipe: Recipe) => `${recipe.id}` === id
        );
        return NextResponse.json(recipe);
    } catch (error) {
        return NextResponse.json(
            { error: 'Error has occured!' },
            { status: 500 }
        );
    }
}
