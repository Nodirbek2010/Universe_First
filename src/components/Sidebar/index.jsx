import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { TbReportAnalytics } from 'react-icons/tb';
import { FaYoutube } from "react-icons/fa6";
import Example from '../Example';
import Example2 from '../Example2'; // Import additional components as needed
import Youtube from '../YouTube';

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState('youtube'); // Default to 'youtube'

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menus = [
    { name: "Youtube", component: 'youtube', icon: FaYoutube },
    { name: "Example1", component: 'example1', icon: TbReportAnalytics },
    { name: "Example2", component: 'example2', icon: TbReportAnalytics },
    { name: "Example3", component: 'example3', icon: TbReportAnalytics },
    { name: "Example4", component: 'example4', icon: TbReportAnalytics },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar collapsed={!isSidebarOpen}>
        <Menu>
          {menus.map((menu, i) => (
            <MenuItem
              key={i}
              icon={React.createElement(menu.icon)}
              onClick={() => setSelectedComponent(menu.component)}
            >
              {menu.name}
            </MenuItem>
          ))}
          <div className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <FiArrowLeft /> : <FiArrowRight />}
          </div>
        </Menu>
      </Sidebar>
      <div style={{ flex: 1, padding: '20px' }}>
        {selectedComponent === 'youtube' && <Youtube />}
        {selectedComponent === 'example1' && <Example />}
        {selectedComponent === 'example2' && <Example2 />}
        {/* Add more conditions for additional components */}
      </div>
    </div>
  );
};

export default Home;
