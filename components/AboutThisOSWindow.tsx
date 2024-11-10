import  { useEffect, useRef, useState } from 'react'
import { ColorRing } from 'react-loader-spinner';

const AboutThisOSWindow = () => {
    const [loading, setLoading] = useState(false);
    const windowRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (document !== undefined || document !== null)
            document.addEventListener('click', (e: MouseEvent) => {
                const parentWindow = windowRef.current?.parentElement?.children[2].children[0];
                if (!windowRef.current || !parentWindow) return;
                if (e.composedPath().includes(parentWindow))
                    window.location.href = "/systemapps";

            })
    })
    return (
        <div ref={windowRef} className='
            absolute left-[50%] translate-x-[-50%] translate-y-[-60%] top-[50%] sm:left-20 sm:top-20 sm:translate-x-0 sm:translate-y-0 z-[9999] font-[Verdana,_Geneva,_sans-serif]  bg-white border-[#222] border-y-2 border-x-[1px] 
            [box-shadow:18px_21px_0px_-1px_rgba(0,0,0,0.51)]
            '>
            <div className={`flex flex-col h-[200px] w-[350px] relative mb-[2px]`}>
                <div className="flex justify-between relative my-1">
                    <span onClick={() => {
                        setLoading(true);
                        window.location.href = "/systemapps"
                    }} className="h-4 w-4  bg-white ml-3 block border-2 border-[#222]">
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
                    <h1 className="bg-white flex items-center h-4 font-[ChicagoFLF] px-2">About This Mac</h1>
                    <a href='https://www.computinghistory.org.uk/det/11814/Apple-Macintosh-Plus-1MB/' className="h-4 w-4 bg-white  mr-3 block border-2 border-[#222]"><span className="h-2 w-2 ml-[-2px] mt-[-2px] block border-2 border-[#222]"></span></a>


                    <div className="z-[-50] absolute top-0 left-0 h-full w-full">
                        <div className="flex flex-col gap-[2px] ">
                            {Array.from({ length: 6 }, (_, i) => i = i + 1).map(
                                (i) => <div key={i} className="bg-[#222] h-[1px] w-full"></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-full '>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h2 className='font-[ChicagoFLF] text-center'>The Macintosh™ Finder</h2>
                        <h3>Bruce Horn and Steve Capps</h3>
                    </div>
                    <span className='flex text-sm mx-2 mb-2 justify-between'>
                        <h4>4096K.</h4>
                        <h4>Version 5.1 ©1986 Apple Computer</h4>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default AboutThisOSWindow