import React, { useRef, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

const NotePadWindow = () => {

    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState("");
    const windowRef = useRef<HTMLDivElement>(null);
    function saveNote() {
        if (note != "") {
            const blob = new Blob([note], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "yournote.txt";
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } else setNote("Note can't be empty! Please write something. ");
    }
    document.addEventListener('click', (e: MouseEvent) => {
        const parentWindow = windowRef.current?.parentElement?.children[2].children[0];
        if (!windowRef.current || !parentWindow) return;
        if (e.composedPath().includes(parentWindow)) 
            window.location.href = "/systemapps";

    })
    return (
        <div ref={windowRef} className='
            absolute left-20 top-20 z-[9999] font-[Verdana,_Geneva,_sans-serif]  bg-white border-[#222] border-y-2 border-x-[1px] 
            [box-shadow:18px_21px_0px_-1px_rgba(0,0,0,0.51)]
            '>
            <div className={`flex flex-col h-[350px] w-[250px] relative border-b border-b-[#222] mb-[2px]`}>
                <div className="flex justify-between relative my-1 pb-1 border-b border-[#222] ">
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
                    <h1 className="bg-white flex items-center h-4 font-[ChicagoFLF] px-2">Notepad</h1>
                    <img src='/images/saveIcon.svg' onClick={saveNote} className='h-4 w-4 mr-3' />
                    <div className="z-[-50] absolute top-0 left-0 h-full w-full">
                        <div className="flex flex-col gap-[2px] ">
                            {Array.from({ length: 6 }, (_, i) => i = i + 1).map(
                                (i) => <div key={i} className="bg-[#222] h-[1px] w-full"></div>
                            )}
                        </div>
                    </div>
                </div>
                <img src="/images/triangle.svg" className='absolute bottom-[5px] bg-white z-20' height={35} width={39} alt="" />
                <h4 className='absolute bottom-[5px] left-0 w-full flex justify-center border-b border-b-[#222]'>1</h4>
                <textarea value={note} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNote(e.target.value)} className='resize-none px-2 h-full outline-none my-[2px] border-b border-b-[#222]'></textarea>
            </div>
        </div >
    )
}

export default NotePadWindow