import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '../../utils/cn';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main className={cn(
        "pt-16 min-h-screen transition-all duration-300",
        sidebarOpen ? "lg:ml-64" : ""
      )}>
        <div className="px-4 py-6 lg:px-8">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}