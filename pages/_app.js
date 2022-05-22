import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const RootApp = ({ Component, pageprops }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center overflow-x-hidden">
        <div className="max-w-6xl w-full px-10 relative">
          <Component {...pageprops} />
        </div>
      </div>

      {/* footer */}
      <div className="w-full justify-center flex">
        <footer className="max-w-6xl w-full px-10 flex flex-col">
          <div className="divider" />
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between px-5 items-center">
            <p>Erwin and Joyce Anne</p>
            <div>
              <p className="text-center lg:text-right">
                E-Invitation Design by Gerald Chavez
              </p>
              <p className="text-center lg:text-right">
                Content Written by Romela Olave-Genzola
              </p>
            </div>
          </div>
          <div className="divider" />
        </footer>
      </div>
    </>
  );
};

export default RootApp;
