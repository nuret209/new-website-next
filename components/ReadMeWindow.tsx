import Window from './Window'
import Slider from './Slider'

const ReadMeWindow = () => {
    return (
        <div>
            <Window windowTitle='Read Me'>
                <div className='flex justify-between max-h-[calc(100%-48px)]'>
                    <div className='overflow-auto max-w-[calc(100%-24px)] px-12 py-5'>
                        <h1 className='text-5xl font-["Times_New_Roman",_sans-serif] my-3'>Nurettin Öğüç</h1>
                        <span className='font-sans flex flex-col gap-y-5'><p>Hello! I'm Nurettin Öğüç from İstanbul, studying at Bahçelievler Anadolu High School. I work as a full-stack developer, but I see embedded systems as my main area. The childlike curiosity that started with the disassembly of old computers has changed into the professional way of joining the elegant front side and low-level programming. During the past 2 years, I have been involved with different projects associated with my microprocessor programming skills, and for the last 4 years, I have taken a special interest in the development of responsive web-based applications.
                        </p>
                            <p>It has really been an adventure from the whole technical standpoint. Creating frictionless user experiences is what my day-to-day life would consist of: leveraging React and modern JavaScript frameworks to get the best results out of them; and with Next.js and Tailwind, I can do great stuff on both the UI and backend side. My true technical passion, however, lies in programming microprocessors.
                            </p>
                            <p>I have been intensively working on embedded solutions ranging from basic Arduino to complex ARM-based systems. There's something peculiarly satisfying about writing code that speaks right to hardware and turns things on and off-from humble LED matrices to intricate sensor systems. This unlikely combination of skills now enables me to create web interfaces for embedded systems that update in real time, therefore creating truly interactive experiences. When not working on new projects, you can commonly find me at home tending to my workshop full of microcontrollers.
                            </p>
                            <p>Also, I am interested in IoT projects, most of which relate to the integration of web interfaces with custom-built hardware. I would love to work on collaborative projects with other developers or anyone interested in Full Stack Development or Hardware Programming generally. For any collaboration on a project or a need from a professional group that develops some web interfaces for a microcontroller-powered system or simply would want to chat about the latest going on with microcontrollers, please do not hesitate but just shoot me an email at noguc4200@gmail.com. Let's make something great!
                            </p>
                        </span>
                    </div>
                    <Slider position={50} />

                </div>
                <Slider position={50} horizintal />

            </Window>
        </div>
    )
}

export default ReadMeWindow
