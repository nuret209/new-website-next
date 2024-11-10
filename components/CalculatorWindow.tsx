import { useRef, useState } from "react"

const CalculatorWindow = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [secondOperation, setSecondOperation] = useState(false);
    const [operation, setOperation] = useState("");
    const result = () => {
        switch (operation) {
            case '+':
                setFirstNumber(firstNumber + secondNumber);
                break;
            case '-':
                setFirstNumber(firstNumber - secondNumber);
                break;
            case '*':
                setFirstNumber(firstNumber * secondNumber);
                break;
            case '/':
                setFirstNumber(firstNumber / secondNumber);
                break;
        }
        setSecondNumber(0);
        setSecondOperation(false);
        setOperation("");
    }
    const addNumber = (num: number) => {
        if (secondOperation) setSecondNumber(secondNumber * 10 + num)
        else setFirstNumber(firstNumber * 10 + num)
    }
    const changeOperation = (opr: string) => {
        setSecondOperation(true);
        setSecondNumber(0);
        setOperation(opr);
    }
    const resetCalc = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setSecondOperation(false);
        setOperation("");
    }
    const resetCurrentCalc = () => {
        if (secondOperation)
            setSecondNumber(0);
        else
            setFirstNumber(0);
    }
    const windowRef = useRef<HTMLDivElement>(null);
    document.addEventListener('click', (e: MouseEvent) => {
        const parentWindow = windowRef.current?.parentElement?.children[2].children[0];
        if (!windowRef.current || !parentWindow) return;
        if(e.composedPath().includes(parentWindow))
            window.location.href= "/systemapps";
       
    })
    return (
        <div ref={windowRef} className='absolute left-24 top-24 z-[999] w-[122px] h-[193px]  bg-[#222] rounded-lg p-1'>
            <div className='text-white flex px-1 gap-2 '>
                <span className='h-[13px] w-[13px] border-white border' onClick={() => window.location.href = "/systemapps"}></span>
                <h1 className='flex mt-[-3px]   font-[ChicagoFLF] text-sm'>Calculator</h1>
            </div>
            <div className='bg-[url("/images/calculatorBg.svg")] bg-white h-[calc(100%-18px)] p-2 font-[Verdana]'>
                <div className='bg-white border border-[#222] flex justify-end px-1 mb-[5px]'>{secondOperation ? secondNumber : firstNumber}</div>
                <div className='flex flex-wrap gap-[6px] text-[10px]'>
                    <button onClick={resetCalc} className='bg-white border border-[#222] h-[20px]  w-[46px] [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>C</button>
                    <button onClick={resetCurrentCalc} className='bg-white border border-[#222] size-[20px] [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>CE</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeOperation((e.target as HTMLButtonElement).innerHTML)}
                        className='bg-white border border-[#222] size-[20px]   [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>*</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>7</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>8</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>9</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeOperation((e.target as HTMLButtonElement).innerHTML)}
                        className='bg-white border border-[#222] size-[20px]   [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>/</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>4</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>5</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>6</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeOperation((e.target as HTMLButtonElement).innerHTML)}
                        className='bg-white border border-[#222] size-[20px]   [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>-</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>1</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>2</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>3</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeOperation((e.target as HTMLButtonElement).innerHTML)}
                        className='bg-white border border-[#222] size-[20px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>+</button>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => addNumber(Number((e.target as HTMLButtonElement).innerHTML))}
                        className='bg-white border border-[#222] h-[20px] w-[46px]  [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>0</button>
                    <button onClick={result} className='bg-white border border-[#222] h-[20px] w-[46px]   [box-shadow:2px_2px_0px_0px_rgba(0,0,0,1)]'>=</button>
                </div>
            </div>
        </div>
    )
}

export default CalculatorWindow