export interface B4CReviewComponentProps {
  reviews: Review[]
}

interface Review {
  user: string;
  rating: number;
  reviewDate: string;
  description: string
}