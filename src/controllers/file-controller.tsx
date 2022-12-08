import { Layout, Input, Table, TableColumnProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import { FilesTable } from '../components/tables/files-table';
import { useFolders } from '../hooks/folder-hooks';

const { Header, Content, Sider } = Layout;


export const FileController = () => {
    const { data: folders } = useFolders()

    return (
        <Layout>
            <Layout>
                <Header style={{ background: 'white' }}>
                    <Input.Search/>
                </Header>
                <Content>
                    <FilesTable/>
                </Content>
            </Layout>
            <Sider style={{ background: 'white' }}>Sider</Sider>
        </Layout>
    )
}