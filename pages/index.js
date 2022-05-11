import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// landing animation
const Landing = (e) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed z-[99] left-0 top-0 w-full h-full bg-base-100 flex flex-col justify-center items-center"
      >
        {/* background image */}
        <div className="absolute left-0 top-0 w-full h-full -z-10 opacity-30 ">
          <motion.img
            src="https://images.unsplash.com/photo-1554488331-d1ff4a8160f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=100"
            className="object-cover  w-full h-full absolute"
            initial={{ clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
            transition={{ duration: 1, easings: [0.07, 0.85, 0.16, 0.94] }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1554488331-d1ff4a8160f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=100"
            className="object-cover  w-full h-full absolute"
            initial={{
              clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            }}
            animate={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
            }}
            transition={{ duration: 1, easings: [0.07, 0.85, 0.16, 0.94] }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-7xl lg:text-8xl text-center px-10 my-5"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          Erwin &amp; Joyce
        </motion.p>
      </motion.div>
    </>
  );
};

const Home = (e) => {
  const [loaded, setLoaded] = useState(false);

  // set loaded to true when the page is loaded at delay of 3s
  setTimeout(() => {
    setLoaded(true);
  }, 3000);

  return (
    <>
      <AnimatePresence>{!loaded && <Landing />}</AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <>
            {/* accents */}
            {/* circle dashed accent */}
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 100, ease: 'linear', repeat: Infinity },
              }}
              className="fixed w-[600px] h-[600px] left-[-150px] top-[-150px] -z-10 rounded-full border-dashed border-primary border-2"
            />

            {/* title */}
            <section className="w-full flex flex-col mt-48">
              {/* title */}
              <div>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                  className="font-black text-7xl lg:text-9xl"
                >
                  06.08.2022
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="font-bold text-xl lg:text-2xl"
                >
                  &#35;ERWINnersapusoniJOYCE
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.65 }}
                  className="text-lg mt-5"
                >
                  You are invited to witness the most amazing event of our life.
                </motion.p>
              </div>
            </section>

            {/* time and venue location */}
            <section className="w-full flex flex-col my-52">
              {/* quick links */}
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 text-right">
                <div>
                  <p className="text-5xl font-bold">Church</p>
                  <div className="divider my-1 outline-primary" />
                  <p className="text-2xl font-bold text-secondary">2pm</p>
                  <p className="text-2xl font-bold text-primary">Somewhere</p>
                </div>
                <div>
                  <p className="text-5xl font-bold">Banquet</p>
                  <div className="divider my-1 outline-primary" />
                  <p className="text-2xl font-bold text-secondary">TDB</p>
                  <p className="text-2xl font-bold text-primary">Somewhere</p>
                </div>
              </div>
            </section>

            {/* gallery */}
            <section className="w-full flex flex-col my-52">
              <p className="text-3xl">Gallery</p>
            </section>

            {/* romantic statement */}
            <section className="w-full flex flex-col my-52">
              <p className="text-3xl">Our testimony to our love</p>
            </section>

            {/* table Arrangement */}
            <section className="w-full flex flex-col my-52">
              <p className="text-3xl">Table Arrangement</p>
            </section>

            {/* contact */}
            <section className="w-full flex flex-col my-52">
              <p className="text-3xl">Contact Us</p>
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
