"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'
const SystemApps = () => {
    return (
            <Folder windowTitle='System Apps'>
                <FileFolderIcon title='Calculator' iconPath='/appIcon.svg' path='/calculator' />
                <FileFolderIcon title='NotePad' iconPath='/appIcon.svg' path='/notepad' />
                <FileFolderIcon title='About This OS' iconPath='/sysIcon.svg' path='/about' />
            </Folder>
    )
}

export default SystemApps