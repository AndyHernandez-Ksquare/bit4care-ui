export interface B4CProviderCardProps {
  careerId: number;
  name: string;
  specialty: string;
  rating: number;
  availability: string;
  rate: string;
  skills?: string[];
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}