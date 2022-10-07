import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu } from 'antd';
import React from 'react';

const onMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item',
      },
      {
        key: '2',
        label: '2nd item',
      },
      {
        key: '3',
        label: '3rd item',
      },
    ]}
  />
);

const App: React.FC = () => (
  <>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
  </>
);

export default App;