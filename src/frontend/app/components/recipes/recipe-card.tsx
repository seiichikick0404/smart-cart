import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import Image from 'next/image';

interface Recipe {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  available: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={recipe.imageUrl}
          alt={recipe.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{recipe.name}</h3>
          <Badge variant={recipe.available ? 'default' : 'secondary'}>
            {recipe.available ? '提供中' : '準備中'}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{recipe.description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
          <Badge variant="outline">{recipe.category}</Badge>
          <span className="font-bold">¥{recipe.price.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}