'use client';

import { RecipeCard } from './recipe-card';

const DUMMY_RECIPES = [
  {
    id: '1',
    name: 'カレーライス',
    description: '野菜たっぷりのカレーライス',
    price: 850,
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=400',
    category: '主食',
    available: true,
  },
  {
    id: '2',
    name: 'ハンバーグ定食',
    description: 'ジューシーな手作りハンバーグ',
    price: 980,
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400',
    category: '定食',
    available: true,
  },
];

export function RecipeGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {DUMMY_RECIPES.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}