import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import EmployeesStatsPage from "./components/employees-stats";

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
      <TabsContent value="teams">Team Stats View</TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
