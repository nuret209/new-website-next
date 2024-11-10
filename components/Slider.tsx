interface SliderProps {
    position: number;
    horizintal?: boolean;
}

const Slider = (props: SliderProps) => {
    return (
        <>
            <div className={`justify-between flex ${props.horizintal ? " w-[calc(100%-24px)] border-t border-t-[#222]" : "flex-col h-[calc(100%+1px)] border-l border-l-[#222]"}`}>
                <img src="/images/arrow.svg" height={24} width={24} className={`h-6 w-6  border-[#222] border-r ${props.horizintal ? "rotate-0" : "rotate-90  "} `} />   
              <img src="/images/arrow.svg" className={` h-6 w-6 border-[#222] border-x ${props.horizintal ? "rotate-180" : "rotate-[270deg]"}`} />
            </div>
        </>
    )
}

export default Slider