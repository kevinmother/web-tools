import React, { useEffect } from 'react';
import {
  Button, Layout, Nav,
} from '@douyinfe/semi-ui';
import { IconSun, IconMoon } from '@douyinfe/semi-icons';

export default function AppHeader() {
  const {
    Header,
  } = Layout;

  const [darkMode, setDarkMode] = React.useState(true);

  useEffect(() => {
    const { body } = document;
    if (!darkMode && body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else if (darkMode) {
      body.setAttribute('theme-mode', 'dark');
    }
  }, [darkMode]);

  return (
    <Header>
      <Nav
        mode="horizontal"
        footer={(
          <>
            {darkMode
              ? (
                <Button
                  theme="borderless"
                  icon={<IconSun size="large" />}
                  onClick={() => setDarkMode(false)}
                />
              )
              : (
                <Button
                  theme="borderless"
                  icon={<IconMoon size="large" />}
                  onClick={() => setDarkMode(true)}
                />
              )}
          </>
        )}
      />
    </Header>
  );
}
