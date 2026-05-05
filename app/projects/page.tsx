"use client"
import Folder from '@/components/Folder'
import FileFolderIcon from '@/components/FileFolderIcon'

const Page = () => {
    return (
      
            <Folder windowTitle='Projects'>
                <FileFolderIcon title='Dikici Nakliyat' iconPath='/appIcon.svg' path='https://www.dikicinakliyat.net' />
                <FileFolderIcon title='Avcıoğlu Tarım' iconPath='/appIcon.svg' path='https://www.xn--avcolutarm-dpb8sh.com/' />
                <FileFolderIcon title='Monopoly' iconPath='/appIcon.svg' path='https://mnopolt-9gcy.vercel.app/' />
            </Folder>
    )
}

export default Page