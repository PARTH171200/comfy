export type Product = {
  slug: string;
  category:
    | 'Spring Mattress'
    | 'Orthopedic Mattress'
    | 'Foam Mattress'
    | 'Coir Mattress'
    | 'Rollable Mattress';
  name: string;
  description: string;
  warranty: string;
  features: string[];
  image: string;
  constructionImage: string;
};
