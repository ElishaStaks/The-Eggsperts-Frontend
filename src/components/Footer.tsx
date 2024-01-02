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
        <div className="footer-wrapper">
          <Link href="/" className="logo-link mb-10">
            {/* <Image src="hilink-logo.svg" alt="logo" width={74} height={29} /> */}
            The Eggsperts
          </Link>
          <div className="footer-links-wrapper">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="footer-column-one-wrapper">
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
                  <div className="footer-column-two-wrapper" key={link.label}>
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-yellow-500">
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

        <div className="border border-gray-200" />
        <p className="footer-rights">
          @ 2024 The Eggsperts | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
