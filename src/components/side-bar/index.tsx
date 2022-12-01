import { ReactNode } from 'react';
import { Layout, Menu, MenuProps } from 'antd'
import { TbHome, TbLogout, TbTags, TbTools, TbUser } from 'react-icons/tb';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const { Sider, Content } = Layout;

export const SideBar = (props: { children?: ReactNode }) => {

    const items = [
        getItem('Menu', 'menu', null, [getItem('Home', 'home', <TbHome/>)], 'group'),
        getItem('Configurações', 'config', null, [
            getItem('Perfil', 'profile', <TbUser/>),
            getItem('Permissões', 'permissions', <TbTools/>),
            getItem('Tags', 'tags', <TbTags/>),
            getItem('Sair', 'logout', <TbLogout/>),
        ], 'group'),
    ]

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider style={{ background: 'white' }}>
                <Menu items={items}/>
            </Sider>
            <Layout>
              <Content>
                {props.children}
              </Content>
            </Layout>
        </Layout>
    )
}
