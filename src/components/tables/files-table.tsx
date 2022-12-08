import { Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { TbFile, TbFileUpload, TbFileZip, TbFolder } from 'react-icons/tb'
import { useFolders } from "../../hooks/folder-hooks"

interface DataType {
    key: React.Key
    name: string
    size: number
    type: 'file' | 'folder'
    updatedAt: string
}


const columns: ColumnsType<DataType> = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        render: (name: string, record) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                { renderIcon(record.type, name) }
                <p style={{ marginLeft: '8px' }}>{name}</p>
            </div>
        )
    },
    {
        title: 'Tamanho',
        dataIndex: 'size',
        key: 'size',
        sorter: (a, b) => a.size - b.size 
    },
    {
        title: 'Atualizado em',
        dataIndex: 'updatedAt',
        key: 'updatedAt' 
    },
]


function renderIcon(type: 'folder' | 'file', name: string) {
    if (type === 'folder') return <TbFolder/>
    switch (name.toLocaleLowerCase().split('.').pop()) {
        case 'jpg':
        case 'jpeg':
        case 'mp4': {
            return <TbFileUpload/>
        }
        case 'zip': {
            return <TbFileZip/>
        }
        default: {
            return <TbFile/>
        }
    }
}

function transformData({ data }: ReturnType<typeof useFolders>) : DataType[] {
    if (!data) return []

    const folders = data.map(folder => ({
        key: folder.id,
        name: folder.name,
        size: 0,
        type: 'folder',
        updatedAt: folder.updatedAt
    })) as DataType[]

    const files = data.map(folder => {
        return folder.files.map(file => ({
            key: file.id,
            name: file.name,
            size: 0,
            type: 'file',
            updatedAt: file.updatedAt
        })) 
    }).flat() as DataType[]
    
    return [...folders, ...files].sort((a, b) => a.name.localeCompare(b.name))
    
}

export const FilesTable = () => {

    const queryResult = useFolders()
 

    const dataSource = transformData(queryResult)

    return (
        <Table
          columns={columns}
          dataSource={dataSource}
          />
    )
}