import { DashboardShell } from '@/app/components/layout/dashboard-shell';
import { DashboardCards } from '@/app/components/dashboard/dashboard-cards';

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
          <p className="text-muted-foreground">
            レシピとカートの状況を確認できます。
          </p>
        </div>
        <DashboardCards />
      </div>
    </DashboardShell>
  );
}