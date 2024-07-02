'use client';

import { GoHeartFill, GoHeart } from 'react-icons/go';
import { useState } from 'react';

export default function HeartButton() {
    const [heart, setHeart] = useState(false);

    function toggleHeart() {
        setHeart(!heart);
    }
    
    // TODO : Combine 2 versions of the heart button by passing a prop instead

    return (
        <div
            onClick={toggleHeart}
            style={{ cursor: 'pointer' }}
            className="border-style absolute right-0 z-20 m-[1rem] rounded-full bg-[#ffffffdd] p-[0.4rem] backdrop-blur-md"
        >
            {heart ? (
                <GoHeartFill size={20} className="text-[#ff6b1c]" />
            ) : (
                <GoHeart size={20} className="text-[#171717]" />
            )}
        </div>
    );
}
