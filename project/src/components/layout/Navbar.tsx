import { Menu, Bell, User, LogOut } from 'lucide-react';
import Button from '../common/Button';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={onMenuClick}
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <span className="text-xl font-semibold flex items-center lg:ml-2.5">
                <span className="text-blue-600">Uni</span>Grade
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="relative mr-4"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                4
              </span>
            </Button>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center text-gray-500 hover:text-gray-900 mr-2"
              >
                <User className="w-5 h-5 mr-1" />
                <span className="hidden md:inline-block">Profile</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5 mr-1" />
                <span className="hidden md:inline-block">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}