import { ReactFragment, ReactNode } from 'react'
import { TbTags, TbTools, TbHome, TbUser, TbLogout } from 'react-icons/tb'
import { SideBarOption } from './side-bar-option'

type SideBarProps = {
    children?: ReactNode
    className?: string
}

export function SideBar({ children, className }: SideBarProps) {
    return (
        <div className='flex'>
            <nav className='border w-[250px] h-screen'>
                <ul className='space-y-2 p-4 flex flex-col justify-between h-full'>
                    <div className='space-y-2'>
                        <h1 className='text-gray-500 font-light'>Menu</h1>
                        <SideBarOption
                          caption='Home'
                          Icon={TbHome}
                          href='/'/>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-gray-500 font-light'>Configurações</h1>
                        <SideBarOption
                          caption='Perfil'
                          Icon={TbUser}
                          href='/profile'/>
                        <SideBarOption
                          caption='Permissões'
                          Icon={TbTools}
                          href='/permissions'/>
                        <SideBarOption
                          caption='Tags'
                          Icon={TbTags}
                          href='/tags'/>
                        <SideBarOption
                          caption='Sair'
                          Icon={TbLogout}
                          href='/logout'/>
                    </div>
                </ul>
            </nav>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}