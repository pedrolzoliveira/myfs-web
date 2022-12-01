import { FileList } from '../components/file-list'

export function FileControllerHeader() {
    return (
        <div>
            <input type="text" className='border rounded w-full p-2'/>
        </div>
    )
}


export const FileController = () => {
    return (
        <div className='w-full h-full p-4'>
            <FileControllerHeader/>
            <FileList/>
        </div>
    )
}