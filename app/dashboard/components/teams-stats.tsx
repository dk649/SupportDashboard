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
  ListChecksIcon,
  PartyPopperIcon,
  PieChartIcon,
  StarIcon,
  UserCheck2Icon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cm from "@/public/images/cm.jpg";
import tf from "@/public/images/tf.jpg";
import rl from "@/public/images/rl.jpg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./teams/team-distribution-chart";
import SupportTicketResolved from "./teams/support-tickets-resolved";

const teamLeaders = [
  {
    number: 1,
    firstName: "Colin",
    lastName: "Murray",
    avatar: cm,
  },
  {
    number: 2,
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    number: 3,
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    number: 4,
    firstName: "Tiffany",
    lastName: "Flynn",
    avatar: tf,
  },
  {
    number: 5,
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    number: 6,
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    number: 7,
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    number: 8,
    firstName: "Ryan",
    lastName: "Lopez",
    avatar: rl,
  },
  {
    number: 9,
    firstName: "Jenny",
    lastName: "Jones",
  },
];

const TeamStatsPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/teams">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center mb-2">
              <span> Team leaders</span>
              <StarIcon className="text-yellow-400" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((leader) => (
              <TooltipProvider key={leader.number}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!leader.avatar && (
                        <Image
                          src={leader.avatar}
                          alt={`${leader.firstName} ${leader.lastName}`}
                        />
                      )}

                      <AvatarFallback>
                        {leader.firstName[0]}
                        {leader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {leader.firstName} {leader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center mb-2">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support ticket sesolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamStatsPage;
