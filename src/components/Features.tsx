import Image from 'next/image';

export type FeatureItem = {
  title: string;
  icon: string;
  alt: string;
  description: string;
};

const FeatureItemComponent: React.FC<FeatureItem> = ({
  title,
  icon,
  alt,
  description,
}) => {
  return (
    <li className="feature-list-item">
      <div className="feature-item-image-wrapper">
        <Image src={icon} alt={alt} width={40} height={40} loading="lazy" />
      </div>
      <h2 className="feature-item-title">{title}</h2>
      <p className="feature-item-description">{description}</p>
    </li>
  );
};

interface FeaturesProps {
  featureItems: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ featureItems }) => {
  return (
    <section className="features-section-wrapper">
      <div className="max-container padding-container relative w-full justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="features-list-item-wrapper">
            {featureItems.map((feature, index) => (
              <FeatureItemComponent
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={feature.title}
                icon={feature.icon}
                alt={feature.alt}
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
