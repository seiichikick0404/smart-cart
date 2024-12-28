'use client';

import Link from 'next/link';
import { ChefHat } from 'lucide-react';
import { MainNav } from './main-nav';
import { ThemeToggle } from './theme-toggle';
import { UserNav } from './user-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/dashboard" className="flex items-center space-x-2 pl-4">
          <ChefHat className="h-6 w-6" />
          <span className="font-bold">Smart Cart</span>
        </Link>
        <div className="mx-12 pl-4">
          <MainNav />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}