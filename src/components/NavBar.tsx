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
        <Link href="/" className="logo-link">
          The Eggsperts
        </Link>

        {/* Display the menu icon on screens smaller than lg */}
        <Image
          className="nav-menu-icon"
          src="/assets/svgs/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={handleMenuClick}
        />

        {/* On larger screens (lg and xl), display the regular navigation links and shop now button */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="nav-link">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="nav-button-wrapper">
          <Button
            className="w-button"
            href="/products"
            type="button"
            title="Shop Now"
            variant="btn_dark_green"
          />
        </div>
      </div>

      {/* Responsive navigation menu */}
      {isMenuOpen && (
        <div className="max-container padding-container nav-menu-mobile">
          <ul className="nav-link-mobile-wrapper">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                onClick={handleMenuClick}
                href={link.href}
                className="nav-link-mobile"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="nav-menu-mobile-buttons-wrapper">
            <Button
              className="w-button mt-4"
              href="/products"
              type="button"
              title="Shop Now"
              variant="btn_yellow"
              onClick={handleMenuClick}
            />
            <Button
              className="w-button mt-4"
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
