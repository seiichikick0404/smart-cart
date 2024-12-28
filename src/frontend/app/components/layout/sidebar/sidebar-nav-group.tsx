'use client';

import { cn } from '@/app/lib/utils';
import { SidebarNavItem } from './sidebar-nav-item';

interface NavItem {
  name: string;
  href: string;
  icon: any;
}

interface SidebarNavGroupProps {
  name: string;
  items: NavItem[];
  index: number;
}

export function SidebarNavGroup({ name, items, index }: SidebarNavGroupProps) {
  return (
    <div className={cn(index !== 0 && "pt-4 border-t")}>
      <h4 className="px-2 py-2 text-sm font-semibold">{name}</h4>
      <div className="space-y-1">
        {items.map((item) => (
          <SidebarNavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}