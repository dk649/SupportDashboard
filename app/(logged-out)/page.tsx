import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const LandinPage = () => {
  return (
    <>
      <h1 className="flex items-center justify-center gap-2">
        <PersonStandingIcon size={50} className="text-blue-500" /> Customer
        Support
      </h1>
      <p>Manage Customer Support Dashboard</p>

      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </>
  );
};

export default LandinPage;
