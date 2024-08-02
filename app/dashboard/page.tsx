import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import EmployeesStatsPage from "./components/employees-stats";
import TeamStatsPage from "./components/teams-stats";

const DashboardPage = () => {
  return (
    <Tabs>
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStatsPage />
      </TabsContent>
      <TabsContent value="teams">
        <TeamStatsPage />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
