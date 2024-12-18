import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center underline underline-offset-4 text-[#00BF63]"
              : "flex items-center"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center underline underline-offset-4 text-[#00BF63]"
              : "flex items-center"
          }
        >
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center underline underline-offset-4 text-[#00BF63]"
              : "flex items-center"
          }
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center underline underline-offset-4 text-[#00BF63]"
              : "flex items-center"
          }
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-0 lg:py-0 shadow-none ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <div className="mr-4 cursor-pointer py-1.5 font-medium">
              <div className="flex items-center">
                <img className="w-20" src={logo} alt="logo" />
                <p className="text-xl font-bold text-[#00BF63]">Sunnah Store</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to={"/auth/login"}>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link to={"/auth/login"}>
          <div className="flex items-center gap-x-1">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Login</span>
              </Button>
          </div>
          </Link>
        </MobileNav>
      </Navbar>
    </div>
  );
}
