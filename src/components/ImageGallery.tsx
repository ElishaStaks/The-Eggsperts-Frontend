import Image from 'next/image';

import { IMAGES_GALLERY } from '../constants';

type ImageItem = {
  itemKey: string;
  image: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ImageItem = ({ itemKey, image }: ImageItem) => {
  return (
    <li className="mx-2 my-4">
      <div className="image-item-wrapper">
        <div className="relative h-48">
          <Image
            src={image}
            alt={`Responsive image + ${itemKey}`}
            fill
            className="rounded-t-lg object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
          />
        </div>
      </div>
    </li>
  );
};

const ImageGallery = () => {
  return (
    <section className="image-gallery-section-wrapper">
      <div className="max-container padding-container relative w-full justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[100%]">
          <ul className="image-gallery-items-wrapper">
            {IMAGES_GALLERY.map((item, index) => (
              <ImageItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                itemKey={item.itemKey}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
