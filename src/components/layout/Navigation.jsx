import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Universities", href: "/universities" },
    // { name: "Scholars", href: "/scholars" },
    // { name: "Programs", href: "/programs" },
    // { name: "Books", href: "/books" },
    // { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#790005] z-50 border-b border-[#5c0004] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="relative flex items-center">
                <div>
                {/* <img src={samshikshaLogo} alt="Samshiksha Logo" className="h-16"/> */}
                <h1 className="text-white">Hello World</h1>
                </div>
               
                <div>
                </div>
          </div>
         
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  location === item.href
                    ? "text-white font-semibold border-b-2 border-white pb-1"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-[#5c0004] rounded-full"
              >
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-screen mt-1 bg-[#790005] border-none shadow-lg"
              sideOffset={16}
            >
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  asChild
                  className={`cursor-pointer text-white hover:bg-[#5c0004] ${
                    location === item.href ? "bg-[#5c0004]" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className="w-full px-4 py-2 block"
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
