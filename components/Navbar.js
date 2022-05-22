import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiFillPhone, AiOutlineMenu } from 'react-icons/ai';

const Navbar = (e) => {
  const [thresholdReached, setThresholdReached] = useState(false);
  const [_scrollY, setScrollY] = useState(0);

  // listen to scroll and set the state of scrollYPos
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollY(window.scrollY);
      setThresholdReached(window.scrollY > 100);
    });

    if (thresholdReached) {
      console.log('threshold reached');
    }
  }, []);

  return (
    <>
      <nav
        className={`${
          thresholdReached ? 'py-5 bg-primary' : 'py-8 bg-transparent'
        } flex justify-center fixed top-0 left-0 w-full z-50 transition-all`}
      >
        <div className="w-full max-w-6xl px-10 flex gap-2 justify-between items-center">
          <p className="font-bold md:hidden">E &amp; JA</p>
          <p className="font-bold text-lg hidden md:block">
            Erwin &amp; Joyce Anne
          </p>
          {/* links */}
          <ul className="menu menu-horizontal text-lg hidden md:inline-flex">
            <Link href="#contact">
              <li>
                <a>Contact Us</a>
              </li>
            </Link>
            <Link href="#guestlist">
              <li>
                <a>Guest List</a>
              </li>
            </Link>
          </ul>

          <ul className="menu menu-horizontal text-lg md:hidden">
            <Link href="#contact">
              <li>
                <a>
                  <AiFillPhone size={20} />
                </a>
              </li>
            </Link>
            <Link href="#guestlist">
              <li>
                <a>
                  <AiOutlineMenu size={20} />
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
