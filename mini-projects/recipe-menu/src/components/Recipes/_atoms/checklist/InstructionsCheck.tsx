import { Recipe } from '@/types/recipe';
import { useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';

const InstructionsButton: React.FC<Recipe> = (recipe): React.JSX.Element => {
    const [selectedInstructions, setSelectedInstructions] = useState<string[]>(
        []
    );

    const toggleInstruction = (instruction: string) => {
        setSelectedInstructions((prevSelected) =>
            prevSelected.includes(instruction)
                ? prevSelected.filter((item) => item !== instruction)
                : [...prevSelected, instruction]
        );
    };

    return (
        <div className="flex flex-col gap-[0.5rem]">
            <h4 className="lora flex flex-row items-center gap-[0.5rem]">
                Instructions{' '}
                {`(${selectedInstructions.length}/${recipe.instructions.length})`}{' '}
                <FaCheckCircle
                    className={`${selectedInstructions.length === recipe.instructions.length ? `text-[#ff6b1c]` : `text-[#ff6b1c00]`}`}
                />
            </h4>
            <div className="flex flex-col gap-[0.5rem] rounded-md border border-[#7272723e] p-[1rem]">
                {recipe.instructions.map((instruction, i) => (
                    <p
                        key={instruction}
                        className={`flex flex-row gap-[0.5rem] rounded-md p-[0.5rem] cursor-pointer hover:bg-[#d3b8b839] ${
                            selectedInstructions.includes(instruction)
                                ? 'bg-[#ffdac9]'
                                : 'bg-[#ffffff00]'
                        }`}
                        onClick={() => toggleInstruction(instruction)}
                    >
                        <span>{i + 1}.</span> {instruction}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default InstructionsButton;
