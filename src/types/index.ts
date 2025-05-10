export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}