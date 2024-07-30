import { PersonStanding } from "lucide-react";
import React from "react";

const MenuTitle = () => {
  return (
    <h4 className="flex items-center">
      <PersonStanding size={40} className="text-primary" />
      Support
    </h4>
  );
};

export default MenuTitle;
