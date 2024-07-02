'use client';

import { GoHeartFill, GoHeart } from 'react-icons/go';
import { useState } from 'react';

export default function HeartButton() {
    const [heart, setHeart] = useState(false);

    function toggleHeart() {
        setHeart(!heart);
    }

    return (
        <div
            onClick={toggleHeart}
            style={{ cursor: 'pointer' }}
            className="border-style rounded-full bg-[#ffffffdd] p-[0.4rem] backdrop-blur-md"
        >
            {heart ? (
                <GoHeartFill size={15} className="text-[#ff6b1c]" />
            ) : (
                <GoHeart size={15} className="text-[#171717]" />
            )}
        </div>
    );
}
