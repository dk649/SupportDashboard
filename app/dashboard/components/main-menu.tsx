import React from "react";
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import LightDarkToggle from "@/components/ui/light-dark-toggle";
import { cn } from "@/lib/utils";

const MainMenu = ({ className }: { className?: string }) => {
  return (
    <nav className={cn(`bg-muted overflow-auto p-4 flex flex-col`, className)}>
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>

      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-primary">DK</AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
};

export default MainMenu;
