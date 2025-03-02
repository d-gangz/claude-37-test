"use server";

import { ThemeToggle } from "@/components/utilities/theme-toggle";
import { FinanceDashboard } from "./_components/finance-dashboard";

export default async function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-background text-foreground">
      <div className="absolute top-4 right-4 z-50 p-2 bg-background/50 backdrop-blur-sm rounded-md">
        <ThemeToggle />
      </div>

      <main className="max-w-7xl mx-auto mt-12">
        <FinanceDashboard />
      </main>
    </div>
  );
}
