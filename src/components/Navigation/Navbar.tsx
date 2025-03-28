import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <nav className="bg-black bg-opacity-85 backdrop-blur-md z-20 dark flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <DropdownMenu onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
              {isMenuOpen ? "✕" : "☰"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark bg-black">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <a href={item.id_href} className="text-white w-full">
                  {item.name}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <a href="/" className="flex gap-4 items-center">
          <img
            src="/logo/Soda_Logo_Dark_Mode.svg"
            className="w-28"
            alt="SoDA Logo"
          />
        </a>
      </div>

      <div className="hidden sm:flex gap-4">
        {menuItems.map((el) => (
          <a key={el.name} href={el.id_href} className="text-white">
            {el.name}
          </a>
        ))}
      </div>

      <div>
        <Button asChild className="text-white bg-soda-red">
          <a href="https://asu.campuslabs.com/engage/organization/soda">
            SIGN UP
          </a>
        </Button>
      </div>
    </nav>
  );
}

export default NavbarSection;
