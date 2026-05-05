"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'

const Projects = () => {
    return (
      
            <Folder windowTitle='Skills'>
                <FileFolderIcon title='FullStack Developer' iconPath='/appIcon.svg' path='/#' />
                <FileFolderIcon title='C++ Developer' iconPath='/appIcon.svg' path='/#' />
                <FileFolderIcon title='Microcontroller Developer' iconPath='/appIcon.svg' path='/#' />
            </Folder>
    )
}

export default Projects