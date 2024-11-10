"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'
import CalculatorWindow from '@/components/CalculatorWindow'

const Calculator = () => {
    return (

        < >
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <CalculatorWindow />
        </>

    )
}

export default Calculator