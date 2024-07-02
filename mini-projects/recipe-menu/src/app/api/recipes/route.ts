import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const RECIPE_FILEPATH = path.join(
            process.cwd(),
            'src',
            'data',
            'recipes.json'
        );
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
