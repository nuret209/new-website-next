import React from 'react'
import Window from './Window'

const TerminalWindow = () => {
    return (
        <div>
            <Window windowTitle='Terminal'>
                <div className='flex flex-col relative gap-y-3 h-full overflow-auto bg-black '>
                    <span className='absolute left-3 top-3 text-gray-500'>user@nuret:~$</span>
                    <textarea className='w-full min-h-[120px] h-full border text-green-500 rounded-lg pl-[137px] pt-3 pr-3 pb-3 appearance-none bg-transparent border-0' ></textarea>
                </div>
                <></>
            </Window >
        </div>
    )
}

export default TerminalWindow