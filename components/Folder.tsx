import React from 'react'
import Window from './Window';
import Slider from './Slider';

interface FolderProps {
    windowTitle: string;
    children: Array<React.ReactNode>;
}

const Folder = (props: FolderProps) => {
    const children = props.children.filter(child => !(child == null));
    return (

        <Window windowTitle={props.windowTitle}>
            <div className='border-y-[1px] text-[12px] sm:text-base px-2 sm:px-4 flex mb-[2px] justify-between border-[#222]'>
                <span className='w-4 whitespace-nowrap'>{children.length} items</span>
                <h1 className='flex'>616K in disk</h1>
                <h2 className='w-4 whitespace-nowrap relative right-20 sm:right-[108px] text-end'>50K in available</h2>
            </div>
            <div className='flex relative flex-col h-full justify-between'>
                <div className='flex justify-between h-full  border-[#222]'>
                    <div className='flex gap-x-12 flex-wrap w-full px-7 py-5 overflow-clip'>
                        {children.map(child => child)}
                    </div>
                    <Slider position={50} />
                    <img src='/images/unnamedIcon.svg' className='absolute h-5 w-5 bottom-[2px] right-[2px]' />
                </div>
                <Slider position={50} horizintal />
            </div>
        </Window>
    )
}

export default Folder