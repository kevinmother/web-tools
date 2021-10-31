import React from 'react';
import { Layout, Breadcrumb, Skeleton } from '@douyinfe/semi-ui';
import { withRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './Header';
import AppSider from './Sider';
import AppFooter from './Footer';
import SiderLinkData from './SiderLinkData';

function AppLayout() {
  const { Content } = Layout;

  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <AppSider />
      <Layout>
        <AppHeader />
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Switch>
            {SiderLinkData.map((data) => (
              <Route
                key={data.itemKey}
                path={data.link}
                component={data.page}
              />
            ))}
          </Switch>

          <Breadcrumb
            style={{
              marginBottom: '24px',
            }}
            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
          />
          <div
            style={{
              borderRadius: '10px',
              border: '1px solid var(--semi-color-border)',
              height: '376px',
              padding: '32px',
            }}
          >
            <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading>
              <p>Hi, Bytedance dance dance.</p>
              <p>Hi, Bytedance dance dance.</p>
            </Skeleton>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default withRouter(AppLayout);
