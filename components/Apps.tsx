"use client"
import Folder from './FileFolderIcon'
const Apps = () => {
    return (
        <div className='relative  flex flex-col items-end justify-between h-[calc(100%-48px)] w-full px-8 py-8'>
            <div className='flex flex-col gap-8'>
                <Folder title='System Apps' iconPath='folder.svg' path='/systemapps' />
                <Folder title='Read Me' iconPath='document.svg' path='/readme' />
            </div>
            <Folder title='Trash' iconPath='trash.svg' path='/trash' />
        </div>
    )
}

export default Apps