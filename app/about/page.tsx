"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'
import AboutThisOSWindow from '@/components/AboutThisOSWindow'

const AboutThisOS = () => {
    return (
        < >
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <AboutThisOSWindow />

        </>
    )
}

export default AboutThisOS