import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tf from "@/public/images/tf.jpg";
import WorkLocationTrends from "./employees/work-location-trends";

const EmployeesStatsPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">100</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserCheck2Icon />
              <div className="text-5xl font-bold">80</div>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-green-500 flex gap-2 items-center text-xs ">
              <BadgeCheckIcon />
              80% of employees are present
            </span>
          </CardFooter>
        </Card>
        <Card className="border-lime-700 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={tf} alt="employee of the month" />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Tiffany Flynn</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-green-800" />
            <span>Congradtulations, Tiffany!</span>
          </CardFooter>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStatsPage;
