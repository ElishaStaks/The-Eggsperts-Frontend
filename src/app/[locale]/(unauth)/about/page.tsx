import Image from 'next/image';
import React from 'react';

import Button from '@/components/Button';
import CallToAction from '@/components/CallToAction';

const page = () => {
  return (
    <>
      <section className="relative mx-auto">
        <div className="max-container padding-container pt-[3rem] lg:pt-[5.5rem]">
          <div className="w-full">
            <div className="relative z-10">
              <div className="max-w-[55rem]">
                <Image
                  src="/eggs_title_icon.png"
                  alt="eggs"
                  width={50}
                  height={50}
                  className="title-icon left-[5px]"
                />
                <h1 className="about-title">
                  A team dedicated to offerinng the best farm fresh products
                </h1>
              </div>

              <div className="about-content-wrapper">
                <div className="about-image-wrapper">
                  <Image
                    src="/assets/shop/stall_1.jpeg"
                    alt="Responsive no image"
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="max-w-none md:max-w-[26.25rem]">
                    <div className="pb-2">
                      <div className="relative">
                        <Image
                          src="/eggs_title_icon.png"
                          alt="eggs"
                          width={50}
                          height={50}
                          className="title-icon"
                        />
                      </div>
                      <h3 className="bold-40 text-2xl font-medium leading-tight md:text-5xl">
                        The Eggsperts
                      </h3>
                    </div>
                    <p className="mb-[2.25rem] text-gray-500">
                      Your go-to destination for high-quality eggs and honey in
                      Melbourne. Located at Victoria Market on Elizabeth Street,
                      we are proud to offer a wide range of fresh and delicious
                      products to our valued customers. With a passion for
                      providing the finest produce, we source our eggs and honey
                      from trusted local suppliers who share our commitment to
                      quality. Whether you are a home cook, a professional chef,
                      or simply an egg enthusiast, we have the perfect selection
                      to meet your needs. Visit us at The Eggsperts and
                      experience the taste of excellence.
                    </p>
                    <Button
                      className="w-button"
                      href="/products"
                      type="button"
                      title="EXPLORE PRODUCTS"
                      variant="btn_yellow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default page;
