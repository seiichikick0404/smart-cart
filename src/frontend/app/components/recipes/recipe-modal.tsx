'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { RecipeForm } from './recipe-form';

interface RecipeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeModal({ open, onOpenChange }: RecipeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>新規レシピ登録</DialogTitle>
        </DialogHeader>
        <div className="pr-6">
          <RecipeForm onSuccess={() => onOpenChange(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}