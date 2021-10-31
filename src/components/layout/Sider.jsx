import React from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import imgLogo from '../../images/logo.svg';
import SiderLinkData from './SiderLinkData';

export default function AppSider() {
  const {
    Sider,
  } = Layout;
  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultSelectedKeys={['Home']}
        style={{ maxWidth: 220, height: '100%' }}
        items={SiderLinkData}
        header={{
          logo: <img src={imgLogo} alt="logo" />,
          text: 'Web Tools',
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </Sider>
  );
}
