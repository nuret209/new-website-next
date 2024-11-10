import { useEffect, useRef, useState } from 'react'

interface FileFolderIconProps {
    title: string,
    iconPath: string,
    path: string,
}

const FileFolderIcon = (props: FileFolderIconProps) => {
    const [focused, setFocused] = useState(false)
    const iconRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
                setFocused(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("click", handleClickOutside);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("click", handleClickOutside);
            }
        };
    }, []);

    function handleOnClick(): void {
        if (focused) {
            window.location.href = props.path;
        }
        setFocused(true);
    }

    return (
        <div ref={iconRef} className={`flex flex-col items-center w-[45px] h-[45px] ${focused ? "invert" : ""}`} onClick={handleOnClick}>
            <img src={`/images/${props.iconPath}`} className='w-[45px] mb-[1px] h-[45px] ' />
            <h1 className='text-sm bg-white text-[#222] text-center px-2 whitespace-nowrap'>{props.title}</h1>
        </div>
    )
}

export default FileFolderIcon