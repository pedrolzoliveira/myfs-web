import { useState } from 'react'
import { FcFolder, FcOpenedFolder } from 'react-icons/fc'

export const Folder = () => {
    const [open, setOpen] = useState(false)


    return (
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}>
            {
                open ?
                <FcOpenedFolder/>
                :
                <FcFolder/>
            }
        </button>
    )
}