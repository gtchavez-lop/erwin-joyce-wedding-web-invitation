import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Gallery from '../components/Gallery';

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
        {/* filter */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          className="absolute w-full h-full bg-base-100"
          transition={{ duration: 2, easings: [0.07, 0.85, 0.16, 0.94] }}
        />
        {/* background image */}
        <div className="absolute left-0 top-0 w-full h-full -z-10 opacity-70 flex justify-center lg:hidden">
          <motion.img
            src="/DSC_0311-7.jpg"
            className="object-cover w-full h-full "
            style={{ objectPosition: '47% 50%' }}
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full -z-10 opacity-70 hidden lg:flex justify-center ">
          <motion.img
            src="/DSC_0311-7.jpg"
            className="object-cover w-full h-full "
            style={{ objectPosition: '40% 50%' }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          className="text-5xl md:text4xl lg:text-8xl text-center px-10 my-5 z-[2] font-bold"
          style={{ fontFamily: '"Sacramento", cursive' }}
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
              className="absolute w-[600px] h-[600px] left-[-150px] top-[-150px] z-[1] rounded-full border-dashed border-secondary border-2"
            />
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 150, ease: 'linear', repeat: Infinity },
              }}
              className="absolute w-[800px] h-[800px] left-[-250px] top-[-250px] z-[1] rounded-full border-dashed border-primary border-2"
            />

            {/* title */}
            <section className="w-full flex flex-col mt-48 z-[10]">
              {/* title */}
              <div>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                  className="font-black text-6xl md:text-8xl lg:text-9xl"
                  style={{ fontFamily: "'Zilla Slab', cursive" }}
                >
                  06.08.2022
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="font-bold text-xl lg:text-2xl"
                  style={{ fontFamily: "'Charm', cursive" }}
                >
                  &#35;
                  <span
                    className="text-secondary font-black "
                    style={{ textShadow: '1px 1px 3px #DE5D83af ' }}
                  >
                    ERWIN
                  </span>
                  nersapusoni
                  <span
                    className="text-secondary font-black "
                    style={{ textShadow: '1px 1px 3px #DE5D83af ' }}
                  >
                    JOYCE
                  </span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.65 }}
                  className="text-xl mt-5 flex flex-col"
                >
                  <span className="font-bold">
                    &quot;I have found the One whom my soul Love&quot;
                  </span>
                  <span>Song of Solomon 3:4</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.85 }}
                  className="text-lg mt-52"
                >
                  Together with our families, we are inviting you to witness and
                  celebrate with us the most magical event of our life.
                </motion.p>
              </div>
            </section>

            {/* time and venue location */}
            <section className="w-full flex flex-col mb-52 mt-16 z-[10]">
              {/* quick glance */}
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 text-right">
                <div>
                  <p className="text-5xl font-bold">Church</p>
                  <div className="divider my-1 border-2 h-0 border-primary border-dashed" />
                  <p className="text-2xl font-bold text-secondary">
                    At 2 o&apos;clock in the afternoon
                  </p>
                  <p className="text-2xl font-bold ">
                    St. John Marie Vianney / Domus Dei
                  </p>
                  <p className="text-lg font-bold ">
                    Domus Dei Hospice Complex, Hda. Makina, Brgy. Silay City,
                    Negros Occidental
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold">Banquet</p>
                  <div className="divider my-1 border-2 h-0 border-primary border-dashed" />
                  <p className="text-2xl font-bold text-secondary">
                    To be Announced
                  </p>
                  <p className="text-2xl font-bold ">Domus Dei Event Hall</p>
                </div>
              </div>
            </section>

            {/* gallery */}
            <section className="w-full flex flex-col my-52 gap-10 z-[10]">
              <p className="text-3xl text-center underline underline-offset-2">
                Gallery
              </p>
              <p className="text-center">Tap the photo to enlarge</p>
              <Gallery />
            </section>

            {/* entourage */}
            <section
              id="guestlist"
              className="w-full flex flex-col my-52 gap-5 z-[10]"
            >
              <p className="text-4xl text-center underline underline-offset-2">
                Entourage
              </p>
              {/* Parents */}
              <p className="col-span-full text-3xl text-center mt-5">
                The Parents
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Groom&apos;s</p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Roberto Padilla
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Arcelie Padilla
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Bride&apos;s</p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Engr. Rogelio T. Genzola
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Delisa R. Genzola
                  </p>
                </div>
              </div>
              {/* Principal sponsors */}
              <p className="col-span-full text-3xl text-center mt-5">
                Principal Sponsors
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Godfathers</p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Felipe Nemenzo Jr.
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Virgilio Genzola
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Joel Genzola Sr.
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Lt. Zanzibar Abonado
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Melchor Jose Camon
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mr. Buddy Labaste
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Godmothers</p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Ma.Luz Alucema
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Engr. Gina Cahilig
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Dr. Dina Genzola
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Emelda Dela Peña
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Carmen Vargas
                  </p>
                  <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                    Mrs. Nelba Canoy
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7">
                {/* secondary Sponsors */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595; Secondary Sponsors &#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <div className="flex flex-col">
                        <p className="font-bold underline text-lg">
                          To light our path
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Mr. Mark Germo
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Ms. Sheena Bertolano
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold underline text-lg">
                          To cloth us one
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Mr. Rodolp Steve Genzola
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Ms. Marie Cris Johnson
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Ms. Mae Tamayo
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold underline text-lg">
                          To bind us together
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Mr. Raffy Dela Peña
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Ms. Rodelie Grace Genzola
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* best men */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Best Men&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Mr. Jimboi Emolaga
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Mr. John Michael Gagnao
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Mr. Christian Puntal
                      </p>
                    </div>
                  </div>
                </div>

                {/*  maids of honor  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Maids of Honor&#8595; </p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Ms. Norielyn Acogido{' '}
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Ms. Maeghann Marie Lacorte{' '}
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Ms. Shiela Sapio{' '}
                      </p>
                    </div>
                  </div>
                </div>

                {/*  Groomsmen  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Groomsmen&#8595; </p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Christian Ngitngit
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Drake Jetro Lacorte
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Mekko Ngitngit
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Stephen Samodio
                      </p>
                    </div>
                  </div>
                </div>

                {/*  Bridesmaids  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Bridesmaids&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Marianne Gwyneth Clarito
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Glea Canoy
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Isaiahnna Paula Genzola
                      </p>
                    </div>
                  </div>
                </div>

                {/*  Bearers  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Bearers&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <div className="flex flex-col">
                        <p className="font-bold underline text-xl">Ring</p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Alexus Uduel O. Genzola{' '}
                        </p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Liam Schuyler Gagnao
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold underline text-xl">Coin</p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Mark Ian Clarito
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold underline text-xl">Bible</p>
                        <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                          Gab Jelce Labaste
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  Flower Girls  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Flower Girls&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Asha Shirley Cariño
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Qxaz Padilla
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Chloe Madison Rella
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Eyn Padilla
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Rhyzagail Evangelista
                      </p>
                    </div>
                  </div>
                </div>

                {/*  Sign Holder  */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title text-3xl text-center mt-5 p-0">
                    <p>&#8595;Sign Holder&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 text-center gap-2">
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Sabina Hailegh Vargas
                      </p>
                      <p style={{ fontFamily: "'Zilla Slab', mono" }}>
                        Levy Adalynne Nemenzo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* table Arrangement */}
            <section className="w-full flex flex-col my-52 gap-10 z-[10]">
              <p className="text-3xl text-center flex flex-col items-center lg:flex-row lg:justify-center lg:gap-2 underline underline-offset-2">
                <span>Guest List </span>
                <span>and</span>
                <span>Table Arrangement</span>
              </p>
              {/* vip tables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                {/* VIP table 1 */}
                <div className="flex flex-col gap-2">
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="text-2xl font-bold"
                  >
                    VIP Table 1
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    GENZOLA, ROGELIO
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    GENZOLA, DELISA
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    CAHILIG, ENGR. GINA
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    VARGAS, CARMEN
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    ALUCEMA, MA. LUZ
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    DELA PEÑA, EMELDA
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    CANOY, NELBA
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    GENZOLA, DINA
                  </p>
                </div>
                {/* VIP table 2 */}
                <div className="flex flex-col gap-2">
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="text-2xl font-bold"
                  >
                    VIP Table 2
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    PADILLA, ROBERTO
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    PADILLA, ARCELIE
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    ABONADO, LT. ZANZIBAR
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    GENZOLA, VIRGILIO
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    GENZOLA, JOEL
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    CAMON, MELCHOR JOSE
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    NEMENZO, JR. FELIPE
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="capitalize"
                  >
                    SANCHEZ, DOMINGO
                  </p>
                </div>
              </div>

              {/* non vip table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
                {/* table 1 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 1&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          LACORTE, MAEGHANN MARIE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GAGNAO, JOHN MICHAEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          SAPIO, SHIELA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CLARITO, MARIANNE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DELA PEÑA, RAFFY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PUNTA,L CHRISTIAN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          TAMAYO, MAE MARIE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NGITNGIT, CHRISTIAN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table 2 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 2&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, RODELIE GRACE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          BERTOLANO, SHEENA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, RODOLP STEVE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, ISAIAHNNA PAULA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CANOY, GLEA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GERMO, MARK
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NGITNGIT, MEKKO
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          SAMODIO, STEPHEN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* table 3 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 3&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, EUGENE STEVE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, ROMELA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, ALEXUS UDUEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NEMENZO, EVELYN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          VARGAS, RJ
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          VARGAS, SABINA HAILEIGH
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          SANCHEZ, NENITA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DELA CRUZ, ELVIRA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 4 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 4&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PUNTAL, STEPHANIE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PADILLA, NORELYN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          EVANGELISTA, RAZEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          EVANGELISTA, RHYZAGAIL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PADILLA, MARK IAN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DELA PEÑA, FRENCE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PADILLA, EYN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PADILLA, QXAZ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 5 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 5&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, YASMIN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, MA. JOYA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, PABLITO
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA, ELMA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          LABASTE, LINA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          LABASTE, BUDDY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DIGNADICE, ERICA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          LABASTE, GAB JELCE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 6 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 6&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          BUSTILLO, CLARISSE ANNE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          SISON, ARANEE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CALAS, JAMES
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          MACADO, ERLINDA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PUNTAL, CHRISTOPHER
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          MARTIR, RESTY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          MARTIR, CHERRY MAE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          MACADO, RODULFO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 7 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 7&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NEMENZO, JENNIFER
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NEMENZO, GERALD
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NEMENZO, LEVY ADALYNE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NEMENZO, ABDIAS FELIP
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GAGNAO, LIAM SCHUYLER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 8 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 8&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PASOQUIN, MAGDALENA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CLAVERIA, MARITES{' '}
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          ABONADO, DIVINA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CAMON, LIZA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PADILLA, HERNAN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PUNTAL, ARLENE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NARRO, DIANNA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          HIGINO, BOYSEN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 9 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 9&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA VERGIL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENZOLA EDRIAN
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CANOY ELA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CARIÑO ASHA SHIRLEY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CANOY NHEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CAHILIG EDWINA
                        </p>
                        <p className="capitalize flex flex-col">
                          <span style={{ fontFamily: "'Zilla Slab', mono" }}>
                            - Videographer -
                          </span>
                          <span style={{ fontFamily: "'Zilla Slab', mono" }}>
                            CASTEL JR. ROBERT
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 10 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 10&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          BERMEL, ARNEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          RICO, JOHNY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          CUENCA, JORGE
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          BANTIGUE, ABEGAIL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          GENOBIS, RAMSEY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DELGADO, LYSSA
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          NGITNGIT, MICHAEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          MONTEMAYOR, JAMES{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table 11 */}
                <div tabIndex="0" className="collapse">
                  <div className="collapse-title p-0">
                    <p className="text-2xl font-bold">&#8595;Table 11&#8595;</p>
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-2">
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          ONGCOL, BOBBY
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          BALDADO, REYMAR
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          OBESO, JONEL
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          PASKIL, RG
                        </p>
                        <p
                          style={{ fontFamily: "'Zilla Slab', mono" }}
                          className="capitalize"
                        >
                          DELA FELIS, FEDERICO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* imoportant notes */}
            <section className="w-full flex flex-col my-16 gap-10 z-[10]">
              <p className="text-3xl text-center underline underline-offset-2">
                Important Note for Guests
              </p>

              <div className="card max-w-md self-center w-full">
                <div className="card-body text-center">
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="text-2xl font-bold"
                  >
                    Attire will be strictly formal
                  </p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="text-xl"
                  >
                    Must only wear lighter shades of green, mint green, baby
                    pink, powder pink, light pink, and peach
                  </p>
                </div>
              </div>
            </section>

            {/* romantic statement */}
            <section className="w-full flex flex-col my-16 mb-48 gap-10 z-[10] items-center">
              <p className="text-3xl text-center font-bold max-w-lg">
                As love is what the day all about. Your presence is one we can't
                celebrate without. But should you still believe that a gift is
                worth giving. A simple envelope for our future is a delightful
                blessing.
              </p>
            </section>

            {/* contact */}
            <section
              id="contact"
              className="w-full flex flex-col mb-52 gap-10 z-[10]"
            >
              <p className="text-3xl text-center underline underline-offset-2">
                Contact Us
              </p>

              <div className="card max-w-md self-center w-full">
                <div className="card-body text-center">
                  <p className="text-xl font-bold">Mrs. Romela Olave-Genzola</p>
                  <p className="font-bold">Wedding Coordinator</p>
                  <p
                    style={{ fontFamily: "'Zilla Slab', mono" }}
                    className="text-xl font-bold mt-5"
                  >
                    (Globe Telecom) +63 94 3679 3660
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
