import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { navBarItems } from '../../utils/constants';
import ConnectWalletButton from 'components/ConnectWalletButton';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { userAtom } from 'utils/atoms';

const Navbar = () => {
  const [visibile, setVisibile] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const router = useRouter();
  const [user] = useAtom(userAtom);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  const showNavBar = () => {
    setVisibile(true);
  };

  const hideNavBar = () => {
    setVisibile(false);
  };

  const navBarUserItems = navBarItems.filter(
    (l) => !l.login || l.login === !!user
  );

  return (
    <div className="h-20">
      <div
        className={`fixed z-[100] h-20 w-full  bg-primary-600 ${
          shadow ? ' shadow-md shadow-black' : ''
        } `}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-start px-2">
          {/* Only visible for screen below medium size (i.e.: mobile) */}
          <div onClick={showNavBar} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>

          <div className="shrink-0 grow text-center md:grow-0">
            <Link href="/">
              <a className="hover:border-0">
                <p className="text-md bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold leading-none text-transparent">
                  POK
                  <br />
                  NFTs
                </p>
                {/* <Image src="/logo.png" alt="logo" width="50" height="50" /> */}
              </a>
            </Link>
          </div>
          {/* hidden for screen size below medium (i.e.: mobile) 
            //TODO: move border styling out of individual lis
            */}
          <ul className="hidden md:flex md:flex-grow">
            {navBarUserItems.map((link) => (
              <li
                key={`navlink-${link.text}`}
                className="ml-10 text-sm uppercase"
              >
                <Link href={link.path}>
                  <a>{link.text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-evenly gap-4">
            {(router.asPath !== '/' || user) && <ConnectWalletButton />}
          </div>
        </div>

        {/* for small screens
        overlay shadowing the whole page when the menu is open  */}
        <div
          className={
            visibile ? 'fixed left-0 top-0 h-screen w-full bg-black/70' : ''
          }
        >
          <div
            className={`fixed top-0 h-screen w-[75%] bg-slate-900 p-10 duration-300 ease-in  sm:w-[60%] md:w-[45%]
            ${visibile ? 'left-0 ' : 'left-[-100%]'}`}
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <a>
                    <p className="text-md bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold leading-none text-transparent">
                      POK
                      <br />
                      NFTs
                    </p>
                  </a>
                </Link>
                <div
                  onClick={hideNavBar}
                  className="cursor-pointer rounded-full p-3"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <ul className="uppercase">
                {navBarUserItems.map((link) => (
                  <li
                    key={link.text}
                    onClick={hideNavBar}
                    className="py-4 text-sm"
                  >
                    <Link href={link.path}>
                      <a>{link.text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
