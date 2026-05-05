import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import "@/styles/loading.css"

const LoadingScreen = () => {

    const searchParams = useSearchParams();
    const noLoading = searchParams.get("noloading");

    const [visible, setVisible] = useState(true);
    const [closing, setClosing] = useState(false);

    const handleFinish = () => {
        setClosing(true);

        // kapanma animasyonu bitince component silinir
        setTimeout(() => {
            setVisible(false);
        }, 800);
    };

    if (!visible) return null;

    return (
        <>
            {noLoading !== "true" && <div
                className={`
                crt-loading
                ${closing ? "crt-close" : ""}
                z-[9999]
                h-screen
                w-screen
                absolute
                top-0
                left-0
                bg-black
                text-white
            `}
            >
                <h1 className='crt-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-[ChicagoFLF]'>
                    <TypeAnimation
                        sequence={[
                            "Initializing...",
                            1000,
                            "Loading portfolio...",
                            1000,
                            "Welcome.",
                            1000,
                            handleFinish,
                        ]}
                        speed={50}
                        repeat={0}
                    />
                </h1>
            </div>
            }
        </>
    );
};


export default LoadingScreen