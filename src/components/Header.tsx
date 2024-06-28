import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import Logo from "./Logo";

export default function Header() {
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
        <div className="hidden lg:block">
          <Navigation />
        </div>
        <IconButton
          variant="text"
          /* size="md" */
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
        <Navigation />
      </Collapse>
    </nav>
  );
}
