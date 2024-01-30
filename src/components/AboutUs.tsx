import Image from 'next/image';
import React from 'react';

import Button from './Button';

const AboutUs = () => {
  return (
    <section className="relative mx-auto bg-[#f5f5f5]">
      <div className="max-container padding-container py-[4rem] lg:py-[5.5rem]">
        <div className="w-full">
          <div className="relative z-10">
            <div className="max-w-[55rem]">
              <Image
                src="/eggs_title_icon.png"
                alt="Basket of farm fresh eggs"
                width={50}
                height={50}
                className="title-icon left-[5px]"
                loading="lazy"
              />
              <h1 className="about-title">
                Your Trusted Source for Fresh Eggs and Pure Honey
              </h1>
            </div>

            <div className="about-content-wrapper">
              <div className="about-image-wrapper">
                <Image
                  src="/assets/shop/stall_1.jpeg"
                  alt="Responsive no image"
                  className="rounded-md object-cover"
                  width={2000}
                  height={2000}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="max-w-none">
                  <div className="">
                    <div className="relative">
                      <Image
                        src="/eggs_title_icon.png"
                        alt="Basket of farm fresh eggs"
                        width={50}
                        height={50}
                        className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="bold-20 lg:bold-32 mb-[0.75rem] capitalize">
                      Who are we?
                    </h3>
                  </div>
                  <p className="regular-16 mb-[2.25rem] text-[#878069]">
                    Your go-to destination for high-quality eggs and honey in
                    Melbourne. Located at Victoria Market on Elizabeth Street,
                    we are proud to offer a wide range of fresh and delicious
                    products to our valued customers. With a passion for
                    providing the finest produce, we source our eggs and honey
                    from trusted local suppliers who share our commitment to
                    quality. Whether you are a home cook, a professional chef,
                    or simply an egg enthusiast, we have the perfect selection
                    to meet your needs. Visit us at The Eggsperts and experience
                    the taste of excellence.
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
  );
};

export default AboutUs;
