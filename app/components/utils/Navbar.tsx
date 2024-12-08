"use client"
// import Layout from "../components/utils/layout";
import Link from "next/link";
import { Button } from "../../components/ui/button";

interface navItem {
    name: string;
    link: string;
  }
  
  const Navbar = () => {
    const navItems: navItem[] = [
      { name: "Portfolio", link: "/portfolio" },
      { name: "Swap", link: "/swap" },
    ];
    return (
        <div className="h-screen w-[72vw] mx-auto pt-4">
        <header className="flex items-center justify-between bg-background py-1 shadow-sm">
          <div className="flex items-center gap-6">
            <Link href="/homePage" className="flex items-center gap-2">
              <span className="font-bold text-lg font-display">Dashboard</span>
            </Link>
            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Button variant="linkHover2" size="sm">
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          <Button size={"icon"} variant={"ghost"}>
            <h1 className="w-6 h-6" />
          </Button>
        </header>
      </div>
    );
  };
  
  export default Navbar;
  