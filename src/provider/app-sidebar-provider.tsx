import AppSidebar from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

const AppSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="p-4 border-b">
          <SidebarTrigger />
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppSidebarProvider;
