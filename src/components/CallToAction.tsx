import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from './Button';

const CallToAction = () => {
  return (
    <section className="relative mx-auto">
      <div className="max-container padding-container py-[8rem]">
        <div className="w-full max-w-[81.25rem]">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="cta-wrapper">
              <Link href="/#contact" className="cta-link-wrapper">
                <Image
                  src="/chicken_cta.jpg"
                  alt="Responsive no image"
                  className="rounded-full"
                  width={1000}
                  height={1000}
                />
              </Link>
              <div className="cta-content-wrapper">
                <div className="pb-5">
                  <div className="pb-3">
                    <h2 className="cta-title">
                      Curious to explore farm fresh goodness?
                    </h2>
                  </div>
                  <p className="cta-description">
                    Contact us for more information on prices and products!
                  </p>
                </div>
                <Button
                  className="w-button"
                  href="/#contact"
                  type="button"
                  title="LETS TALK ->"
                  variant="btn_yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
