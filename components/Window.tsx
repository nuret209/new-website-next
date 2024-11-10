import { useRef, useState } from "react";
import { ColorRing } from "react-loader-spinner";

interface WindowProps {
    windowTitle: string;
    children: Array<React.ReactNode>;
}


const Window = (props: WindowProps) => {
    const [fullscreen, setFullscreen] = useState(false);
    const windowRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLSpanElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState(false)
    document.addEventListener('click', (e: MouseEvent) => {
        if (!frameRef.current || !windowRef.current) return;
        if ((e.composedPath().includes(frameRef.current) && !e.composedPath().includes(windowRef.current)
            ||
            (closeButtonRef.current && e.composedPath().includes(closeButtonRef.current)))) {
            setLoading(true)
            window.location.href = "/"
        }
    })

    return (
        <div ref={frameRef} className="absolute h-full w-full top-0 left-0 z-10 bg-[rgba(0,0,0,0.3)] ">
            <div ref={windowRef} className='
            absolute left-[50%] translate-x-[-50%] translate-y-[-50%] font-[Verdana,_Geneva,_sans-serif] top-[50%] bg-white border-[#222] border-y-2 border-x-[1px] 
            [box-shadow:18px_21px_0px_-1px_rgba(0,0,0,0.51)]
            '>
                <div className={`flex flex-col ${fullscreen ? "h-[calc(100vh-10px)] w-[calc(100vw-2px)]" : "w-[calc(100vw-25px)] h-80 md:h-[350px] md:w-[662px] "}`}>
                    <div className="flex justify-between relative my-1">
                        <span ref={closeButtonRef} className="h-4 w-4  bg-white ml-3 block border-2 border-[#222]">
                            {loading && <div className="relative left-[-2px] top-[-2px]">
                                <ColorRing
                                    visible={true}
                                    height="16"
                                    width="16"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#222', '#444', '#666', '#888', '#aaa']}
                                />
                            </div>}
                        </span>
                        <h1 className="bg-white flex items-center h-4 font-[ChicagoFLF] px-2">{props.windowTitle}</h1>
                        <span className="h-4 w-4 bg-white  mr-3 block border-2 border-[#222]" onClick={() => setFullscreen(!fullscreen)} ><span className="h-2 w-2 ml-[-2px] mt-[-2px] block border-2 border-[#222]"></span></span>
                        <div className="z-[-50] absolute top-0 left-0 h-full w-full">
                            <div className="flex flex-col gap-[2px] ">
                                {Array.from({ length: 6 }, (_, i) => i = i + 1).map(
                                    (i) => <div key={i} className="bg-[#222] h-[1px] w-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div >
        </div>
    )
}

export default Window