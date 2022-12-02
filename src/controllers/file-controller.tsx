import { Layout, Input } from 'antd'

const { Header, Content, Sider } = Layout;

export const FileController = () => {
    return (
        <Layout>
            <Layout>
                <Header>
                    <Input.Search/>
                </Header>
                <Content>Content</Content>
            </Layout>
            <Sider>Sider</Sider>
        </Layout>
    )
}