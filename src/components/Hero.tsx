import Image from 'next/image';

import Button from './Button';

const Hero = () => {
  return (
    <section className="hero-section-wrapper">
      <div>
        <Image
          src="/hero.webp"
          alt="Big breakfast meal with 2 cooked farm fresh eggs from The"
          className="object-cover"
          fill
          loading="eager"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="max-container padding-container relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/eggs_title_icon.png"
          alt="Basket of farm fresh eggs"
          width={50}
          height={50}
          className="absolute top-[-30px] w-10 lg:w-[50px]"
          loading="eager"
        />
        <h1 className="hero-title">Taste Farm Fresh</h1>
        <h1 className="hero-title">Goodness</h1>
        <p className="hero-description">
          Indulge in the finest eggs and honey from The Eggsperts at Victoria
          Market.
        </p>
        <div className="hero-button-wrapper">
          <Button
            className="w-button"
            href="/products"
            type="button"
            title="Explore Products"
            variant="btn_yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
