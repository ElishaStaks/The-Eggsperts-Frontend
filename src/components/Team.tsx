import Image from 'next/image';
import React from 'react';

import { TEAM } from '@/constants';

type Person = {
  name: string;
  image: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Person = ({ name, image }: Person) => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative mb-[1.5rem] w-full overflow-hidden rounded-md pb-[77%]">
        <Image
          src={image}
          alt="map"
          width={2000} // default width for smaller screens
          height={2000} // default height for smaller screens
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="text-left">
        <h3 className="text-[#878069]">{name}</h3>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="relative bg-[#e3deca]">
      <div className="max-container padding-container py-[4rem] md:pb-[8.125rem] md:pt-[5rem]">
        <div className="w-full max-w-[86rem]">
          <div className="mx-auto flex flex-col items-center justify-center text-center">
            <div className="max-w-[38rem]">
              <Image
                src="/eggs_title_icon.png"
                alt="eggs"
                width={50}
                height={50}
                className="absolute top-[30px] w-10 lg:w-[50px]"
              />
              <h2 className="bold-40 lg:bold-64 mb-[0.75rem]">
                Meet The Owners
              </h2>
              <div className="relative mt-[4rem] flex w-full flex-col flex-wrap justify-between gap-y-16 md:mt-[7rem] md:flex-row">
                {TEAM.map((person) => (
                  <Person
                    key={person.name}
                    name={person.name}
                    image={person.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
