import React from 'react';

const Breadcrumb = ({ links = [] }) => {
  return (
    <nav className="text-sm text-gray-600">
      <ul className="flex">
        {links.map((link, index) => (
          <li key={link.path}>
            <a href={link.path} className="text-blue-600 hover:underline">
              {link.label}
            </a>
            {index < links.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
