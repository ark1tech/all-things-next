import { IoDice } from 'react-icons/io5';

export default function RandomizeButton() {

    // Not working for now
    // TODO : Implement this

    return (
        <div className="w-fit cursor-pointer overflow-clip rounded-lg border border-[#ff5e01]">
            <a
                className="flex flex-row items-center gap-[0.3rem] px-[0.75rem] py-[0.15rem] text-sm text-[#ff5e01] transition-all duration-300 ease-in-out hover:bg-[#ff5e01] hover:text-white hover:shadow-[inset_0_-5px_10px_#ffab81]"
                target="_blank"
            >
                <IoDice />
                Random recipe
            </a>
        </div>
    );
}
