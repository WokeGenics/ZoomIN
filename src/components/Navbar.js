'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  {
    name: 'Photobooks',
    sub: ['Hardcover', 'Softcover', 'Mini']
  },
  {
    name: 'Framed Prints',
    sub: ['Classic Frame', 'Canvas Frame']
  },
  {
    name: 'Calendars',
    sub: ['Wall Calendar', 'Desk Calendar']
  },
  {
    name: 'Kids',
    sub: ['Storybooks', 'Games']
  },
  {
    name: 'Décor',
    sub: ['Wall Art', 'Canvas']
  },
  {
    name: 'Gifts',
    sub: ['Personalized', 'Occasion Based']
  },
  {
    name: 'Card Stock Prints',
    sub: ['Matte', 'Glossy']
  },
  {
    name: 'Photo Prints',
    sub: ['4x6', '5x7']
  },
  {
    name: 'Bags and Pouches',
    sub: ['Tote Bags', 'Zipper Pouches']
  },
  {
    name: 'Stationery',
    sub: ['Notebooks', 'Stickers']
  },
  {
    name: 'Accessories',
    sub: ['Keychains', 'Magnets']
  },
  {
    name: 'Chocolates',
    sub: ['Dark', 'Milk']
  }
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* Promo banner */}
      <div className="bg-[#2e4369] text-white text-sm text-center py-1">
        FLAT ₹200 off on Photobooks! Use code <strong>BOOKS139</strong>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500 whitespace-nowrap">
            zoomin
          </div>

          {/* Auth Links */}
          <div className="text-sm space-x-2 whitespace-nowrap">
            <Link href="/register" className="text-orange-500 hover:underline">Register</Link>
            <span>or</span>
            <Link href="/login" className="text-orange-500 hover:underline">Login</Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 justify-center text-sm font-medium">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="cursor-pointer hover:text-orange-500 whitespace-nowrap">
                {item.name}
              </span>

              {item.sub && hovered === index && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-md border rounded z-50 min-w-max">
                  {item.sub.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`/category/${item.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 whitespace-nowrap"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
