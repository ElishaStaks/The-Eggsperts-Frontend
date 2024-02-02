/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import React from 'react';

import { MISSION_VALUES } from '@/constants';

type MissionItem = {
  title: string;
  icon: string;
  alt: string;
  description: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const MissionItem = ({ title, icon, alt, description }: MissionItem) => {
  return (
    <div className="flex max-w-[34rem] flex-col items-start lg:max-w-[30rem] lg:flex-row">
      <div className="flex items-center justify-center">
        <Image
          src={icon}
          alt={alt}
          width={40} // default width for smaller screens
          height={40} // default height for smaller screens
          className="lg:w-[300px]"
        />
      </div>
      <div className="mt-[1.5rem] lg:ml-[1.5rem] lg:mt-0">
        <h3 className="bold-20 lg:bold-32 mb-[0.75rem] capitalize">{title}:</h3>
        <p className="regular-16 leading-7">{description}</p>
      </div>
    </div>
  );
};

const Mission = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-[#e3deca] py-24 lg:pb-[8rem] lg:pt-[9rem]">
      <div className="max-container padding-container relative w-full justify-center">
        <div className="grid justify-between gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          <div className="relative flex flex-col items-start">
            <div className="sticky z-10 flex max-w-[440px] flex-col items-start">
              <Image
                src="/eggs_title_icon.png"
                alt="Basket of farm fresh eggs"
                width={50}
                height={50}
                className="title-icon left-[5px]"
              />
              <h2 className="bold-40 lg:bold-64 mb-[1rem]">Our Misson</h2>
              <p className="max-w-[35rem] leading-7">
                {' '}
                At The Eggsperts, our mission is clear — to provide our
                customers with the finest quality eggs and honey, sourced from
                local farmers who share our commitment to excellence. We believe
                in delivering products that not only meet but exceed the highest
                standards of freshness and purity.
              </p>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-x-16 gap-y-8 justify-self-end lg:flex lg:flex-col lg:gap-y-16">
            {MISSION_VALUES.map((mission) => (
              <MissionItem
                key={mission.title}
                title={mission.title}
                icon={mission.icon}
                alt={mission.alt}
                description={mission.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
