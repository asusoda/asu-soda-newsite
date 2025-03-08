import { useState } from "react";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@heroui/react";

function NavbarSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      name: "Info",
      id_href: "/#info",
      
    },
    {
      name: "Sponsors",
      id_href: "/#sponsors",
      
    },
    {
      name: "Team",
      id_href: "/#team",
      
    },
    {
      name: "Events",
      id_href: "https://asu.campuslabs.com/engage/organization/soda/events",
      
    },
    {
      name: "Leaderboard",
      id_href: "/leaderboard", // Updated to open in the same tab
      
    },
  ];

  // <nav className="navigation fade-in" style={{ marginTop: 0 }}>
  {
    /* Primary Navigation - Hidden on mobile */
  }
  /* <DesktopNav /> */
  {
    /*Mobile Navigation*/
  }
  {
    /* <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} /> */
  }
  {
    /*Mobile Navigation when opened*/
  }
  {
    /* {isOpen && <OpenedMobileNav setIsOpen={setIsOpen} />} */
  }

  // </nav>
  return (
    <Navbar
      className="bg-black bg-opacity-85 backdrop-blur-md z-20 dark"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex gap-4 items-center">
            <Image
              src="logo/Soda_Logo_Dark_Mode.svg"
              className="w-28 "
              alt="SoDA Logo"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((el) => (
          <NavbarItem key={el.name}>
            <Link href={el.id_href}  className="text-white">
              {el.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
       
        <NavbarItem>
          <Button as={Link} className="text-white bg-soda-red" href="https://asu.campuslabs.com/engage/organization/soda" variant="flat">
            SIGN UP
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-white w-full"
              href={item.id_href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarSection;
