import { ReactNode } from 'react';
import { Layout, Menu, MenuProps } from 'antd'
import { TbHome, TbLogout, TbTags, TbTools, TbUser } from 'react-icons/tb';
import Link from 'next/link'

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
        getItem('Menu', 'menu', null, [
          getItem(<Link href='/'>Home</Link>, 'home', <TbHome/>)
        ], 'group'),
        getItem('Configurações', 'config', null, [
            getItem(<Link href='/profile'>Perfil</Link>, 'profile', <TbUser/>),
            getItem(<Link href='/permissions'>Permissões</Link>, 'permissions', <TbTools/>),
            getItem(<Link href='/tags'>Tags</Link>, 'tags', <TbTags/>),
            getItem(<Link href='/logout'>Sair</Link>, 'logout', <TbLogout/>),
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
