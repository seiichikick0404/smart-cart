'use client';

import { RecipeGallery } from '@/app/components/recipes/recipe-gallery';
import { RecipeModal } from '@/app/components/recipes/recipe-modal';
import { Button } from '@/app/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { SiteHeader } from '../components/layout/header/site-header';

export default function RecipesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <SiteHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">レシピ一覧</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            新規レシピ
          </Button>
        </div>
        <RecipeGallery />
        <RecipeModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </div>
  );
}