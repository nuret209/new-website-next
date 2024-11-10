"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'
import NotePadWindow from '@/components/NotePadWindow'

const NotePad = () => {
    return (
        <>
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/' />
            </Folder>
            <NotePadWindow />
        </>

    )
}

export default NotePad