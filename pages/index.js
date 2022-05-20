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
              className="absolute w-[600px] h-[600px] left-[-150px] top-[-150px] -z-10 rounded-full border-dashed border-secondary border-2"
            />
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 150, ease: 'linear', repeat: Infinity },
              }}
              className="absolute w-[800px] h-[800px] left-[-250px] top-[-250px] -z-10 rounded-full border-dashed border-primary border-2"
            />

            {/* title */}
            <section className="w-full flex flex-col mt-48">
              {/* title */}
              <div>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
                  className="font-black text-6xl md:text-8xl lg:text-9xl"
                >
                  06.08.2022
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateX: 10 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
                  className="font-bold text-xl lg:text-2xl"
                >
                  &#35;
                  <span
                    className="text-secondary font-black "
                    style={{ textShadow: '1px 1px 4px #31312F50 ' }}
                  >
                    ERWIN
                  </span>
                  nersapusoni
                  <span
                    className="text-primary font-black "
                    style={{ textShadow: '1px 1px 3px #DE5D83af ' }}
                  >
                    JOYCE
                  </span>
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
              {/* quick glance */}
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 text-right">
                <div>
                  <p className="text-5xl font-bold">Church</p>
                  <div className="divider my-1 border-2 h-0 border-primary border-dashed" />
                  <p className="text-2xl font-bold text-secondary">2pm</p>
                  <p className="text-2xl font-bold text-primary">Somewhere</p>
                </div>
                <div>
                  <p className="text-5xl font-bold">Banquet</p>
                  <div className="divider my-1 border-2 h-0 border-primary border-dashed" />
                  <p className="text-2xl font-bold text-secondary">TDB</p>
                  <p className="text-2xl font-bold text-primary">Somewhere</p>
                </div>
              </div>
            </section>

            {/* gallery */}
            <section className="w-full flex flex-col my-52 gap-10">
              <p className="text-3xl text-center underline underline-offset-2">
                Gallery
              </p>
            </section>

            {/* entourage */}
            <section className="w-full flex flex-col my-52 gap-5">
              <p className="text-4xl text-center underline underline-offset-2">
                Entourage and Guest List
              </p>
              {/* Parents */}
              <p className="col-span-full text-3xl text-center mt-5">
                The Parents
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Groom&apos;s</p>
                  <p>Mr. Roberto Padilla</p>
                  <p>Mrs. Arcelie Padilla</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Bride&apos;s</p>
                  <p>Engr. Rogelio T. Genzola</p>
                  <p>Mrs. Delisa R. Genzola</p>
                </div>
              </div>
              {/* Principal sponsors */}
              <p className="col-span-full text-3xl text-center mt-5">
                Principal Sponsors
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Men</p>
                  <p>Mr. Felipe Nemenzo Jr.</p>
                  <p>Mr. Virgilio Genzola</p>
                  <p>Mr. Joel Genzola Sr.</p>
                  <p>Mr. Zanzibar Abonado</p>
                  <p>Mr. Melchor Jose Camon</p>
                  <p>Mr. Buddy Labaste</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-semibold">Women</p>
                  <p>Mrs. Ma.Luz Alucema</p>
                  <p>Engr. Gina Cahilig</p>
                  <p>Dr. Dina Genzola</p>
                  <p>Mrs. Emelda Dela Peña</p>
                  <p>Mrs. Carmen Vargas</p>
                  <p>Mrs. Nelba Canoy</p>
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
                        <p className="font-semibold">Candle</p>
                        <p>Mr. Mark Germo</p>
                        <p>Ms. Sheena Bertolano</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold">Veil</p>
                        <p>Mr. Rodolp Steve Genzola</p>
                        <p>Ms. Mae Tamayo</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold">Cord</p>
                        <p>Mr. Raffy Dela Peña</p>
                        <p>Ms. Rodelie Grace Genzola</p>
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
                      <p>Mr. Jimboi Emolaga</p>
                      <p>Mr. John Michael Gagnao</p>
                      <p>Mr. Christian Puntal</p>
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
                      <p>Ms. Norielyn Acogido </p>
                      <p>Ms. Maeghann Marie Lacorte </p>
                      <p>Ms. Shiela Sapio </p>
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
                      <p>Christian Ngitngit</p>
                      <p>Drake Jetro Lacorte</p>
                      <p>Mekko Ngitngit</p>
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
                      <p>Marianne Gwyneth Clarito</p>
                      <p>Glea Canoy</p>
                      <p>Isaiahnna Paula Genzola</p>
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
                        <p className="font-semibold">Ring Bearers</p>
                        <p>Alexus Uduel O. Genzola </p>
                        <p>Liam Schuyler Gagnao</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold">Coin Bearer</p>
                        <p>Mark Ian Clarito</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-semibold">Bible Bearer</p>
                        <p>Gab Jelce Labaste</p>
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
                      <p>Asha Shirley Cariño</p>
                      <p>Qxaz Padilla</p>
                      <p>Eyn Padilla</p>
                      <p>Rhyzagail Evangelista</p>
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
                      <p>Sabina Hailegh Vargas</p>
                      <p>Levy Adalynne Nemenzo</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* romantic statement */}
            <section className="w-full flex flex-col my-52 gap-10">
              <p className="text-3xl text-center underline underline-offset-2">
                Our testimony to our love
              </p>
            </section>

            {/* table Arrangement */}
            <section className="w-full flex flex-col my-52 gap-10">
              <p className="text-3xl text-center underline underline-offset-2">
                Table Arrangement
              </p>
              {/* vip tables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
                {/* VIP table 1 */}
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold">VIP Table 1</p>
                  <p className="capitalize">GENZOLA, ROGELIO</p>
                  <p className="capitalize">GENZOLA, DELISA</p>
                  <p className="capitalize">CAHILIG, ENGR. GINA</p>
                  <p className="capitalize">VARGAS, CARMEN</p>
                  <p className="capitalize">ALUCEMA, MA. LUZ</p>
                  <p className="capitalize">DELA PEÑA, EMELDA</p>
                  <p className="capitalize">CANOY, NELBA</p>
                  <p className="capitalize">GENZOLA, DINA</p>
                </div>
                {/* VIP table 2 */}
                <div className="flex flex-col gap-2">
                  <p className="text-2xl font-bold">VIP Table 2</p>
                  <p className="capitalize">PADILLA, ROBERTO</p>
                  <p className="capitalize">PADILLA, ARCELIE</p>
                  <p className="capitalize">ABONADO, LT. ZANZIBAR</p>
                  <p className="capitalize">GENZOLA, VIRGILIO</p>
                  <p className="capitalize">GENZOLA, JOEL</p>
                  <p className="capitalize">CAMON, MELCHOR JOSE</p>
                  <p className="capitalize">NEMENZO, JR. FELIPE</p>
                  <p className="capitalize">SANCHEZ, DOMINGO</p>
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
                        <p className="capitalize">LACORTE, MAEGHANN MARIE</p>
                        <p className="capitalize">GAGNAO, JOHN MICHAEL</p>
                        <p className="capitalize">SAPIO, SHIELA</p>
                        <p className="capitalize">CLARITO, MARIANNE</p>
                        <p className="capitalize">DELA PEÑA, RAFFY</p>
                        <p className="capitalize">PUNTA,L CHRISTIAN</p>
                        <p className="capitalize">TAMAYO, MAE MARIE</p>
                        <p className="capitalize">NGITNGIT, CHRISTIAN</p>
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
                        <p className="capitalize">GENZOLA, RODELIE GRACE</p>
                        <p className="capitalize">BERTOLANO, SHEENA</p>
                        <p className="capitalize">GENZOLA, RODOLP STEVE</p>
                        <p className="capitalize">GENZOLA, ISAIAHNNA PAULA</p>
                        <p className="capitalize">CANOY, GLEA</p>
                        <p className="capitalize">GERMO, MARK</p>
                        <p className="capitalize">NGITNGIT, MEKKO</p>
                        <p className="capitalize">SAMODIO, STEPHEN</p>
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
                        <p className="capitalize">GENZOLA, EUGENE STEVE</p>
                        <p className="capitalize">GENZOLA, ROMELA</p>
                        <p className="capitalize">GENZOLA, ALEXUS UDUEL</p>
                        <p className="capitalize">NEMENZO, EVELYN</p>
                        <p className="capitalize">VARGAS, RJ</p>
                        <p className="capitalize">VARGAS, SABINA HAILEIGH</p>
                        <p className="capitalize">SANCHEZ, NENITA</p>
                        <p className="capitalize">DELA CRUZ, ELVIRA</p>
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
                        <p className="capitalize">PUNTAL, STEPHANIE</p>
                        <p className="capitalize">PADILLA, NORELYN</p>
                        <p className="capitalize">EVANGELISTA, RAZEL</p>
                        <p className="capitalize">EVANGELISTA, RHYZAGAIL</p>
                        <p className="capitalize">PADILLA, MARK IAN</p>
                        <p className="capitalize">DELA PEÑA, FRENCE</p>
                        <p className="capitalize">PADILLA, EYN</p>
                        <p className="capitalize">PADILLA, QXAZ</p>
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
                        <p className="capitalize">GENZOLA, YASMIN</p>
                        <p className="capitalize">GENZOLA, MA. JOYA</p>
                        <p className="capitalize">GENZOLA, PABLITO</p>
                        <p className="capitalize">GENZOLA, ELMA</p>
                        <p className="capitalize">LABASTE, LINA</p>
                        <p className="capitalize">LABASTE, BUDDY</p>
                        <p className="capitalize">DIGNADICE, ERICA</p>
                        <p className="capitalize">LABASTE, GAB JELCE</p>
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
                        <p className="capitalize">BUSTILLO, CLARISSE ANNE</p>
                        <p className="capitalize">SISON, ARANEE</p>
                        <p className="capitalize">CALAS, JAMES</p>
                        <p className="capitalize">MACADO, ERLINDA</p>
                        <p className="capitalize">PUNTAL, CHRISTOPHER</p>
                        <p className="capitalize">MARTIR, RESTY</p>
                        <p className="capitalize">MARTIR, CHERRY MAE</p>
                        <p className="capitalize">MACADO, RODULFO</p>
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
                        <p className="capitalize">NEMENZO, JENNIFER</p>
                        <p className="capitalize">NEMENZO, GERALD</p>
                        <p className="capitalize">NEMENZO, LEVY ADALYNE</p>
                        <p className="capitalize">NEMENZO, ABDIAS FELIP</p>
                        <p className="capitalize">GAGNAO, LIAM SCHUYLER</p>
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
                        <p className="capitalize">PASOQUIN, MAGDALENA</p>
                        <p className="capitalize">CLAVERIA, MARITES </p>
                        <p className="capitalize">ABONADO, DIVINA</p>
                        <p className="capitalize">CAMON, LIZA</p>
                        <p className="capitalize">PADILLA, HERNAN</p>
                        <p className="capitalize">PUNTAL, ARLENE</p>
                        <p className="capitalize">NARRO, DIANNA</p>
                        <p className="capitalize">HIGINO, BOYSEN</p>
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
                        <p className="capitalize">GENZOLA VERGIL</p>
                        <p className="capitalize">GENZOLA EDRIAN</p>
                        <p className="capitalize">CANOY ELA</p>
                        <p className="capitalize">CARIÑO ASHA SHIRLEY</p>
                        <p className="capitalize">CANOY NHEL</p>
                        <p className="capitalize">CAHILIG EDWINA</p>
                        <p className="capitalize">
                          CASTEL JR. ROBERT (Videographer)
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
                        <p className="capitalize">BERMEL, ARNEL</p>
                        <p className="capitalize">RICO, JOHNY</p>
                        <p className="capitalize">CUENCA, JORGE</p>
                        <p className="capitalize">BANTIGUE, ABEGAIL</p>
                        <p className="capitalize">GENOBIS, RAMSEY</p>
                        <p className="capitalize">DELGADO, LYSSA</p>
                        <p className="capitalize">NGITNGIT, MICHAEL</p>
                        <p className="capitalize">MONTEMAYOR, JAMES </p>
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
                        <p className="capitalize">ONGCOL, BOBBY</p>
                        <p className="capitalize">BALDADO, REYMAR</p>
                        <p className="capitalize">OBESO, JONEL</p>
                        <p className="capitalize">PASKIL, RG</p>
                        <p className="capitalize">DELA FELIS, FEDERICO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* contact */}
            <section className="w-full flex flex-col my-52 gap-10">
              <p className="text-3xl text-center underline underline-offset-2">
                Contact Us
              </p>
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
