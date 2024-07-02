import RandomizeButton from '@components/Recipes/_atoms/buttons/RandomizeButton';

export default function MainHeader() {
    return (
        <section className="flex flex-col items-center gap-3 lg:flex-row">
            {/* Header Text */}
            <h1 className="flex flex-grow flex-col gap-0 text-center text-[#ff6600] md:flex-row md:gap-2 lg:text-left">
                Hello, John.
                <span className="font-[600]">Let's get cooking.</span>
            </h1>

            {/* Header Randomized Button */}
            <div className="flex flex-row items-center gap-2">
                <p className="graytext text-sm">Not sure?</p>
                <RandomizeButton />
            </div>
        </section>
    );
}
