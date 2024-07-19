import Link from "next/link";
import { useCallback } from "react";
import { usePathname } from 'next/navigation';


interface NavItemProps {
  href: string;
  isactive?: boolean;
  children: React.ReactNode;
  toggle?: any;
}

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <div
          className="sidebar-container fixed w-full h-full grid pt-[120px] left-0 z-10"
          style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
            backgroundColor: 'rgba(34, 33, 36, 1)',
            color: 'rgba(255, 255, 255, 1)',
            zIndex: 100,
            fontFamily: 'primary font sans-serif', 
          }}
        >
          <button className="absolute right-0 p-5" onClick={toggle}>
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          </button>

          <ul className="sidebar-nav text-center leading-relaxed text-xl">
              <NavItem href="/" isactive={pathname === '/'} toggle={toggle}>
                Home
              </NavItem>
              <NavItem href="/aboutus" isactive={pathname === '/aboutus'} toggle={toggle}>
               About author
              </NavItem>
              <NavItem href="/shop" isactive={pathname === '/shop'} toggle={toggle}>
                Shop
              </NavItem>
              <NavItem href="/contactus" isactive={pathname === '/contactus'} toggle={toggle}>
                Author contact
              </NavItem>
          </ul>
        </div>
      </div>
    </>
  );
};

function NavItem({ href, isactive, children, toggle }: NavItemProps) {
  return (
    <li>
      <Link href={href} onClick={toggle}>
        <p style={{ fontFamily: isactive ? 'primary font bold, sans-serif' : 'primary font, sans-serif'}}>{children}</p>
      </Link>
    </li>
  );
}


export default Sidebar;
