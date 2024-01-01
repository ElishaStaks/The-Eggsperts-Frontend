import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants';

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link
            href="/"
            className="mb-10 text-2xl font-semibold text-yellow-50"
          >
            {/* <Image src="hilink-logo.svg" alt="logo" width={74} height={29} /> */}
            The Eggsperts
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-300">
                  {columns.links.map((link) => (
                    <li key={link.label}>
                      {link.href !== null ? (
                        <Link href={link.href}>{link.label}</Link>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    className="flex gap-4 md:flex-col lg:flex-row"
                    key={link.label}
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-700">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-300">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link.icon}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-200" />
        <p className="regular-14 w-full text-center text-gray-300">
          @ 2024 The Eggsperts | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
