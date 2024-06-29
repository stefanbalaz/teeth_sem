/* import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import { NavigationProps } from "../components/Navigation";

export default function Header({ navigationList = [] }: NavigationProps) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="custom-margin-b-third">
      <div className="flex items-center justify-between text-customGreenDark">
        <Logo />
        {navigationList.length === 0 && <div></div>}
        <div className="hidden lg:block">
          <Navigation navigationList={navigationList} />
        </div>
        <IconButton
          variant="text"
          color="white"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder="Placeholder text"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {openNav ? (
            <XMarkIcon
              className="h-6 w-6 text-customGreenDark"
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 text-customGreenDark"
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navigationList.length === 0 && <div></div>}
        <Navigation navigationList={navigationList} />
      </Collapse>
    </nav>
  );
}
 */

import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import { NavigationProps } from "../components/Navigation";

export default function Header({ navigationList = [] }: NavigationProps) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="custom-margin-b-third">
      <div className="flex items-center justify-between text-customGreenDark">
        <Logo />
        <div className="hidden lg:block">
          {navigationList.length > 0 ? (
            <Navigation navigationList={navigationList} />
          ) : (
            <div></div>
          )}
        </div>
        <IconButton
          variant="text"
          color="white"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder="Placeholder text"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {openNav ? (
            <XMarkIcon
              className="h-6 w-6 text-customGreenDark"
              strokeWidth={2}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 text-customGreenDark"
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {navigationList.length > 0 ? (
          <Navigation navigationList={navigationList} />
        ) : (
          <div></div>
        )}
      </Collapse>
    </nav>
  );
}
