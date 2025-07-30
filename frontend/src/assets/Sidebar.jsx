import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Dashboard', path: '/' },
  { name: 'Upload', path: '/upload' },
  { name: 'Trash', path: '/trash' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-full p-4">
      <h1 className="text-xl font-bold mb-6">QuickDoc</h1>
      <nav className="space-y-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
