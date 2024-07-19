import React from "react";
import { useRouter } from 'next/router';
import Logo from "./Logo";
import { commonMethod } from '../../../utils/Utility';
import styles from './Navbar.module.css';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const router = useRouter();
  const isMobile = commonMethod();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo isMobile={isMobile}/>
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className="hidden md:flex gap-x-16">
            <NavItem path="/" isactive={router.pathname === '/'}>
              Home
            </NavItem>
            <NavItem path="/aboutus" isactive={router.pathname === '/aboutus'}>
              About author
            </NavItem>
            <NavItem path="/shop" isactive={router.pathname === '/shop'}>
              Shop
            </NavItem>
            <NavItem path="/contactus" isactive={router.pathname === '/contactus'}>
              Author contact
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  path: string;
  isactive?: boolean;
  children: React.ReactNode;
}

function NavItem({ path, isactive, children }: NavItemProps) {
  const router = useRouter();
  
  return (
    <li>
      <button onClick={() => router.push(path)} style={{ fontFamily: isactive ? 'primary font bold, sans-serif' : 'primary font, sans-serif'}}>
        {children}
      </button>
    </li>
  );
}

export default Navbar;
