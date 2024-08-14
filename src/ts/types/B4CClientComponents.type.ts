export interface B4CReviewComponentProps {
  reviews: Review[]
}


export interface B4CStepperProps {
  activeStep: number;
  steps: string[];
}

interface Review {
  user: string;
  rating: number;
  reviewDate: string;
  description: string
}