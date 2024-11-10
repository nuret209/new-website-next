"use client"
import { useEffect, useState } from "react";
import Alert from "./Alert";
import Restart from "./Restart";
import Shutdown from "./Shutdown";
import { useRouter } from "next/navigation";

const Menus = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nurettin-%C3%B6%C4%9F%C3%BC%C3%A7-281180238/",
    },
    {
        name: "GitHub",
        link: "https://github.com/nuret209",
    },
    {
        name: "Email",
        link: "mailto:noguc4200@gmail.com",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/nnurett/",
    },
]
const LogoPages = [
    [
        "Read Me"
    ],
    [
        "Empty Trash"
    ],
    [
        "Logout",
        "Restart",
        "Shutdown",
    ]
]
const Menu = () => {
    const router = useRouter();
    const [alertShown, setAlertShown] = useState(false);
    const [alertResult, setAlertResult] = useState("undefined");
    const [alertMessage, setAlertMessage] = useState("undefined");
    const [AlertButtonTitle, setAlertButtonTitle] = useState("undefined");
    const [AlertElement, setAlertElement] = useState<React.ReactNode | null>(null);

    useEffect(() => {
        switch (alertResult) {
            case 'Restart':
                setAlertElement(<Restart />);
                break;
            case 'Shutdown':
                setAlertElement(<Shutdown />);
                break;
        }
        setAlertShown(false);
    }, [alertResult]);

    function HandleMenu(event: React.MouseEvent<HTMLSpanElement>): void {
        event.preventDefault();
        const targetInnerHTML = (event.target as HTMLSpanElement).innerHTML;
        if (!targetInnerHTML) return;

        switch (targetInnerHTML) {
            case "Read Me":
                router.push("/readme");
                break;
            case "Empty Trash":
                router.push("/trash");
                break;
            case "Logout":
                // Handle logout
                break;
            case "Restart":
                setAlertButtonTitle("Restart");
                setAlertMessage("Maybe it's not a good idea to restart my website. Proceed?");
                setAlertShown(true);
                break;
            case "Shutdown":
                setAlertButtonTitle("Shutdown");
                setAlertMessage("Maybe it's not a good idea to shut my website down without a hardware reset button. Proceed?");
                setAlertShown(true);
                break;
        }
    }

    return (
        <div className='px-2 text-[#222] text-sm border-black border-b-2 selection:bg-transparent bg-white flex font-[ChicagoFLF] cursor-default'>
            {AlertElement}
            {alertShown && <Alert message={alertMessage} buttonTitle={AlertButtonTitle} setAlertMessage={setAlertResult} />}
            <div className='group/main relative'>
                <img src='/images/appleIcon.svg' alt='Apple Icon' className='min-h-9 min-w-9 px-2 py-1 z-20 hover:bg-[#ddd] hover:invert' />
                <div className='absolute hidden group-hover/main:flex z-30 content-none top-[calc(100%)] left-0 bg-white text-[#222] flex-col border-2 border-[#222]'>
                    {LogoPages.map((page, i) => (
                        <div key={i} className='flex flex-col border-dotted border-b-2 border-gray-900 last:border-b-0 py-2 first:pt-0 last:pb-0'>
                            {page.map((p, j) => (
                                <span key={j} onClick={HandleMenu} className='whitespace-nowrap py-[2px] px-2 cursor-pointer hover:bg-[#222] hover:text-white'>{p}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex'>
                {Menus.map((menu, i) => (
                    <a key={i} href={menu.link} className='hover:bg-[#222] hover:text-white flex px-2 items-center'>{menu.name}</a>
                ))}
            </div>
        </div>
    );
}

export default Menu;