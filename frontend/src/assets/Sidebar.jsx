import React from "react";
import {
  Upload,
  FileText,
  Clock,
  Heart,
  Share2,
  Trash2,
  File,
  Image,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";



const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { label: "All Documents", icon: FileText, count: 247, path: "/" },
    { label: "Recent", icon: Clock, count: 12, path: "/recent" },
    { label: "Favorites", icon: Heart, count: 8, path: "/favorites" },
    { label: "Shared", icon: Share2, count: 15, path: "/shared" },
    { label: "Trash", icon: Trash2, count: 3, path: "/trash" },
  ];
  

  const fileTypes = [
    { label: "Documents", icon: File, count: 156 },
    { label: "Images", icon: Image, count: 89 },
    { label: "Videos", icon: Image, count: 89 },
    { label: "Audio", icon: Image, count: 89 },

  ];

  return (
    <aside className="w-72 bg-white h-screen p-6 border-r">
      <h1 className="text-2xl font-bold text-green-600 mb-12">QuickDoc</h1>

      <button className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-b from-[#17A287] to-[#0F9171] hover:opacity-90 flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0L8 8m4-4l4 4"/>
  </svg>
  Upload Document
</button>

      <div className="mt-8">
        <p className="text-xs text-gray-400 font-semibold mb-4">QUICK ACCESS</p>
        
        <ul className="space-y-2">
        {menu.map((item) => (
  <Link key={item.label} to={item.path}>
    <li
      className={`flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer ${
        location.pathname === item.path
          ? "bg-gradient-to-b from-[#17A287] to-[#0F9171]"
          : "hover:bg-gray-100"
      } text-sm`}
    >
      <div
        className={`flex items-center gap-2 ${
          location.pathname === item.path
            ? "text-white font-semibold"
            : "text-gray-700"
        }`}
      >
        <item.icon size={16} />
        <span>{item.label}</span>
      </div>
      <span className="text-xs bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
        {item.count}
      </span>
    </li>
  </Link>
))}

</ul>

      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-400 font-semibold mb-4">FILE TYPES</p>
        <ul className="space-y-2">
          {fileTypes.map((item) => (
            <li
            key={item.label}
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
              item.active
                ? "bg-green-100 text-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            } text-sm`} 
          >
            <div className="flex items-center gap-2">
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
              {item.count}
            </span>
          </li>
          
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
