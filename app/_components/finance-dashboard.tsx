"use client";

import * as React from "react";
import { DateRange } from "react-day-picker";
import {
  DollarSignIcon,
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { SpendingChart } from "./spending-chart";
import { IncomeChart } from "./income-chart";

// Dummy data
const financialData = {
  totalIncome: 12500,
  totalExpenses: 7800,
  totalSavings: 4700,
  monthlyIncome: [
    { month: "Jan", amount: 10000 },
    { month: "Feb", amount: 11000 },
    { month: "Mar", amount: 9500 },
    { month: "Apr", amount: 10500 },
    { month: "May", amount: 12000 },
    { month: "Jun", amount: 12500 },
  ],
  spendingCategories: [
    { name: "Housing", value: 2500 },
    { name: "Food", value: 1200 },
    { name: "Transportation", value: 800 },
    { name: "Entertainment", value: 600 },
    { name: "Utilities", value: 500 },
    { name: "Other", value: 2200 },
  ],
};

export function FinanceDashboard() {
  const handleDateRangeChange = (range: DateRange | undefined) => {
    // In a real app, you would fetch data based on the date range
    console.log("Date range changed:", range);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Financial Overview
        </h2>
        <DateRangePicker onChange={handleDateRangeChange} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Income Card */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${financialData.totalIncome.toLocaleString()}
            </div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <TrendingUpIcon
                className="mr-1 h-3.5 w-3.5"
                style={{ color: "hsl(var(--emerald-500))" }}
              />
              <span
                style={{ color: "hsl(var(--emerald-500))" }}
                className="font-medium"
              >
                +12%
              </span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Expenses Card */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <WalletIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${financialData.totalExpenses.toLocaleString()}
            </div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <TrendingDownIcon
                className="mr-1 h-3.5 w-3.5"
                style={{ color: "hsl(var(--rose-500))" }}
              />
              <span
                style={{ color: "hsl(var(--rose-500))" }}
                className="font-medium"
              >
                +8%
              </span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Savings Card */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <PiggyBankIcon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${financialData.totalSavings.toLocaleString()}
            </div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <TrendingUpIcon
                className="mr-1 h-3.5 w-3.5"
                style={{ color: "hsl(var(--emerald-500))" }}
              />
              <span
                style={{ color: "hsl(var(--emerald-500))" }}
                className="font-medium"
              >
                +18%
              </span>
              <span className="ml-1">from last period</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Spending by Category */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Spending by Category
            </CardTitle>
            <CardDescription>Breakdown of your expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <SpendingChart data={financialData.spendingCategories} />
          </CardContent>
        </Card>

        {/* Income Trend */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Income Trend
            </CardTitle>
            <CardDescription>Monthly income over time</CardDescription>
          </CardHeader>
          <CardContent>
            <IncomeChart data={financialData.monthlyIncome} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
