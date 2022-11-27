import { IconType } from 'react-icons'
import Link from 'next/link'

type SideBarOptionProps = {
    Icon: IconType
    caption: string
    href: string
}
export function SideBarOption({ Icon, caption, href } : SideBarOptionProps) {
    return (
        <Link href={href}>
            <li className='flex items-center space-x-2 p-2 rounded hover:cursor-pointer hover:bg-gray-50'>
                <Icon className='h-5 w-5'/>
                <p>{caption}</p>
            </li>
        </Link>
    )
}