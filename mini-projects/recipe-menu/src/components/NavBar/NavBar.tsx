import Link from 'next/link';
import { PiBowlFoodDuotone } from 'react-icons/pi';
import './NavBar.css';
import Search from './Search/Search';

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 sm:top-[1rem] sm:mt-[1rem] sm:px-[1rem]">
            <div className="border-style flex flex-row items-center justify-start gap-[1.7rem] rounded-none bg-[#ffffff] px-[1.7rem] py-[0.7rem] shadow-lg sm:rounded-lg">
                <Link href="/">
                    <h4 className="flex flex-grow-0 flex-row items-center gap-1 md:flex-grow">
                        <PiBowlFoodDuotone />
                        <span className="hidden md:flex">appetittö</span>
                    </h4>
                </Link>
                <Search />
            </div>
        </nav>
    );
}
