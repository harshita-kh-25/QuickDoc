import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Sticky Topbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Topbar />
      </div>

      {/* Body: Sidebar + Main */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 min-h-screen">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
