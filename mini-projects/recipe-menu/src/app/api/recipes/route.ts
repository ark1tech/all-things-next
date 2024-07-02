import { NextResponse } from 'next/server';
import { RECIPE_FILEPATH } from '@/constants/filepath/recipe_json';
import fs from 'fs';

export async function GET() {
    try {
        const jsonData = fs.readFileSync(RECIPE_FILEPATH, 'utf-8');
        const recipes = JSON.parse(jsonData);
        return NextResponse.json(recipes);
    } catch (error) {
        return NextResponse.json(
            { error: 'Error has occured!' },
            { status: 500 }
        );
    }
}
