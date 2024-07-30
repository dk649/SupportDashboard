"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href: string;
};

const MenuItem = ({ children, href }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      className={cn(
        "block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-forground hover:text-foreground p-2",
        isActive &&
          "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
