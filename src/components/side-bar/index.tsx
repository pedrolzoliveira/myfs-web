import { ReactFragment } from 'react'
import { TbTags, TbTools, TbHome, TbUser, TbLogout } from 'react-icons/tb'
import { SideBarOption } from './side-bar-option'

type SideBarProps = {
    children?: ReactFragment
}

export function SideBar({ children }: SideBarProps) {
    return (
        <div className='flex'>
            <nav className='border w-[250px] h-screen'>
                <ul className='space-y-2 p-4 flex flex-col justify-between h-full'>
                    <div className='space-y-2'>
                        <h1 className='text-gray-500 font-light'>Menu</h1>
                        <SideBarOption caption='Home' Icon={TbHome}/>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-gray-500 font-light'>Settings</h1>
                        <SideBarOption caption='Profile' Icon={TbUser}/>
                        <SideBarOption caption='Permissions' Icon={TbTools}/>
                        <SideBarOption caption='Tags' Icon={TbTags}/>
                        <SideBarOption caption='Logout' Icon={TbLogout}/>
                    </div>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}