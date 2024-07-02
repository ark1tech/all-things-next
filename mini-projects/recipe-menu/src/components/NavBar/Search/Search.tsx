import { FiSearch } from 'react-icons/fi';
import './Search.css';

export default function Search() {

    // Not working for now 
    // TODO : Implement this 

    return (
        <div className="w-full flex-grow search-container">
            <FiSearch className="text-[#a7a7a7]" />
            <input
                className="w-full"
                id="searchBar"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                placeholder="What do you want to cook?"
            />
        </div>
    );
}
