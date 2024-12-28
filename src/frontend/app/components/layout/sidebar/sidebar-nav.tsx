'use client';

import { ChefHat, ShoppingCart, Home, Utensils, History } from 'lucide-react';
import { SidebarNavGroup } from './sidebar-nav-group';
import { SidebarNavItem } from './sidebar-nav-item';

const navigation = [
  { name: 'ダッシュボード', href: '/dashboard', icon: Home },
  {
    name: 'レシピ管理',
    items: [
      { name: '登録レシピ', href: '/recipes', icon: ChefHat },
      { name: '食材登録', href: '/ingredients', icon: Utensils },
    ]
  },
  {
    name: 'カート管理',
    items: [
      { name: 'カートへ追加', href: '/cart', icon: ShoppingCart },
    ],
  },
  {
    name: '注文管理',
    items: [
      { name: '注文履歴', href: '/orders', icon: History },
    ],
  }
];

export function SidebarNav() {
  return (
    <nav className="space-y-6">
      {navigation.map((group, index) => (
        group.items ? (
          <SidebarNavGroup
            key={group.name}
            name={group.name}
            items={group.items}
            index={index}
          />
        ) : (
          <SidebarNavItem
            key={group.href}
            href={group.href}
            icon={group.icon}
            name={group.name}
          />
        )
      ))}
    </nav>
  );
}