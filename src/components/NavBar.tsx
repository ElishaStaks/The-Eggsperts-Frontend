'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { NAV_LINKS } from '../constants';
import { useBodyOverflow } from '../hooks/BodyOverflow';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useBodyOverflow(isMenuOpen);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-30 py-8">
      <div className="max-container flexBetween padding-container">
        <Link href="/" className="text-2xl font-semibold text-yellow-500">
          The Eggsperts
        </Link>

        {/* Display the menu icon on screens smaller than lg */}
        <Image
          className="inline-block cursor-pointer lg:hidden"
          src="/assets/svgs/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={handleMenuClick}
        />

        {/* On larger screens (lg and xl), display the regular navigation links and shop now button */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-500 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            className="transition-transform hover:scale-105"
            href="/products"
            type="button"
            title="Shop Now"
            variant="btn_dark_green"
          />
        </div>
      </div>

      {/* Responsive navigation menu */}
      {isMenuOpen && (
        <div
          className="max-container padding-container fixed inset-x-0 bottom-0 top-12 z-50 mt-10 
                bg-white lg:hidden"
        >
          <ul className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li
                className="w-full border-b border-solid border-gray-300 
                            pb-1.5 text-lg text-gray-500 hover:font-bold"
                key={link.key}
              >
                <Link
                  onClick={handleMenuClick}
                  href={link.href}
                  className="cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-1 justify-center gap-3">
            <Button
              className="mt-4 transition-transform hover:scale-105"
              href="/products"
              type="button"
              title="Shop Now"
              variant="btn_yellow"
              onClick={handleMenuClick}
            />
            <Button
              className="mt-4 transition-transform hover:scale-105"
              type="button"
              title="Cancel"
              variant="btn_dark_green"
              onClick={handleMenuClick}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
