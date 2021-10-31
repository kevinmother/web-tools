import React from 'react';
import { IconHome, IconSetting } from '@douyinfe/semi-icons';
import Home from '../../pages/home/Home';
import Tool from '../../pages/tool/Tool';

const SiderLinkData = [
  {
    itemKey: '/app/home',
    text: 'Home',
    link: '/app/home',
    icon: <IconHome size="large" />,
    page: Home,
  },
  {
    itemKey: '/app/tool',
    text: 'Tool',
    link: '/app/tool',
    icon: <IconSetting size="large" />,
    page: Tool,
  },
];

export default SiderLinkData;
