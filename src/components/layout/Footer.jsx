import React from 'react';
import { IconHelm } from '@douyinfe/semi-icons';
import { Layout } from '@douyinfe/semi-ui';

export default function AppFooter() {
  const {
    Footer,
  } = Layout;
  return (
    <Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'var(--semi-color-text-2)',
        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconHelm size="large" style={{ marginRight: '8px' }} />
        <span>Copyright © 2021 kevinmother. All Rights Reserved. </span>
      </span>
      <span>
        <span>Feedback</span>
      </span>
    </Footer>
  );
}
