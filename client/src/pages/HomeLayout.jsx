import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 h-screen overflow-hidden">
        <SidebarTrigger />
        <div className="h-full overflow-auto">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default HomeLayout;
