"use client"
import Folder from './FileFolderIcon'
const Apps = () => {
    return (
        <div className='relative  flex flex-col items-start justify-between h-[calc(100%-48px)] w-full pl-8 py-8'>
            <div className='flex flex-col gap-8 items-center justify-center'>
                <Folder title='System Apps' iconPath='folder.svg' path='/systemapps' />
                <Folder title='Skills' iconPath='folder.svg' path='/skills' />
                <Folder title='Projects' iconPath='folder.svg' path='/projects' />

                <Folder title='Read Me' iconPath='document.svg' path='/readme' />
                <Folder title='Terminal' iconPath='document.svg' path='/terminal' />

            </div>
           <div className='ml-3'> <Folder title='Trash' iconPath='trash.svg' path='/trash' /></div>
        </div>
    )
}

export default Apps