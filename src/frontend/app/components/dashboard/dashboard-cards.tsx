'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { ChefHat, ShoppingCart, History } from 'lucide-react';
import Link from 'next/link';

const dashboardData = [
  {
    title: '登録レシピ',
    value: '12',
    description: '最近追加: カレーライス',
    icon: ChefHat,
    href: '/recipes',
  },
  {
    title: 'カート追加待ち',
    value: '3',
    description: '合計: ¥2,450',
    icon: ShoppingCart,
    href: '/cart',
  },
  {
    title: '今月の注文',
    value: '8',
    description: '合計: ¥24,800',
    icon: History,
    href: '/orders',
  },
];

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {dashboardData.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.href} key={item.title}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
