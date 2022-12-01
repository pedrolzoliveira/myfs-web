import { useFolders } from "../../hooks/folder-hooks"
import { TbFolder } from 'react-icons/tb'

export const FileList = () => {

    const { data: folders } = useFolders()

    return (
        <div className="flex flex-col w-full space-y-2">
            <table className="border">
                <thead>
                    <tr>
                        <th className="text-start">Nome</th>
                        <th className="text-start">Tamanho</th>
                        <th className="text-start">Tipo</th>
                        <th className="text-start">Atuailizado em</th>
                        <th className="text-start">Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        folders?.map(folder => {
                            return (
                                <tr key={folder.id} className='odd:bg-slate-300'>
                                    <td className='flex items-center space-x-2'>
                                        <TbFolder/>
                                        <p>{folder.name}</p>
                                    </td>
                                    <td className='text-start'>-</td>
                                    <td>Pasta</td>
                                    <td>{folder.updatedAt}</td>
                                    <td>{folder.createdAt}</td>
                                
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}