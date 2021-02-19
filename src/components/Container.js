import React, { useState } from 'react';
import NavSideBar from './NavSideBar';
import FloatingNav from './FloatingNav';
import Content from './Content';

import { TABS } from '../data/tabs';

const DEFAULT_ACTIVE_TAB = TABS[0].name;

export default function Container() {
  const [ activeTab, setActiveTab ] = useState(DEFAULT_ACTIVE_TAB);
  return (
    <div className="container">
      <NavSideBar activeTab={activeTab} items={TABS} onChangeTabs={setActiveTab} />
      <Content>
        {TABS.map(tab => tab.name === activeTab ? <tab.comp /> : null)}
      </Content>
      {/* <FloatingNav activeTab={activeTab} items={TABS} onChangeTabs={setActiveTab} /> */}
    </div>
  );
}