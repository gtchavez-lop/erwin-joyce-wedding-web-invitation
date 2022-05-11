import '../styles/globals.css';
import Head from 'next/head';

const RootApp = ({ Component, pageprops }) => {
  return (
    <>
      <div className="grid place-items-center select-none relative">
        <div className="max-w-6xl w-full px-10 relative">
          <Component {...pageprops} />
        </div>

        {/* footer */}
        <footer className="max-w-6xl w-full px-10 flex flex-col ">
          <div className="divider" />
          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between px-5">
            <p>Erwin and Joyce Anne</p>
            <p>
              Designed and Written by Gerald Chavez and Romela Olave-Genzola
            </p>
          </div>
          <div className="divider" />
        </footer>
      </div>
    </>
  );
};

export default RootApp;
