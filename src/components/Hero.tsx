import Image from 'next/image';

import Button from './Button';

const Hero = () => {
  return (
    <section className="hero-section-wrapper">
      <div>
        <Image
          src="/hero_cooked_eggs.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="max-container padding-container relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/eggs_title_icon.png"
          alt="eggs"
          width={50}
          height={50}
          className="title-icon"
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