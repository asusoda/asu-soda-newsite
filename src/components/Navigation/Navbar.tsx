import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
      name: "Leaderboard",
      id_href: "/leaderboard",
      
    },
  ];

  const renderNavLink = (item: { name: string; id_href: string }) => {
    // Use Link for internal routes without hash
    if (item.id_href.startsWith('/') && !item.id_href.includes('#')) {
      return (
        <Link key={item.name} to={item.id_href} className="text-white">
          {item.name}
        </Link>
      );
    }
    // Use anchor tags for hash links and external links
    return (
      <a key={item.name} href={item.id_href} className="text-white">
        {item.name}
      </a>
    );
  };

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
                {renderNavLink(item)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/" className="flex gap-4 items-center">
          <img
            src="/logo/Soda_Logo_Dark_Mode.svg"
            className="w-28"
            alt="SoDA Logo"
          />
        </Link>
      </div>

      <div className="hidden sm:flex gap-4">
        {menuItems.map(renderNavLink)}
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
