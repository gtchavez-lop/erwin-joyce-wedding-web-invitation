import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const FocusImage = ({ filename, closeHandler }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3, easings: [0.2, 0.85, 0.24, 0.96] },
        }}
        exit={{ opacity: 0 }}
        onClick={() => {
          closeHandler(false);
        }}
        className="w-screen h-screen z-[80] bg-primary bg-opacity-90 fixed top-0 left-0 flex flex-col justify-center items-center gap-2"
      >
        <motion.div
          className="relative w-[90%] h-[80%] lg:w-[30%] lg:h-[80%] object-contain rounded-box overflow-hidden z-20"
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, easings: [0.2, 0.85, 0.24, 0.96] },
          }}
          exit={{
            x: 20,
            opacity: 0,
            transition: { duration: 0.3, easings: [0.2, 0.85, 0.24, 0.96] },
          }}
        >
          <Image
            src={`/gallery/${filename}.jpg`}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <p className="">Tap to close</p>
      </motion.div>
    </>
  );
};

const Gallery = (e) => {
  const [selected, setSelected] = useState(false);
  const [imageShown, setImageShown] = useState(false);

  const [images_1, setImages_1] = useState([
    '2022-05-03 09.07.02',
    '2022-05-03 09.39.36_1',
    '2022-05-03 17.03.17',
    'DSC_0061',
    'DSC_0083',
    'DSC_0101',
    'DSC_0139-12',
    'DSC_0153-17',
    'DSC_0223-29',
  ]);
  const [images_2, setImages_2] = useState([
    'DSC_0408-29',
    'DSC_0272-40',
    'DSC_0278-43',
    'DSC_0285-45',
    'DSC_0288-46',
    'DSC_0320-13',
    'DSC_0322-14',
    '2022-05-03 17.11.58-7',
    'DSC_0345-20',
    'DSC_0429-31',
  ]);

  return (
    <>
      <AnimatePresence>
        {imageShown && (
          <FocusImage filename={selected} closeHandler={setImageShown} />
        )}
      </AnimatePresence>

      {/* gallery 1 */}
      <div className="flex justify-end">
        <motion.div className="carousel carousel-center rounded-box p-3 lg:p-6 bg-primary space-x-4 shadow w-[90%]">
          {images_1.map((image, index) => (
            <motion.div
              key={index}
              onClick={(e) => {
                setSelected(image);
                setImageShown(true);
              }}
              className="carousel-item rounded-box cursor-pointer overflow-hidden h-screen max-h-[200px] lg:max-h-[300px] w-3/4 lg:w-1/2 relative "
            >
              <Image
                src={`/gallery/${image}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* gallery 2 */}
      <div className="flex justify-start">
        <motion.div className="carousel carousel-center rounded-box p-3 lg:p-6 bg-primary space-x-4 shadow w-[90%]">
          {images_2.map((image, index) => (
            <motion.div
              key={index}
              onClick={(e) => {
                setSelected(image);
                setImageShown(true);
              }}
              className="carousel-item rounded-box cursor-pointer overflow-hidden h-screen max-h-[200px] lg:max-h-[300px] w-3/4 lg:w-1/2 relative "
            >
              <Image
                src={`/gallery/${image}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
