import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  FileText,
  Settings,
  ChevronDown
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => 
      prev.includes(menu) 
        ? prev.filter(item => item !== menu)
        : [...prev, menu]
    );
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      title: 'Students',
      icon: Users,
      path: '/students',
      submenu: [
        { title: 'All Students', path: '/students' },
        { title: 'Add Student', path: '/students/new' },
        { title: 'Student Progress', path: '/students/progress' }
      ]
    },
    {
      title: 'Teachers',
      icon: GraduationCap,
      path: '/teachers',
      submenu: [
        { title: 'All Teachers', path: '/teachers' },
        { title: 'Add Teacher', path: '/teachers/new' }
      ]
    },
    {
      title: 'Courses',
      icon: BookOpen,
      path: '/courses',
      submenu: [
        { title: 'All Courses', path: '/courses' },
        { title: 'Add Course', path: '/courses/new' }
      ]
    },
    {
      title: 'Attendance',
      icon: Calendar,
      path: '/attendance'
    },
    {
      title: 'Reports',
      icon: FileText,
      path: '/reports'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings'
    }
  ];

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen w-64 transform bg-white transition-transform duration-300 ease-in-out border-r border-gray-200 pt-16",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="h-full overflow-y-auto bg-white">
        <ul className="space-y-1 p-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.title)}
                    className="flex w-full items-center justify-between rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      expandedMenus.includes(item.title) && "rotate-180"
                    )} />
                  </button>
                  {expandedMenus.includes(item.title) && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              cn(
                                "block rounded-lg p-2 text-gray-600 hover:bg-gray-100",
                                isActive && "bg-blue-50 text-blue-600"
                              )
                            }
                          >
                            {subItem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center rounded-lg p-2 text-gray-600 hover:bg-gray-100",
                      isActive && "bg-blue-50 text-blue-600"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.title}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}