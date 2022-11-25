import { IconType } from 'react-icons'

type SideBarOptionProps = {
    Icon: IconType
    caption: string
}
export function SideBarOption({ Icon, caption } : SideBarOptionProps) {
    return (
        <li className='flex items-center space-x-2 p-2 rounded hover:cursor-pointer hover:bg-gray-50'>
            <Icon className='h-5 w-5'/>
            <p>{caption}</p>
        </li>
    )
}