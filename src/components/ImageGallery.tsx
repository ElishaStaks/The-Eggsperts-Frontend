import Image from 'next/image';

import { IMAGES_GALLERY } from '../constants';

type ImageItem = {
  key: string;
  image: string;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ImageItem = ({ key, image }: ImageItem) => {
  return (
    <li className="mx-2 my-4">
      <div className="image-item-wrapper">
        <div className="relative h-48">
          <Image
            src={image}
            alt={`Responsive image + ${key}`}
            fill
            className="rounded-t-lg object-cover"
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
            {IMAGES_GALLERY.map((item) => (
              <ImageItem key={item.key} image={item.image} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;