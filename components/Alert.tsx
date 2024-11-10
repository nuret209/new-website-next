import React from 'react'
interface AlertProps {
    message: string;
    buttonTitle: string;
    setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Alert = (props: AlertProps) => {
    return (
        <div className='absolute left-[50%] translate-x-[-50%] z-[9999] translate-y-[-50%] font-[Verdana] top-[50%] bg-white border-[#222] border-x-2 border-y-[1px] p-1'>
            <div className='border-[#222] border-y-4 border-x-[3px] flex flex-col box-border pr-4 sm:pr-0'>
                <div className='flex p-4'>
                    <img src='/images/alertIcon.svg' className='mr-8 w-12 h-12  ' />
                    <h1>{props.message}</h1>
                </div>
                <div className='ml-[50%] mb-4 flex lg:flex-row flex-col lg:items-center items-center lg:justify-evenly cursor-default selection:bg-transparent'>
                    <div className="py-[6px] relative  px-4 border-[1px] bg-white rounded border-[#222]
                    before:content-[''] before:rounded before:h-[calc(100%+8px)] before:w-[calc(100%+8px)] before:absolute before:top-[-4px] before:left-[-4px]  hover:before:bg-[#222] before:z-[-5]
                    " onClick={() => props.setAlertMessage("cancel")}>
                        Cancel
                    </div>
                    <div className="py-[6px] relative  px-4 border-[1px] bg-white rounded border-[#222]
                    before:content-[''] before:rounded-lg before:h-[calc(100%+12px)] before:w-[calc(100%+12px)] before:absolute before:top-[-6px] before:left-[-6px]
                     hover:before:bg-[#222] before:z-[-5] before:border-[1px] before:border-[#222]
                    "
                        onClick={() => props.setAlertMessage(props.buttonTitle)}
                    >
                        {props.buttonTitle}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Alert