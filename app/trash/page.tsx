"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'

const Trash = () => {
    return (
        <>
            <Folder windowTitle='Trash'>
                <FileFolderIcon title='python' iconPath='/document.svg' path='https://www.youtube.com/shorts/Whs3Bwl9qTI?feature=share' />
                {null}
            </Folder>
        </>
    )
}

export default Trash