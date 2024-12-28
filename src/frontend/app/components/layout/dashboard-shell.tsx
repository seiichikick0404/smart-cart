'use client';

import Link from 'next/link';
import { ChefHat } from 'lucide-react';
import { SidebarNav } from './sidebar-nav';
import { ScrollArea } from '../ui/scroll-area';
import { SiteHeader } from './header/site-header';

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr]">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="px-4 py-6 lg:px-6 lg:py-8">
            <SidebarNav />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <div className="container px-4 py-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}