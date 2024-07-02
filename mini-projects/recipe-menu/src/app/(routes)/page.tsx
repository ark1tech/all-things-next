import RecipeList from '@components/Recipes/1_Home/RecipeList/RecipeList';
import MainHeader from '@components/Recipes/1_Home/MainHeader';

export default function Home() {
    return (
        <div className="flex flex-col gap-[2rem] md:gap-3">
            <MainHeader />
            <RecipeList />
        </div>
    );
}
