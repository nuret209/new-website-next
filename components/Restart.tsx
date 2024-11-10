import { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Restart = () => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count != 0) {
            setTimeout(() => {
                setCount(count => count - 1);

            }, 1000)
        } else {
            window.location.href = "/";
        }
    }, [count])

    return (
        <div className='fixed left-0 h-full w-full top-0 bg-[#222] z-[9999] text-white'>
            <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex flex-col items-center justify-center gap-y-5'>
                    <RotatingLines
                        visible={true}
                        strokeColor='#fff'
                        width="96"
                        strokeWidth="5"
                        animationDuration="0.5"
                        ariaLabel="rotating-lines-loading"
                    />
                    <span className='text-3xl'>Restarting the computer</span>
                    <h1>{count}</h1>
                </div>
            </div>
        </div>
    )
}

export default Restart