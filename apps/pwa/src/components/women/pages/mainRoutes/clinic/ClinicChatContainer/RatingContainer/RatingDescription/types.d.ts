export interface RatingDescriptionProps {
  rate: number;
  onClick: () => void;
  description: string;
  descriptionHandler: (v: string) => void;
}
