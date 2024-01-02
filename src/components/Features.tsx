import Image from 'next/image';

import { FEATURES } from '../constants';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="feature-list-item">
      <div className="feature-item-image-wrapper">
        <Image src={icon} alt="map" width={40} height={40} />
      </div>
      <h2 className="feature-item-title">{title}</h2>
      <p className="feature-item-description">{description}</p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="features-section-wrapper">
      <div className="max-container padding-container relative w-full justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="features-list-item-wrapper">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
