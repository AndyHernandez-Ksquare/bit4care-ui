export interface B4CProviderCardProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  availability: string;
  rate: string;
  skills: string[];
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}