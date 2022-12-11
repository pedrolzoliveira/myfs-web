import { Layout, Input, Table, TableColumnProps, Button, Modal } from 'antd'
import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { CreateFolderModal } from '../components/modals/create-folder-modal';
import { FilesTable } from '../components/tables/files-table';
import { useFolders } from '../hooks/folder-hooks';

const { Header, Content, Sider } = Layout;


export const FileController = () => {
    const { data: folders } = useFolders()

    const [isOpen, setIsOpen] = useState(false)

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Layout>
                <Layout>
                    <Header style={{ background: 'white', display: 'flex' }}>
                            <Input.Search/>
                            <Button type='primary' onClick={() => setIsOpen(true)}>Criar pasta</Button>
                    </Header>
                    <Content>
                        <FilesTable/>
                    </Content>
                </Layout>
                <Sider style={{ background: 'white' }}>Sider</Sider>
            </Layout>
            <CreateFolderModal isOpen={isOpen} onClose={handleCloseModal}/>
        </>
    )
}